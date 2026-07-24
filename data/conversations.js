// Kitty Pre-seeded Conversation Database (Static JS-DB)
// Preloaded with completed units from your 4 textbooks, divided into bite-sized dialogues of 10 turns (total 30 turns per Unit).

window.defaultConversations = [
  // ==========================================
  // 📚 BOOK 1: English Vocabulary in Use (Elementary)
  // Unit 1: Family & Introductions (30 turns total)
  // ==========================================
  
  // --- Unit 1 - Part 1: Greetings & Names (10 turns) ---
  {
    id: "evu-elem-u1-p1",
    title: "Unit 1 (Part 1): Gặp gỡ & Hỏi tên",
    topic: "Family & People",
    difficulty: "easy",
    tags: ["Vocabulary in Use (Elementary)", "Unit 1: Family & Introductions", "A1"],
    turns: [
      { speaker: "ai", text: "Hello! My name is Emily. What is your name?" },
      {
        speaker: "user",
        promptVietnamese: "Xin chào Emily. Tên tôi là Nam.",
        english: "Hello Emily. My name is Nam.",
        alternativeAnswers: ["Hi Emily, I'm Nam", "Hello Emily, I am Nam"],
        meaning: "Chào Emily, tên tôi là Nam.",
        grammarNotes: "Dùng 'My name is...' hoặc 'I'm...' để giới thiệu bản thân.",
        vocabulary: [{ term: "name", type: "noun", explanation: "tên gọi" }],
        nativeTip: "Trong đời sống thường ngày, 'I'm Nam' nghe tự nhiên và ngắn gọn hơn."
      },
      { speaker: "ai", text: "Nice to meet you, Nam. Are you from Vietnam?" },
      {
        speaker: "user",
        promptVietnamese: "Vâng, đúng vậy. Tôi sống ở thành phố Hồ Chí Minh.",
        english: "Yes, I am. I live in Ho Chi Minh City.",
        alternativeAnswers: ["Yes, that's right. I live in Ho Chi Minh City", "Yes, I live in HCMC"],
        meaning: "Vâng, tôi đến từ Việt Nam. Tôi sống ở TP.HCM.",
        grammarNotes: "Thì Hiện tại đơn 'I live' chỉ trạng thái sinh sống lâu dài.",
        vocabulary: [{ term: "live", type: "verb", explanation: "sinh sống" }],
        nativeTip: "Người bản xứ thường viết tắt Ho Chi Minh City thành HCMC."
      },
      { speaker: "ai", text: "Wow, HCMC is a beautiful city! Who do you live with?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi sống cùng với gia đình của tôi.",
        english: "I live with my family.",
        alternativeAnswers: ["I am living with my family", "I live together with my family"],
        meaning: "Tôi sống cùng gia đình mình.",
        grammarNotes: "Giới từ 'with' đi sau động từ 'live' để chỉ người sống cùng.",
        vocabulary: [{ term: "family", type: "noun", explanation: "gia đình" }],
        nativeTip: "Bạn có thể nói 'I live on my own' nếu muốn nói mình sống một mình."
      },
      { speaker: "ai", text: "How big is your family? Do you have any siblings?" },
      {
        speaker: "user",
        promptVietnamese: "Gia đình tôi có bốn người. Tôi có một em gái.",
        english: "There are four people in my family. I have a younger sister.",
        alternativeAnswers: ["My family has four people. I have a sister", "We are four in my family. I've got a younger sister"],
        meaning: "Gia đình tôi có 4 thành viên. Tôi có một em gái.",
        grammarNotes: "Cấu trúc 'There are + number' dùng để chỉ số lượng người/vật tồn tại.",
        vocabulary: [{ term: "younger sister", type: "noun", explanation: "em gái" }],
        nativeTip: "Dùng 'younger sister' thay vì chỉ nói 'sister' để làm rõ vai vế nhỏ tuổi hơn."
      },
      { speaker: "ai", text: "That is lovely! How old is your sister?" },
      {
        speaker: "user",
        promptVietnamese: "Em gái tôi mười tám tuổi. Em ấy là sinh viên đại học.",
        english: "My sister is eighteen years old. She is a university student.",
        alternativeAnswers: ["She is 18. She is a college student", "My sister is 18. She study at university"],
        meaning: "Em gái tôi 18 tuổi. Em ấy là sinh viên đại học.",
        grammarNotes: "Chủ ngữ số ít 'She' đi kèm động từ to be 'is'.",
        vocabulary: [{ term: "university student", type: "noun", explanation: "sinh viên đại học" }],
        nativeTip: "Người Mỹ hay dùng 'college student' cho cả sinh viên đại học nói chung."
      }
    ]
  },

  // --- Unit 1 - Part 2: Family Relations (10 turns) ---
  {
    id: "evu-elem-u1-p2",
    title: "Unit 1 (Part 2): Quan hệ gia đình",
    topic: "Family & People",
    difficulty: "easy",
    tags: ["Vocabulary in Use (Elementary)", "Unit 1: Family & Introductions", "A1"],
    turns: [
      { speaker: "ai", text: "Is your sister older than you, or are you the oldest sibling?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi là anh cả. Tôi lớn hơn em gái tôi bốn tuổi.",
        english: "I am the oldest. I am four years older than my sister.",
        alternativeAnswers: ["I'm the elder brother. I'm four years older than her", "I'm the oldest sibling. I'm older than her by 4 years"],
        meaning: "Tôi là lớn nhất. Tôi hơn em gái 4 tuổi.",
        grammarNotes: "Cấu trúc so sánh hơn: 'adjective-er + than'.",
        vocabulary: [{ term: "oldest", type: "adjective", explanation: "lớn tuổi nhất" }],
        nativeTip: "Dùng 'oldest sibling' để chỉ anh/chị cả trong nhà."
      },
      { speaker: "ai", text: "I see. And what do your parents do for a living?" },
      {
        speaker: "user",
        promptVietnamese: "Bố tôi là kỹ sư, còn mẹ tôi là giáo viên.",
        english: "My father is an engineer, and my mother is a teacher.",
        alternativeAnswers: ["My dad is an engineer, and my mom is a teacher", "My father works as an engineer, and my mother is a teacher"],
        meaning: "Bố tôi làm kỹ sư, mẹ tôi làm giáo viên.",
        grammarNotes: "Dùng mạo từ 'an' trước danh từ bắt đầu bằng nguyên âm 'engineer'.",
        vocabulary: [
          { term: "engineer", type: "noun", explanation: "kỹ sư" },
          { term: "teacher", type: "noun", explanation: "giáo viên" }
        ],
        nativeTip: "Từ 'dad' và 'mom' thân mật hơn 'father' và 'mother'."
      },
      { speaker: "ai", text: "They have great jobs! Do you visit your parents often?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi sống xa nhà nhưng tôi về thăm họ mỗi cuối tuần.",
        english: "I live far from home, but I visit them every weekend.",
        alternativeAnswers: ["I live far away, but I visit them on weekends", "I live far from my parents, but I visit them every weekend"],
        meaning: "Tôi sống xa nhà nhưng cuối tuần nào cũng về thăm bố mẹ.",
        grammarNotes: "Dùng liên từ 'but' để nối hai mệnh đề tương phản.",
        vocabulary: [{ term: "every weekend", type: "phrase", explanation: "mỗi cuối tuần" }],
        nativeTip: "Cụm 'live far from home' rất tự nhiên khi nói về việc sống xa gia đình."
      },
      { speaker: "ai", text: "That is very responsible of you. Do you have any aunts or uncles?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi có một người cậu và hai người dì bên ngoại.",
        english: "I have one uncle and two aunts on my mother's side.",
        alternativeAnswers: ["I've got an uncle and two aunts on my mom's side", "I have one uncle and two aunts from my mother's family"],
        meaning: "Tôi có một cậu và hai dì bên ngoại.",
        grammarNotes: "Sử dụng 'on [someone]'s side' để chỉ họ hàng bên nội hoặc ngoại.",
        vocabulary: [
          { term: "uncle", type: "noun", explanation: "cậu, chú, bác trai" },
          { term: "aunt", type: "noun", explanation: "dì, cô, bác gái" }
        ],
        nativeTip: "Cụm 'on my mother's side' là cách chuẩn nhất để nói 'bên ngoại'."
      },
      { speaker: "ai", text: "Nice! Are you close with your cousins?" },
      {
        speaker: "user",
        promptVietnamese: "Vâng, chúng tôi thỉnh thoảng tụ tập ăn tối cùng nhau.",
        english: "Yes, we sometimes gather for dinner together.",
        alternativeAnswers: ["Yes, we sometimes meet up for dinner", "Yes, we often have dinner together"],
        meaning: "Có, chúng tôi thỉnh thoảng ăn tối cùng nhau.",
        grammarNotes: "Trạng từ tần suất 'sometimes' đứng trước động từ thường 'gather'.",
        vocabulary: [
          { term: "gather", type: "verb", explanation: "tụ họp, sum họp" },
          { term: "cousin", type: "noun", explanation: "anh chị em họ" }
        ],
        nativeTip: "Dùng cụm 'meet up' thay cho 'gather' trong bối cảnh bạn bè/họ hàng trẻ tuổi thân mật."
      }
    ]
  },

  // --- Unit 1 - Part 3: Grandparents & Marital Status (10 turns) ---
  {
    id: "evu-elem-u1-p3",
    title: "Unit 1 (Part 3): Ông bà & Hôn nhân",
    topic: "Family & People",
    difficulty: "easy",
    tags: ["Vocabulary in Use (Elementary)", "Unit 1: Family & Introductions", "A1"],
    turns: [
      { speaker: "ai", text: "Do your grandparents still live with your family?" },
      {
        speaker: "user",
        promptVietnamese: "Không, ông bà tôi sống ở quê nhà của họ.",
        english: "No, my grandparents live in their hometown.",
        alternativeAnswers: ["No, they live in the countryside", "No, my grandparents live in their home village"],
        meaning: "Không, ông bà tôi sống ở quê.",
        grammarNotes: "Dùng từ 'hometown' để chỉ quê quán, nơi sinh ra và lớn lên.",
        vocabulary: [{ term: "hometown", type: "noun", explanation: "quê nhà, quê quán" }],
        nativeTip: "Người phương Tây hay dùng 'hometown' thay vì 'countryside' trừ khi muốn nhấn mạnh vùng nông thôn."
      },
      { speaker: "ai", text: "Hometowns are always cozy. Are you married, Nam?" },
      {
        speaker: "user",
        promptVietnamese: "Không, tôi vẫn còn độc thân. Tôi chưa kết hôn.",
        english: "No, I am still single. I am not married yet.",
        alternativeAnswers: ["No, I'm single. I'm not married", "No, I'm still single. I haven't married yet"],
        meaning: "Không, tôi vẫn đang độc thân. Tôi chưa kết hôn.",
        grammarNotes: "Thì Hiện tại đơn kết hợp phó từ 'still' chỉ trạng thái vẫn tiếp diễn.",
        vocabulary: [
          { term: "single", type: "adjective", explanation: "độc thân" },
          { term: "married", type: "adjective", explanation: "đã kết hôn" }
        ],
        nativeTip: "Thêm từ 'yet' ở cuối câu phủ định để diễn tả 'chưa làm gì đó tính đến thời điểm hiện tại'."
      },
      { speaker: "ai", text: "That is completely fine, take your time! Do you have a girlfriend?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi đang hẹn hò với một cô gái, nhưng chưa có gì chính thức.",
        english: "I am dating a girl, but it is not official yet.",
        alternativeAnswers: ["I'm seeing a girl, but nothing is official yet", "I am going out with someone, but it's not official"],
        meaning: "Tôi đang hẹn hò một cô gái nhưng chưa có gì chính thức.",
        grammarNotes: "Thì Hiện tại Tiếp diễn 'I am dating' biểu thị hành động đang diễn ra gần đây.",
        vocabulary: [
          { term: "dating", type: "verb", explanation: "hẹn hò" },
          { term: "official", type: "adjective", explanation: "chính thức" }
        ],
        nativeTip: "Cụm 'seeing someone' thường được dùng thân mật thay cho 'dating someone'."
      },
      { speaker: "ai", text: "How exciting! How long have you two been together?" },
      {
        speaker: "user",
        promptVietnamese: "Chúng tôi quen nhau được khoảng ba tháng rồi.",
        english: "We have known each other for about three months.",
        alternativeAnswers: ["We have been dating for about 3 months", "We've known each other for around three months"],
        meaning: "Chúng tôi biết nhau được khoảng 3 tháng rồi.",
        grammarNotes: "Thì Hiện tại Hoàn thành 'have known' chỉ hành động bắt đầu từ quá khứ kéo dài đến hiện tại.",
        vocabulary: [{ term: "each other", type: "pronoun", explanation: "lẫn nhau, nhau" }],
        nativeTip: "Dùng giới từ 'for' đi với khoảng thời gian 'about three months'."
      },
      { speaker: "ai", text: "I wish you two the best! Family is very important, isn't it?" },
      {
        speaker: "user",
        promptVietnamese: "Đúng vậy, gia đình luôn là điều ưu tiên hàng đầu của tôi.",
        english: "Yes, family is always my top priority.",
        alternativeAnswers: ["Yes, family always comes first to me", "That's right, my family is the most important thing to me"],
        meaning: "Đúng vậy, gia đình luôn là ưu tiên số một của tôi.",
        grammarNotes: "Dùng tính từ sở hữu 'my' trước cụm danh từ 'top priority'.",
        vocabulary: [{ term: "top priority", type: "noun", explanation: "ưu tiên hàng đầu" }],
        nativeTip: "Thành ngữ 'family comes first' (gia đình là trên hết) cực kỳ thông dụng và tự nhiên."
      }
    ]
  },

  // ==========================================
  // Unit 2: Birth, Marriage and Death (30 turns total)
  // ==========================================
  
  // --- Unit 2 - Part 1: Birth & Naming (10 turns) ---
  {
    id: "evu-elem-u2-p1",
    title: "Unit 2 (Part 1): Chào đời & Đặt tên",
    topic: "Family & People",
    difficulty: "easy",
    tags: ["Vocabulary in Use (Elementary)", "Unit 2: Birth, marriage and death", "A1"],
    turns: [
      { speaker: "ai", text: "Hey! Did you hear the news? Anna had a baby yesterday morning!" },
      {
        speaker: "user",
        promptVietnamese: "Tuyệt vời quá! Đứa trẻ sinh ra vào mấy giờ thế?",
        english: "That's great! What time was the baby born?",
        alternativeAnswers: ["Awesome! When was he born?", "That's wonderful! What time was he born?"],
        meaning: "Tuyệt vời! Đứa trẻ chào đời lúc mấy giờ thế?",
        grammarNotes: "Cấu trúc bị động của 'born' luôn chia ở quá khứ: 'was/were born'.",
        vocabulary: [{ term: "born", type: "verb", explanation: "được sinh ra, chào đời" }],
        nativeTip: "Luôn dùng 'was born' khi nói về sự sinh ra, không dùng 'is born' hay 'borns'."
      },
      { speaker: "ai", text: "He was born at 1:15 yesterday morning. He weighed 3 kilograms." },
      {
        speaker: "user",
        promptVietnamese: "Đứa bé nặng cân đó! Họ định đặt tên cậu ấy là gì?",
        english: "The baby is heavy! What are they going to call him?",
        alternativeAnswers: ["That's a heavy baby! What will they name him?", "He weighed a lot! What is his name going to be?"],
        meaning: "Em bé nặng cân đó chứ! Họ định gọi tên cậu ấy là gì?",
        grammarNotes: "Cấu trúc tương lai gần 'be going to + V' chỉ một dự định/kế hoạch đã định sẵn.",
        vocabulary: [{ term: "call", type: "verb", explanation: "gọi tên, đặt tên là" }],
        nativeTip: "Người bản xứ hay dùng 'call him [Name]' thay vì 'name him' trong khẩu ngữ."
      },
      { speaker: "ai", text: "They are going to call him John - after his grandfather." },
      {
        speaker: "user",
        promptVietnamese: "Đặt tên theo ông nội của cậu ấy sao? Ý nghĩa quá.",
        english: "Call him after his grandfather? That is very meaningful.",
        alternativeAnswers: ["Named after his granddad? That is so nice", "Calling him after his grandfather is very meaningful"],
        meaning: "Đặt tên theo ông nội sao? Rất ý nghĩa.",
        grammarNotes: "Cụm động từ 'call/name after' có nghĩa là đặt tên theo gương ai đó.",
        vocabulary: [{ term: "call after", type: "phrasal verb", explanation: "đặt tên theo gương ai" }],
        nativeTip: "'Name after' hoặc 'call after' rất thông dụng trong văn hoá gia đình phương Tây."
      },
      { speaker: "ai", text: "Yes, and his grandfather's birthday is June 16th too - born in 1957!" },
      {
        speaker: "user",
        promptVietnamese: "Thật là một sự trùng hợp! Ông ấy sinh năm 1957 à?",
        english: "What a coincidence! Was he born in 1957?",
        alternativeAnswers: ["That is a coincidence! He was born in 1957, right?", "A nice coincidence! Was his grandfather born in 1957?"],
        meaning: "Thật là trùng hợp ngẫu nhiên! Ông ấy sinh năm 1957 hả?",
        grammarNotes: "Dùng cấu trúc cảm thán 'What a + noun!' (Thật là...).",
        vocabulary: [{ term: "coincidence", type: "noun", explanation: "sự trùng hợp ngẫu nhiên" }],
        nativeTip: "Cụm từ cảm thán 'What a coincidence!' được dùng cực kỳ nhiều khi phát hiện sự trùng lặp thú vị."
      },
      { speaker: "ai", text: "Exactly! And the baby's parents were born in 1986." },
      {
        speaker: "user",
        promptVietnamese: "Bố mẹ đứa trẻ sinh năm 1986. Họ còn trẻ.",
        english: "The baby's parents were born in 1986. They are young.",
        alternativeAnswers: ["His parents were born in 1986. They are still young", "The parents were born in 1986, so they are quite young"],
        meaning: "Bố mẹ em bé sinh năm 1986. Họ vẫn còn khá trẻ.",
        grammarNotes: "Chủ ngữ số nhiều 'parents' đi với động từ to be quá khứ 'were'.",
        vocabulary: [{ term: "parents", type: "noun", explanation: "bố mẹ (số nhiều)" }],
        nativeTip: "Thêm 'quite' hoặc 'pretty' trước tính từ để làm giảm mức độ: 'pretty young' (khá trẻ)."
      }
    ]
  },

  // --- Unit 2 - Part 2: Marriage & Honeymoon (10 turns) ---
  {
    id: "evu-elem-u2-p2",
    title: "Unit 2 (Part 2): Kết hôn & Tuần trăng mật",
    topic: "Family & People",
    difficulty: "easy",
    tags: ["Vocabulary in Use (Elementary)", "Unit 2: Birth, marriage and death", "A1"],
    turns: [
      { speaker: "ai", text: "Are Harry and Sarah still single, or did they finally get married?" },
      {
        speaker: "user",
        promptVietnamese: "Họ đã kết hôn rồi. Họ làm đám cưới vào năm 2001.",
        english: "They got married. They married in 2001.",
        alternativeAnswers: ["They are married now. They got married in 2001", "They got married in 2001"],
        meaning: "Họ cưới rồi. Họ kết hôn vào năm 2001.",
        grammarNotes: "Dùng 'got married' (thân mật) hoặc 'married' (trang trọng) để chỉ việc đám cưới.",
        vocabulary: [{ term: "get married", type: "verb phrase", explanation: "kết hôn, cưới" }],
        nativeTip: "Người bản xứ nói 'They got married' thông dụng hơn rất nhiều so với 'They married'."
      },
      { speaker: "ai", text: "Oh, congratulations to them! Where did they go for their honeymoon?" },
      {
        speaker: "user",
        promptVietnamese: "Họ đã đi nghỉ tuần trăng mật ở nước Ý.",
        english: "They went on their honeymoon to Italy.",
        alternativeAnswers: ["They travelled to Italy for their honeymoon", "They went to Italy on their honeymoon"],
        meaning: "Họ đi hưởng tuần trăng mật ở Ý.",
        grammarNotes: "Cụm từ 'go on a honeymoon' (đi hưởng tuần trăng mật).",
        vocabulary: [{ term: "honeymoon", type: "noun", explanation: "tuần trăng mật" }],
        nativeTip: "Luôn dùng giới từ 'to' sau honeymoon để chỉ điểm đến: 'honeymoon to Italy'."
      },
      { speaker: "ai", text: "Italy is so romantic! How long have they been married now?" },
      {
        speaker: "user",
        promptVietnamese: "Họ đã kết hôn được mười lăm năm rồi.",
        english: "They have been married for fifteen years.",
        alternativeAnswers: ["They've been married for 15 years now", "They were married for 15 years"],
        meaning: "Họ đã lấy nhau được 15 năm rồi.",
        grammarNotes: "Phân biệt 'got married' (hành động cưới) và 'be married' (trạng thái hôn nhân).",
        vocabulary: [{ term: "married", type: "adjective", explanation: "đang trong trạng thái kết hôn" }],
        nativeTip: "Dùng 'have been married' đi với khoảng thời gian để chỉ độ dài cuộc hôn nhân."
      },
      { speaker: "ai", text: "Wow, 15 years is a long time. Did Sarah marry with Harry or someone else?" },
      {
        speaker: "user",
        promptVietnamese: "Sarah đã kết hôn với Harry. Không phải người khác đâu.",
        english: "Sarah got married to Harry. Not someone else.",
        alternativeAnswers: ["Sarah married Harry. Not anyone else", "She got married to Harry, indeed."],
        meaning: "Sarah cưới Harry. Không phải ai khác.",
        grammarNotes: "Giới từ đi sau married luôn là 'to', KHÔNG dùng 'with'.",
        vocabulary: [{ term: "married to", type: "phrase", explanation: "kết hôn với ai" }],
        nativeTip: "Lỗi cực kỳ phổ biến của người Việt là nói 'married with'. Hãy luôn dùng 'married to'."
      },
      { speaker: "ai", text: "Good to know. I hope their marriage stays strong and they never get divorced." },
      {
        speaker: "user",
        promptVietnamese: "Đúng vậy, ly hôn hoặc ly thân đều rất đau lòng.",
        english: "Yes, getting divorced or separated is very heartbreaking.",
        alternativeAnswers: ["Right, divorce or separation is very sad", "Yes, getting separated or divorced is very painful"],
        meaning: "Đúng vậy, ly hôn hay ly thân đều rất đau đớn/buồn bã.",
        grammarNotes: "Phân biệt 'separated' (ly thân - sống riêng) và 'divorced' (ly hôn pháp lý).",
        vocabulary: [
          { term: "separated", type: "adjective", explanation: "ly thân" },
          { term: "divorced", type: "adjective", explanation: "ly hôn" }
        ],
        nativeTip: "Người bản xứ dùng 'split up' hoặc 'break up' như cụm từ thân mật chỉ việc chia tay/ly thân."
      }
    ]
  },

  // --- Unit 2 - Part 3: Illness & Death (10 turns) ---
  {
    id: "evu-elem-u2-p3",
    title: "Unit 2 (Part 3): Đau ốm & Qua đời",
    topic: "Family & People",
    difficulty: "easy",
    tags: ["Vocabulary in Use (Elementary)", "Unit 2: Birth, marriage and death", "A1"],
    turns: [
      { speaker: "ai", text: "I have some sad news about Harry. He became very ill last month." },
      {
        speaker: "user",
        promptVietnamese: "Ôi không! Ông ấy bị làm sao thế?",
        english: "Oh no! What happened to him?",
        alternativeAnswers: ["Oh no! What was wrong with him?", "Dear me! What illness did he have?"],
        meaning: "Ôi không! Chuyện gì xảy ra với ông ấy thế?",
        grammarNotes: "Câu hỏi quá khứ đơn 'What happened to...' dùng để hỏi về sự cố xảy ra.",
        vocabulary: [{ term: "became ill", type: "phrase", explanation: "bị đổ bệnh, mắc bệnh" }],
        nativeTip: "Nói 'What happened?' tự nhiên hơn 'What was the problem?'."
      },
      { speaker: "ai", text: "He died last year of a sudden heart attack." },
      {
        speaker: "user",
        promptVietnamese: "Tôi rất tiếc khi nghe điều đó. Ông ấy mất vì đau tim sao?",
        english: "I am sorry to hear that. Did he die of a heart attack?",
        alternativeAnswers: ["Sorry to hear that. Did he pass away from a heart attack?", "I'm so sorry. Did he die from a heart attack?"],
        meaning: "Tôi rất tiếc khi biết tin. Ông ấy qua đời vì đau tim phải không?",
        grammarNotes: "Cấu trúc chỉ nguyên nhân qua đời: 'die of + disease' hoặc 'die from + accident'.",
        vocabulary: [
          { term: "die of", type: "phrase", explanation: "qua đời vì bệnh gì" },
          { term: "heart attack", type: "noun", explanation: "cơn đau tim, đột quỵ" }
        ],
        nativeTip: "'Pass away' là cụm từ nói giảm nói tránh lịch sự thay thế cho động từ 'die'."
      },
      { speaker: "ai", text: "Yes. Now Sarah is widowed and living alone. The funeral was last week." },
      {
        speaker: "user",
        promptVietnamese: "Tội nghiệp Sarah. Đám tang diễn ra ở đâu thế?",
        english: "Poor Sarah. Where did the funeral take place?",
        alternativeAnswers: ["Poor her. Where was the funeral held?", "Poor Sarah. Where was the funeral?"],
        meaning: "Tội nghiệp Sarah. Đám tang tổ chức ở đâu thế?",
        grammarNotes: "Cụm động từ 'take place' nghĩa là diễn ra/tổ chức ở đâu đó.",
        vocabulary: [
          { term: "widowed", type: "adjective", explanation: "bị góa (chồng/vợ mất)" },
          { term: "funeral", type: "noun", explanation: "đám tang, tang lễ" }
        ],
        nativeTip: "'Poor [Name]' là cụm từ cửa miệng biểu thị sự thương cảm đối với hoàn cảnh của ai đó."
      },
      { speaker: "ai", text: "It was held at the local church. Many relatives came to support her." },
      {
        speaker: "user",
        promptVietnamese: "Thật mừng là mọi người ở đó. Harry đã qua đời rồi nhưng sẽ luôn được nhớ tới.",
        english: "I'm glad people were there. Harry is dead but will always be remembered.",
        alternativeAnswers: ["Good that they came. Harry passed away but we will miss him", "Glad to hear that. Harry is gone but not forgotten"],
        meaning: "Mừng là mọi người có mặt. Harry đã mất nhưng sẽ luôn được nhớ tới.",
        grammarNotes: "Phân biệt: 'dead' là tính từ chỉ trạng thái, 'died' là động từ quá khứ.",
        vocabulary: [{ term: "dead", type: "adjective", explanation: "đã chết, đã mất" }],
        nativeTip: "Lỗi người Việt cực hay dùng 'Harry is died' hoặc 'Harry is death'. Hãy nhớ: 'Harry is dead' hoặc 'Harry died'."
      },
      { speaker: "ai", text: "Yes, he was a great man. May he rest in peace." },
      {
        speaker: "user",
        promptVietnamese: "Mong ông ấy yên nghỉ. Cảm ơn bạn đã báo tin.",
        english: "May he rest in peace. Thank you for telling me.",
        alternativeAnswers: ["Rest in peace. Thanks for letting me know", "May he RIP. Thank you for the update"],
        meaning: "Mong ông ấy yên nghỉ. Cảm ơn đã báo tin cho tôi.",
        grammarNotes: "Cấu trúc lời cầu nguyện/mong ước: 'May + subject + verb'.",
        vocabulary: [{ term: "rest in peace", type: "phrase", explanation: "yên nghỉ, an nghỉ (RIP)" }],
        nativeTip: "Viết tắt 'R.I.P' (Rest In Peace) cực kỳ phổ biến trong lời chia buồn tiếng Anh."
      }
    ]
  },

  // ==========================================
  // Unit 4: Clothes (30 turns total)
  // ==========================================
  
  // --- Unit 4 - Part 1: Getting Dressed & Plural Clothes (10 turns) ---
  {
    id: "evu-elem-u4-p1",
    title: "Unit 4 (Part 1): Mặc đồ buổi sáng",
    topic: "Shopping",
    difficulty: "easy",
    tags: ["Vocabulary in Use (Elementary)", "Unit 4: Clothes", "A1"],
    turns: [
      { speaker: "ai", text: "Good morning! It's cold outside today. What are you putting on?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi đang mặc một chiếc áo len và quần dài ấm áp.",
        english: "I am putting on a warm sweater and trousers.",
        alternativeAnswers: ["I'm wearing a warm jumper and pants", "I'm putting on a sweater and these trousers"],
        meaning: "Tôi đang mặc một chiếc áo len và quần dài ấm.",
        grammarNotes: "Phrasal verb 'put on' là hành động xỏ/mặc đồ, còn 'wear' là trạng thái đang mặc đồ trên người.",
        vocabulary: [
          { term: "sweater", type: "noun", explanation: "áo len chui đầu (Anh-Mỹ)" },
          { term: "trousers", type: "noun", explanation: "quần dài (Anh-Anh)" }
        ],
        nativeTip: "Người Anh gọi áo len là 'jumper', người Mỹ gọi là 'sweater'."
      },
      { speaker: "ai", text: "Good choice! Are those trousers new? They look very stylish." },
      {
        speaker: "user",
        promptVietnamese: "Bộ vest của tôi thì mới nhưng chiếc quần này thì cũ rồi.",
        english: "My suit is new, but these trousers are old.",
        alternativeAnswers: ["My suit is new but the trousers are old", "This suit is new but these pants are old"],
        meaning: "Bộ vest của tôi mới nhưng cái quần này cũ rồi.",
        grammarNotes: "Từ 'trousers' luôn ở dạng số nhiều và đi với động từ số nhiều 'are'.",
        vocabulary: [
          { term: "suit", type: "noun", explanation: "bộ vest, comple" },
          { term: "trousers are", type: "grammar", explanation: "luôn dùng động từ số nhiều" }
        ],
        nativeTip: "Tránh nói 'this trousers is old' vì trousers luôn đi với số nhiều 'these' và 'are'."
      },
      { speaker: "ai", text: "Ah, I see. What about your jeans? Are they blue or black?" },
      {
        speaker: "user",
        promptVietnamese: "Quần jean của tôi màu xanh dương. Tôi cũng có quần đùi nữa.",
        english: "My jeans are blue. I have shorts too.",
        alternativeAnswers: ["Her jeans are blue. I've got shorts as well", "My jeans are blue. I also have shorts"],
        meaning: "Quần jean của tôi màu xanh. Tôi cũng có quần đùi nữa.",
        grammarNotes: "Từ 'jeans' và 'shorts' luôn ở số nhiều giống như 'trousers'.",
        vocabulary: [
          { term: "jeans", type: "noun", explanation: "quần bò, quần jean" },
          { term: "shorts", type: "noun", explanation: "quần soóc, quần đùi" }
        ],
        nativeTip: "Bạn có thể nói 'a pair of jeans' hoặc 'a pair of shorts' để đếm số lượng."
      },
      { speaker: "ai", text: "Nice! Are you going to wear socks and boots with your trousers?" },
      {
        speaker: "user",
        promptVietnamese: "Vâng, tôi đang đi tất và mang đôi ủng da của tôi.",
        english: "Yes, I am wearing socks and putting on my leather boots.",
        alternativeAnswers: ["Yes, I'll wear socks and boots", "Yes, socks and leather boots, please"],
        meaning: "Đúng vậy, tôi đi tất và mang đôi ủng da.",
        grammarNotes: "Sử dụng tính từ chỉ chất liệu 'leather' đứng trước danh từ 'boots'.",
        vocabulary: [
          { term: "socks", type: "noun", explanation: "tất, vớ" },
          { term: "boots", type: "noun", explanation: "ủng, bốt" }
        ],
        nativeTip: "Dùng 'put on' cho hành động đang xỏ tất/giày vào chân."
      },
      { speaker: "ai", text: "Perfect. Don't forget your scarf and gloves. It is freezing!" },
      {
        speaker: "user",
        promptVietnamese: "Cảm ơn bạn. Tôi đã quàng khăn cổ và đeo găng tay rồi.",
        english: "Thank you. I have put on my scarf and gloves.",
        alternativeAnswers: ["Thanks. I've got my scarf and gloves on", "Thank you, I already wore my scarf and gloves"],
        meaning: "Cảm ơn, tôi quàng khăn và đeo găng tay rồi.",
        grammarNotes: "Thì Hiện tại Hoàn thành diễn tả hành động chuẩn bị đã xong xuôi.",
        vocabulary: [
          { term: "scarf", type: "noun", explanation: "khăn quàng cổ" },
          { term: "gloves", type: "noun", explanation: "găng tay (số nhiều)" }
        ],
        nativeTip: "Nói 'I have my gloves on' nghĩa là tay đã đang đeo găng tay rồi."
      }
    ]
  },

  // --- Unit 4 - Part 2: Wear vs Carry & Accessories (10 turns) ---
  {
    id: "evu-elem-u4-p2",
    title: "Unit 4 (Part 2): Mặc đồ vs Mang đồ",
    topic: "Shopping",
    difficulty: "easy",
    tags: ["Vocabulary in Use (Elementary)", "Unit 4: Clothes", "A1"],
    turns: [
      { speaker: "ai", text: "I saw Naomi earlier. She was wearing a long blue coat. Was she carrying a bag?" },
      {
        speaker: "user",
        promptVietnamese: "Cô ấy đang xách một chiếc va ly và một chiếc túi xách tay.",
        english: "She was carrying a suitcase and a handbag.",
        alternativeAnswers: ["She was holding a suitcase and carrying a handbag", "She carried a suitcase and a handbag"],
        meaning: "Cô ấy đang mang/xách một cái vali và túi xách.",
        grammarNotes: "Phân biệt: Mặc đồ trên người dùng 'wear', cầm/xách đồ vật di chuyển dùng 'carry'.",
        vocabulary: [
          { term: "carry", type: "verb", explanation: "mang, xách, vác" },
          { term: "handbag", type: "noun", explanation: "túi xách tay nữ" }
        ],
        nativeTip: "Đừng nói 'she is wearing a bag'. Hãy nói 'she is carrying/holding a bag'."
      },
      { speaker: "ai", text: "Ah, she must be travelling. Was she wearing her glasses too?" },
      {
        speaker: "user",
        promptVietnamese: "Không, cô ấy đang đeo kính râm và một chiếc nhẫn vàng.",
        english: "No, she was wearing sunglasses and a gold ring.",
        alternativeAnswers: ["No, she had sunglasses and a gold ring on", "No, she was wearing sunglasses and a ring made of gold"],
        meaning: "Không, cô ấy đeo kính râm và nhẫn vàng.",
        grammarNotes: "Cụm kính mắt 'glasses' hoặc 'sunglasses' đi kèm động từ 'wear' hoặc cụm 'have on'.",
        vocabulary: [
          { term: "sunglasses", type: "noun", explanation: "kính râm, kính mát" },
          { term: "gold ring", type: "noun", explanation: "nhẫn vàng" }
        ],
        nativeTip: "Để nói đeo kính râm, người bản xứ dùng: 'She has sunglasses on'."
      },
      { speaker: "ai", text: "She always looks so elegant. Did she have a watch on?" },
      {
        speaker: "user",
        promptVietnamese: "Có, cô ấy đang đeo một chiếc đồng hồ màu hồng xinh xắn.",
        english: "Yes, she was wearing a cute pink watch.",
        alternativeAnswers: ["Yes, she had a cute pink watch on", "Yes, she wore a lovely pink watch"],
        meaning: "Đúng vậy, cô ấy đeo một cái đồng hồ màu hồng dễ thương.",
        grammarNotes: "Đặt tính từ chỉ kích thước/cảm nhận 'cute' trước tính từ chỉ màu sắc 'pink'.",
        vocabulary: [{ term: "watch", type: "noun", explanation: "đồng hồ đeo tay" }],
        nativeTip: "Trong công sở hay đời sống, dùng 'have a watch on' tự nhiên ngang 'wear a watch'."
      },
      { speaker: "ai", text: "Nice! And was she carrying an umbrella? It looks like rain." },
      {
        speaker: "user",
        promptVietnamese: "Có, cô ấy đang cầm một chiếc ô màu đen trong tay.",
        english: "Yes, she was carrying a black umbrella in her hand.",
        alternativeAnswers: ["Yes, she held a black umbrella", "Yes, she was carrying a black umbrella"],
        meaning: "Có, cô ấy xách/cầm cái ô đen trên tay.",
        grammarNotes: "Sử dụng mạo từ 'an' trước danh từ bắt đầu bằng nguyên âm 'umbrella'.",
        vocabulary: [{ term: "umbrella", type: "noun", explanation: "cây dù, cái ô" }],
        nativeTip: "Dùng động từ 'carry' cho ô dù, túi xách, hành lý."
      },
      { speaker: "ai", text: "Good. What about you? Are you wearing a belt with your jeans?" },
      {
        speaker: "user",
        promptVietnamese: "Có, tôi đang đeo một chiếc thắt lưng da màu nâu.",
        english: "Yes, I am wearing a brown leather belt.",
        alternativeAnswers: ["Yes, I have a brown leather belt on", "Yes, with a brown leather belt"],
        meaning: "Có, tôi đang đeo một chiếc thắt lưng da màu nâu.",
        grammarNotes: "Sắp xếp tính từ: Màu sắc (brown) + Chất liệu (leather) + Danh từ (belt).",
        vocabulary: [{ term: "belt", type: "noun", explanation: "thắt lưng, dây nịt" }],
        nativeTip: "Dùng từ 'leather' để chỉ chất liệu da thuộc cao cấp."
      }
    ]
  },

  // --- Unit 4 - Part 3: Getting Undressed & Shopping (10 turns) ---
  {
    id: "evu-elem-u4-p3",
    title: "Unit 4 (Part 3): Thử đồ & Cởi đồ",
    topic: "Shopping",
    difficulty: "easy",
    tags: ["Vocabulary in Use (Elementary)", "Unit 4: Clothes", "A1"],
    turns: [
      { speaker: "ai", text: "Let's go shopping! I want to buy a new dress. Where can I try this on?" },
      {
        speaker: "user",
        promptVietnamese: "Bạn có thể mặc thử nó ở trong phòng thay đồ đằng kia.",
        english: "You can try it on in the changing room over there.",
        alternativeAnswers: ["You can try it in the fitting room over there", "The fitting room is over there to try it on"],
        meaning: "Bạn thử đồ ở phòng thay đồ đằng kia kìa.",
        grammarNotes: "Khi dùng đại từ 'it/them' với phrasal verb 'try on', đại từ bắt buộc đứng giữa: 'try it on'.",
        vocabulary: [
          { term: "try it on", type: "phrase", explanation: "mặc thử nó lên người" },
          { term: "changing room", type: "noun", explanation: "phòng thay đồ" }
        ],
        nativeTip: "Cụm 'over there' dùng để chỉ vị trí hơi xa tầm tay một chút rất trực quan."
      },
      { speaker: "ai", text: "Thanks! (After trying it) It fits perfectly. When we get home, what do you do first?" },
      {
        speaker: "user",
        promptVietnamese: "Vào buổi tối, tôi thường cởi quần áo và đi tắm.",
        english: "At night, I usually get undressed and take a shower.",
        alternativeAnswers: ["In the evening, I usually take my clothes off and shower", "At night, I get undressed and have a bath"],
        meaning: "Buổi tối tôi thường cởi đồ và đi tắm.",
        grammarNotes: "Trạng từ chỉ tần suất 'usually' đứng trước động từ thường 'get undressed'.",
        vocabulary: [
          { term: "get undressed", type: "verb phrase", explanation: "cởi quần áo ra" },
          { term: "take a shower", type: "verb phrase", explanation: "tắm vòi hoa sen" }
        ],
        nativeTip: "Phân biệt 'get dressed' (mặc đồ vào) và 'get undressed' (cởi hết đồ ra)."
      },
      { speaker: "ai", text: "That is relaxing. Do you take your shoes off inside the house?" },
      {
        speaker: "user",
        promptVietnamese: "Có, tôi luôn cởi giày ra trước khi bước vào phòng khách.",
        english: "Yes, I always take my shoes off before entering the living room.",
        alternativeAnswers: ["Yes, I always take off my shoes before I enter the living room", "Yes, I take my shoes off at the entrance"],
        meaning: "Có, tôi luôn cởi giày trước khi vào phòng khách.",
        grammarNotes: "Cụm động từ 'take off' có thể tách rời: 'take shoes off' hoặc 'take off shoes'.",
        vocabulary: [{ term: "take off", type: "phrasal verb", explanation: "cởi ra (quần áo, giày dép)" }],
        nativeTip: "Tránh nhầm lẫn: Cởi đồ dùng 'take off', cấm dùng 'put off' (trực quan nhưng sai ngữ pháp)."
      },
      { speaker: "ai", text: "Good habit. What do you wear to sleep? Pyjamas?" },
      {
        speaker: "user",
        promptVietnamese: "Đúng vậy, tôi mặc đồ ngủ vì chúng rất thoải mái.",
        english: "Yes, I wear pyjamas because they are very comfortable.",
        alternativeAnswers: ["Yes, I put on pyjamas because they are comfortable", "Right, I wear pyjamas. They're comfy"],
        meaning: "Đúng thế, tôi mặc đồ ngủ vì chúng thoải mái.",
        grammarNotes: "Từ 'pyjamas' luôn ở số nhiều nên dùng đại từ thay thế là 'they'.",
        vocabulary: [
          { term: "pyjamas", type: "noun", explanation: "quần áo ngủ, đồ pijama" },
          { term: "comfortable", type: "adjective", explanation: "thoải mái, dễ chịu" }
        ],
        nativeTip: "Người bản xứ hay nói tắt thoải mái là 'comfy' trong giao tiếp hàng ngày."
      },
      { speaker: "ai", text: "Sleep well! Let's get dressed again tomorrow morning." },
      {
        speaker: "user",
        promptVietnamese: "Chúc ngủ ngon! Ngày mai tôi sẽ mặc chiếc áo thun yêu thích.",
        english: "Good night! Tomorrow I will wear my favorite T-shirt.",
        alternativeAnswers: ["Good night! I'll put on my favorite T-shirt tomorrow", "Good night! Tomorrow I'll wear my favorite tee"],
        meaning: "Chúc ngủ ngon! Ngày mai tôi sẽ mặc chiếc áo thun thích nhất.",
        grammarNotes: "Thì Tương lai đơn 'I will wear' chỉ dự định phát biểu lúc nói.",
        vocabulary: [{ term: "T-shirt", type: "noun", explanation: "áo thun, áo phông ngắn tay" }],
        nativeTip: "Từ 'tee' là cách gọi tắt cực kỳ sành điệu của giới trẻ cho 'T-shirt'."
      }
    ]
  },

  // ==========================================
  // Unit 7: Feelings (30 turns total)
  // ==========================================
  
  // --- Unit 7 - Part 1: Likes, Loves & Hates (10 turns) ---
  {
    id: "evu-elem-u7-p1",
    title: "Unit 7 (Part 1): Yêu, thích & Ghét",
    topic: "Feelings",
    difficulty: "easy",
    tags: ["Vocabulary in Use (Elementary)", "Unit 7: Feelings", "A1"],
    turns: [
      { speaker: "ai", text: "What kind of things do you love and hate in life?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi yêu gia đình tôi và tôi ghét những con nhện.",
        english: "I love my family and I hate spiders.",
        alternativeAnswers: ["I love my family and hate spiders", "I love my family, but I hate spiders"],
        meaning: "Tôi yêu gia đình mình và ghét loài nhện.",
        grammarNotes: "Động từ 'love' (yêu - mức độ cực thích) và 'hate' (ghét cay ghét đắng).",
        vocabulary: [
          { term: "love", type: "verb", explanation: "yêu thương, cực kỳ thích" },
          { term: "hate", type: "verb", explanation: "ghét, căm ghét" }
        ],
        nativeTip: "Spiders ở số nhiều chỉ loài nhện nói chung."
      },
      { speaker: "ai", text: "A lot of people hate spiders! Do you like horror films?" },
      {
        speaker: "user",
        promptVietnamese: "Không, tôi không thích phim kinh dị chút nào.",
        english: "No, I don't like horror films at all.",
        alternativeAnswers: ["No, I don't like horror movies", "No, I hate horror films"],
        meaning: "Không, tôi chẳng thích phim kinh dị tí nào.",
        grammarNotes: "Dùng cụm 'not... at all' cuối câu phủ định để nhấn mạnh 'không chút nào'.",
        vocabulary: [{ term: "horror films", type: "noun", explanation: "phim kinh dị" }],
        nativeTip: "Dùng 'movies' thay cho 'films' phổ biến hơn trong tiếng Anh-Mỹ."
      },
      { speaker: "ai", text: "Me neither, they are too scary. Do you like your job, Nam?" },
      {
        speaker: "user",
        promptVietnamese: "Có, tôi thực sự thích công việc của mình.",
        english: "Yes, I really like my job.",
        alternativeAnswers: ["Yes, I like my job very much", "Yes, I love my job"],
        meaning: "Có, tôi thực sự thích công việc hiện tại.",
        grammarNotes: "Phó từ 'really' bổ nghĩa cho động từ 'like' để tăng mức độ cảm xúc.",
        vocabulary: [{ term: "really", type: "adverb", explanation: "thực sự, thật sự" }],
        nativeTip: "Lỗi người Việt hay nói 'I very like my job'. Nhớ kỹ: tiếng Anh dùng 'I really like...' hoặc 'I like... very much'."
      },
      { speaker: "ai", text: "That is great! What about drinks? Do you prefer coffee or tea?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi thích cà phê hơn trà.",
        english: "I prefer coffee to tea.",
        alternativeAnswers: ["I prefer coffee over tea", "I like coffee more than tea"],
        meaning: "Tôi thích uống cà phê hơn trà.",
        grammarNotes: "Cấu trúc so sánh lựa chọn: 'prefer A to B' (thích A hơn B).",
        vocabulary: [{ term: "prefer", type: "verb", explanation: "thích cái gì hơn cái gì" }],
        nativeTip: "Luôn dùng giới từ 'to' sau prefer khi so sánh hai danh từ."
      },
      { speaker: "ai", text: "Same here. A fresh coffee in the morning makes my day!" },
      {
        speaker: "user",
        promptVietnamese: "Đúng vậy, tôi rất thích bóng đá nữa.",
        english: "Yes, and I really like football too.",
        alternativeAnswers: ["Yes, and I like football very much", "Yes, I'm also a big fan of football"],
        meaning: "Đúng vậy, tôi cũng rất thích bóng đá.",
        grammarNotes: "Từ 'football' (tiếng Anh Anh) tương đương 'soccer' (tiếng Anh Mỹ).",
        vocabulary: [{ term: "football", type: "noun", explanation: "môn bóng đá" }],
        nativeTip: "Cụm 'I'm a big fan of...' tự nhiên và sành điệu hơn cấu trúc 'I like...' thông thường."
      }
    ]
  },

  // --- Unit 7 - Part 2: Emotional States (10 turns) ---
  {
    id: "evu-elem-u7-p2",
    title: "Unit 7 (Part 2): Trạng thái cảm xúc",
    topic: "Feelings",
    difficulty: "easy",
    tags: ["Vocabulary in Use (Elementary)", "Unit 7: Feelings", "A1"],
    turns: [
      { speaker: "ai", text: "How is your grandfather doing? I heard he was sick." },
      {
        speaker: "user",
        promptVietnamese: "Ông ấy rất khỏe rồi, cảm ơn bạn.",
        english: "He's very well, thanks.",
        alternativeAnswers: ["He is doing great, thank you", "He is very well, thank you"],
        meaning: "Ông ấy khoẻ lắm rồi, cảm ơn nhé.",
        grammarNotes: "Cấu trúc trả lời sức khoẻ thông dụng: 'Subject + to be + well'.",
        vocabulary: [{ term: "well", type: "adjective", explanation: "khỏe mạnh, tốt" }],
        nativeTip: "Hỏi thăm người già hãy dùng từ 'well' thay vì chỉ dùng 'good'."
      },
      { speaker: "ai", text: "Glad to hear that. And how about your grandmother?" },
      {
        speaker: "user",
        promptVietnamese: "Bà ấy hơi mệt một chút.",
        english: "She's a bit tired.",
        alternativeAnswers: ["She is a little tired", "She's slightly tired"],
        meaning: "Bà ấy hơi mệt mỏi chút xíu.",
        grammarNotes: "Cụm định lượng mức độ 'a bit' hoặc 'a little' đứng trước tính từ 'tired'.",
        vocabulary: [
          { term: "a bit", type: "adverb", explanation: "một chút, hơi hơi" },
          { term: "tired", type: "adjective", explanation: "mệt mỏi" }
        ],
        nativeTip: "Dùng 'a bit' giúp giảm nhẹ sắc thái tiêu cực của tính từ đứng sau."
      },
      { speaker: "ai", text: "Oh, she should rest. I am very happy about your news!" },
      {
        speaker: "user",
        promptVietnamese: "Cảm ơn bạn. Tôi cũng rất vui mừng vì bạn.",
        english: "Thank you. I am very happy for you too.",
        alternativeAnswers: ["Thanks. I'm so happy for you too", "Thank you, I feel happy for you too"],
        meaning: "Cảm ơn bạn, tôi cũng rất mừng cho bạn.",
        grammarNotes: "Phân biệt: 'happy about' (vui vì chuyện gì của mình/chung) và 'happy for someone' (vui mừng cho ai đó).",
        vocabulary: [{ term: "happy for", type: "phrase", explanation: "vui mừng thay cho ai" }],
        nativeTip: "Lỗi phổ biến của người Việt là nói 'I'm happy for your news'. Hãy nói 'I'm happy about your news'!"
      },
      { speaker: "ai", text: "Thanks. You look a bit angry or upset today. Is everything okay?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi không giận dữ, tôi chỉ đang buồn bã một chút thôi.",
        english: "I am not angry, I am just a little sad.",
        alternativeAnswers: ["I'm not mad, I'm just a bit upset", "No, I'm not angry, just a little sad"],
        meaning: "Tôi không giận, tôi chỉ hơi buồn chút thôi.",
        grammarNotes: "Dùng từ hạn định 'just' để nhấn mạnh 'chỉ là...'.",
        vocabulary: [
          { term: "angry", type: "adjective", explanation: "tức giận, giận dữ" },
          { term: "sad", type: "adjective", explanation: "buồn bã" }
        ],
        nativeTip: "Người Mỹ rất hay dùng từ 'mad' thay cho 'angry' khi nói giận dữ."
      },
      { speaker: "ai", text: "Okay, I hope you feel better soon. Let's get something to eat." },
      {
        speaker: "user",
        promptVietnamese: "Được rồi, tôi bắt đầu thấy đói bụng rồi.",
        english: "Okay, I am starting to get hungry.",
        alternativeAnswers: ["Alright, I'm getting hungry now", "Okay, I feel a bit hungry now"],
        meaning: "Được rồi, tôi đang bắt đầu thấy đói bụng.",
        grammarNotes: "Cấu trúc thay đổi trạng thái: 'get + adjective' (trở nên đói/mệt...).",
        vocabulary: [{ term: "hungry", type: "adjective", explanation: "đói bụng" }],
        nativeTip: "Dùng 'get hungry' biểu thị trạng thái bắt đầu đói bụng."
      }
    ]
  },

  // --- Unit 7 - Part 3: Physical Sensations & Wants (10 turns) ---
  {
    id: "evu-elem-u7-p3",
    title: "Unit 7 (Part 3): Cảm giác cơ thể & Mong muốn",
    topic: "Feelings",
    difficulty: "easy",
    tags: ["Vocabulary in Use (Elementary)", "Unit 7: Feelings", "A1"],
    turns: [
      { speaker: "ai", text: "Are you thirsty too? We can buy some water." },
      {
        speaker: "user",
        promptVietnamese: "Có, tôi khát nước và tôi cũng thấy lạnh nữa.",
        english: "Yes, I am thirsty and I feel cold too.",
        alternativeAnswers: ["Yes, I'm thirsty and I also feel cold", "Yes, thirsty and a bit cold as well"],
        meaning: "Có, tôi khát và cũng thấy lạnh nữa.",
        grammarNotes: "Động từ liên kết 'feel' đi trực tiếp với tính từ 'cold'.",
        vocabulary: [
          { term: "thirsty", type: "adjective", explanation: "khát nước" },
          { term: "cold", type: "adjective", explanation: "lạnh" }
        ],
        nativeTip: "Hỏi 'Are you thirsty?' tự nhiên hơn nhiều so với việc hỏi 'Do you want to drink?'."
      },
      { speaker: "ai", text: "Here is your jacket. I hope you do well in your exam tomorrow!" },
      {
        speaker: "user",
        promptVisual: "Cảm ơn bạn. Tôi hy vọng rằng tôi sẽ làm bài tốt.",
        promptVietnamese: "Cảm ơn bạn. Tôi hy vọng rằng tôi sẽ làm bài tốt.",
        english: "Thank you. I hope that I will do well.",
        alternativeAnswers: ["Thanks. I hope to do well", "Thank you, I hope I'll pass it well"],
        meaning: "Cảm ơn bạn, tôi hy vọng mình sẽ làm tốt.",
        grammarNotes: "Cấu trúc hy vọng: 'hope to + V' hoặc 'hope + clause'.",
        vocabulary: [{ term: "hope", type: "verb", explanation: "hy vọng, mong ước" }],
        nativeTip: "Cụm 'do well in the exam' nghĩa là làm bài thi tốt, đạt điểm cao."
      },
      { speaker: "ai", text: "You studied hard, so you will! By the way, what do you want to buy next?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi muốn mua một chiếc xe hơi mới.",
        english: "I want to buy a new car.",
        alternativeAnswers: ["I'd like to buy a new car", "I want a new car"],
        meaning: "Tôi muốn mua một chiếc xe hơi mới.",
        grammarNotes: "Động từ 'want' đi với to-infinitive khi nói về hành động mong muốn: 'want to do something'.",
        vocabulary: [{ term: "want", type: "verb", explanation: "muốn, mong muốn" }],
        nativeTip: "Sử dụng 'I would like to' lịch sự hơn hẳn 'I want to' khi giao tiếp với người ngoài."
      },
      { speaker: "ai", text: "A car is expensive! Who is going to pay for it?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi muốn bố mẹ tôi mua cho tôi chiếc xe đó.",
        english: "I want my parents to buy that car for me.",
        alternativeAnswers: ["I want my parents to buy me that car", "I hope my parents buy that car for me"],
        meaning: "Tôi muốn bố mẹ mua chiếc xe đó cho tôi.",
        grammarNotes: "Cấu trúc bắt buộc: 'want + someone + to do + something' (KHÔNG dùng want that you help).",
        vocabulary: [{ term: "priority", type: "noun", explanation: "sự ưu tiên" }],
        nativeTip: "Lỗi kinh điển của người Việt: 'I want that my parents buy'. Hãy luôn nói: 'I want my parents to buy'."
      },
      { speaker: "ai", text: "Good luck with that request! Let's get our food now." },
      {
        speaker: "user",
        promptVietnamese: "Được rồi, chúng ta ăn thôi. Tôi đói lắm rồi.",
        english: "Alright, let's eat. I am starving.",
        alternativeAnswers: ["Okay, let's get some food. I'm very hungry", "Okay, let's eat. I am so hungry"],
        meaning: "Được rồi, ăn thôi. Tôi đói lả người rồi.",
        grammarNotes: "Từ 'starving' mang nghĩa đói lả, đói cực độ (mức độ mạnh hơn hungry).",
        vocabulary: [{ term: "starving", type: "adjective", explanation: "đói lả, đói chết khiếp" }],
        nativeTip: "Nói 'I'm starving' khi bạn cực kỳ đói bụng là cách nói tự nhiên cực kỳ phổ biến."
      }
    ]
  }
];
