// Kitty AI Grading & Dialogue Generation Service
// Integrates with Google Gemini API and provides client-side offline heuristics.

function normalizeText(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\"'']/g, '') // remove punctuation
    .replace(/\s+/g, ' ')                          // normalize spaces
    .trim();
}

function localEvaluateTurn(userAnswer, targetTurn) {
  const normUser = normalizeText(userAnswer);
  const normMain = normalizeText(targetTurn.english);
  const normAlts = (targetTurn.alternativeAnswers || []).map(alt => normalizeText(alt));

  const isMatch = normUser === normMain || normAlts.includes(normUser);

  if (isMatch) {
    return {
      isCorrect: true,
      explanation: "Tuyệt vời! Câu trả lời của bạn hoàn toàn chính xác.",
      suggestedTranslation: targetTurn.english,
      analysis: {
        meaning: targetTurn.meaning,
        grammar: targetTurn.grammarNotes,
        vocabulary: targetTurn.vocabulary || [],
        nativeTip: targetTurn.nativeTip
      }
    };
  }

  // Edit distance check
  const dist = levenshteinDistance(normUser, normMain);
  const maxLen = Math.max(normUser.length, normMain.length);
  const similarity = maxLen === 0 ? 1 : 1 - dist / maxLen;

  if (similarity > 0.85) {
    return {
      isCorrect: false,
      explanation: "Rất gần đúng! Có vẻ bạn viết sai chính tả nhẹ hoặc thiếu một từ nhỏ. Hãy xem đáp án chi tiết phía dưới nhé.",
      suggestedTranslation: targetTurn.english,
      analysis: {
        meaning: targetTurn.meaning,
        grammar: targetTurn.grammarNotes,
        vocabulary: targetTurn.vocabulary || [],
        nativeTip: targetTurn.nativeTip
      }
    };
  }

  // Simple local heuristics for common beginner errors
  let localFeedback = "Câu trả lời chưa chính xác. Bạn hãy đối chiếu với đáp án chuẩn bên dưới.";
  if (normUser.includes("he have") || normUser.includes("she have") || normUser.includes("it have")) {
    localFeedback = "Lỗi chia động từ: Chủ ngữ số ít 'He/She/It' cần dùng động từ 'has' thay vì 'have'.";
  } else if (normUser.includes("i call") && normMain.includes("i'll call")) {
    localFeedback = "Thiếu cấu trúc rút gọn tương lai: Bạn nên dùng 'I'll call' (I will call) cho hành động xảy ra sau đó.";
  }

  return {
    isCorrect: false,
    explanation: localFeedback,
    suggestedTranslation: targetTurn.english,
    analysis: {
      meaning: targetTurn.meaning,
      grammar: targetTurn.grammarNotes,
      vocabulary: targetTurn.vocabulary || [],
      nativeTip: targetTurn.nativeTip
    }
  };
}

function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

window.aiService = {
  // Call Gemini API to evaluate a user's dialogue turn
  async evaluateTranslation(userAnswer, targetTurn) {
    const settings = window.db.getSettings();
    const apiKey = settings.geminiApiKey;

    if (!apiKey) {
      // Offline fallback
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(localEvaluateTurn(userAnswer, targetTurn));
        }, 800);
      });
    }

    const systemPrompt = `You are Kitty AI, an expert, encouraging English language tutor. Your task is to evaluate a Vietnamese student's translation of a conversational reply.
We have:
- Vietnamese prompt: "${targetTurn.promptVietnamese}"
- Expected English translation: "${targetTurn.english}"
- Accepted alternatives: ${JSON.stringify(targetTurn.alternativeAnswers || [])}
- Student's typed translation: "${userAnswer}"

Evaluate if the student's translation is natural, acceptable, and conveys the target meaning.
Note: Ignore minor capitalization, punctuation, and double spacing. Contractions (like "I'm" vs "I am") are correct.

If correct: return isCorrect = true. Provide helpful grammatical analysis, vocabulary list, and a native tip.
If incorrect: return isCorrect = false. Pinpoint exactly what's wrong (e.g. wrong tense, spelling error, missing preposition) in Vietnamese. Show the correct answer and explain the grammar.

Response MUST be a JSON object ONLY, matching this exact structure:
{
  "isCorrect": boolean,
  "explanation": "Detailed explanation of feedback/error in Vietnamese",
  "suggestedTranslation": "The closest correct answer or corrected user sentence",
  "analysis": {
    "meaning": "Vietnamese translation meaning",
    "grammar": "Brief grammar note in Vietnamese",
    "vocabulary": [{"term": "word", "type": "noun/verb/etc", "explanation": "Vietnamese explanation"}],
    "nativeTip": "Spoken/written English tip for this phrase in Vietnamese"
  }
}`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: systemPrompt }] }],
            generationConfig: { responseMimeType: 'application/json' }
          })
        }
      );

      if (!response.ok) throw new Error(`Gemini HTTP Error: ${response.status}`);
      const data = await response.json();
      const rawText = data.candidates[0].content.parts[0].text;
      return JSON.parse(rawText);
    } catch (error) {
      console.error("AI turn evaluation failed, falling back locally", error);
      return localEvaluateTurn(userAnswer, targetTurn);
    }
  },

  // Call Gemini to ingest text pages from a PDF and generate a conversation session
  async generateConversationFromPdf(pdfText, bookTitle) {
    const settings = window.db.getSettings();
    const apiKey = settings.geminiApiKey;

    if (!apiKey) {
      throw new Error("Vui lòng cấu hình Gemini API Key trong mục Cài đặt để sử dụng tính năng trích xuất sách.");
    }

    const prompt = `You are Kitty AI, a SaaS learning system engine.
Read this textbook text, extract the key vocabulary/grammar concepts, and create an interactive English practice conversation (4-6 turns total) for a Vietnamese student.
The conversation must represent realistic, everyday spoken English.
The speaker turns must alternate between 'ai' and 'user'. The first turn MUST be 'ai'.

Textbook Extracted Text:
"""
${pdfText}
"""

For each 'ai' turn, provide:
- \`text\`: the English phrase spoken by the AI.
- \`speaker\`: "ai"

For each 'user' turn, provide:
- \`promptVietnamese\`: the Vietnamese sentence the student is prompted to translate.
- \`english\`: the expected English translation.
- \`alternativeAnswers\`: 2-3 other correct English translations.
- \`meaning\`: Vietnamese explanation of the phrase.
- \`grammarNotes\`: Grammatical breakdowns in Vietnamese.
- \`vocabulary\`: A list of words with \`term\`, \`type\`, and \`explanation\` in Vietnamese.
- \`nativeTip\`: Spoken English tips in Vietnamese.
- \`speaker\`: "user"

Response MUST be a JSON object ONLY, matching this exact structure:
{
  "title": "A short descriptive title for this conversation in Vietnamese (e.g. Học từ bài 3: ...)",
  "topic": "General topic name matching the text (e.g. Food, Travel, Work)",
  "difficulty": "easy/medium/hard (choose one based on complexity)",
  "tags": ["${bookTitle}", "PDF Ingest"],
  "turns": [
    {
      "speaker": "ai",
      "text": "..."
    },
    {
      "speaker": "user",
      "promptVietnamese": "...",
      "english": "...",
      "alternativeAnswers": ["...", "..."],
      "meaning": "...",
      "grammarNotes": "...",
      "vocabulary": [
        { "term": "...", "type": "...", "explanation": "..." }
      ],
      "nativeTip": "..."
    }
    // and so on...
  ]
}`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: 'application/json' }
          })
        }
      );

      if (!response.ok) throw new Error(`Gemini HTTP Error: ${response.status}`);
      const data = await response.json();
      const rawText = data.candidates[0].content.parts[0].text;
      
      const parsedConversation = JSON.parse(rawText);
      
      // Inject unique ID
      parsedConversation.id = `pdf-conv-${Date.now()}`;
      
      // Save to database
      const addedCount = window.db.addConversations([parsedConversation]);
      return {
        conversation: parsedConversation,
        addedCount
      };
    } catch (error) {
      console.error("AI conversation generation failed:", error);
      throw error;
    }
  }
};
