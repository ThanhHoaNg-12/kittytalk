# Kitty Textbook Compiler Automation Script
# Reads local PDFs, calls Gemini API to extract text and generate 30-turn interactive dialogues,
# and appends the structured results into D:/English_web/data/conversations.js.

import os
import re
import json
import sys

# Ensure required libraries are imported
try:
    import pypdf
except ImportError:
    print("Error: 'pypdf' library is not installed. Please run: pip install pypdf")
    sys.exit(1)

try:
    import google.generativeai as genai
except ImportError:
    print("Error: 'google-generativeai' library is not installed. Please run: pip install google-generativeai")
    sys.exit(1)

# Paths configuration
PDF_DIR = r"C:\Users\thanh\Downloads\Bản sao IELTS\IELTS"
CONVERSATIONS_JS_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "data", "conversations.js"))

BOOKS = {
    "1": "1_English_Vocabulary_In_Use_Elementary_Cambridge_-_Third_Edition OK.pdf",
    "2": "English Vocabulary in Use Pre Intermediate and Intermediate.pdf",
    "3": "3_English_Vocabulary_In_Use_Upper-Intermediate_Cambridge_-_Fourth_Edition.pdf",
    "4": "4_English_Vocabulary_In_Use_Advanced_Cambridge_-_Third_Edition.pdf"
}

def load_existing_conversations():
    """Reads conversations.js, strips JS wrapper, and returns list of dicts."""
    if not os.path.exists(CONVERSATIONS_JS_PATH):
        print(f"Database file not found at {CONVERSATIONS_JS_PATH}. Creating new.")
        return []
    
    with open(CONVERSATIONS_JS_PATH, "r", encoding="utf-8") as f:
        content = f.read().strip()
    
    # Strip wrapper: 'window.defaultConversations = [ ... ];'
    match = re.search(r"window\.defaultConversations\s*=\s*(.*);", content, re.DOTALL)
    if not match:
        # Fallback if file is empty or formatted differently
        print("Format mismatch in conversations.js. Initializing with empty list.")
        return []
    
    json_str = match.group(1).strip()
    try:
        return json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"JSON parsing error: {e}. Writing raw backup.")
        return []

def save_conversations(conversations):
    """Saves list of dicts back to conversations.js wrapped in window variable."""
    json_str = json.dumps(conversations, ensure_ascii=False, indent=2)
    wrapped_content = f"// Kitty Pre-seeded Conversation Database (Static JS-DB)\nwindow.defaultConversations = {json_str};\n"
    
    with open(CONVERSATIONS_JS_PATH, "w", encoding="utf-8") as f:
        f.write(wrapped_content)
    print(f"Successfully saved database to {CONVERSATIONS_JS_PATH}!")

def extract_pdf_pages(pdf_path, start_page, end_page):
    """Extracts text from PDF page ranges (1-indexed)."""
    print(f"Reading PDF from page {start_page} to {end_page}...")
    reader = pypdf.PdfReader(pdf_path)
    
    total_pages = len(reader.pages)
    actual_end = min(end_page, total_pages)
    actual_start = max(1, min(start_page, actual_end))
    
    text = ""
    for page_num in range(actual_start - 1, actual_end):
        page = reader.pages[page_num]
        text_content = page.extract_text()
        if text_content:
            text += f"\n[Page {page_num + 1}]\n{text_content}\n"
            
    return text.strip()

def generate_unit_dialogues(gemini_key, pdf_text, book_title, unit_num, start_idx):
    """Calls Gemini to compile 3 parts (each 10 turns, total 30 turns) for a Unit."""
    genai.configure(api_key=gemini_key)
    
    # Initialize the model
    model = genai.GenerativeModel('gemini-2.5-flash', generation_config={"response_mime_type": "application/json"})
    
    prompt = f"""You are Kitty AI, a SaaS compiler engine.
Read this textbook text, extract the key vocabulary/grammar concepts, and create 3 separate interactive conversations (Part 1, Part 2, Part 3) of 10 turns each (alternating AI and user) representing that Unit.
Each conversation must represent realistic, everyday spoken English.
The turns must alternate between 'ai' and 'user'. The first turn MUST be 'ai'.

Textbook Extracted Text:
\"\"\"
{pdf_text}
\"\"\"

Create exactly 3 conversation objects representing:
- Unit {unit_num} (Part 1): Beginner Dialogue (10 turns total)
- Unit {unit_num} (Part 2): Intermediate Dialogue (10 turns total)
- Unit {unit_num} (Part 3): Advanced/Fluent Dialogue (10 turns total)

For each 'ai' turn, provide:
- `text`: the English phrase spoken by the AI.
- `speaker`: "ai"

For each 'user' turn, provide:
- `promptVietnamese`: the Vietnamese sentence the student is prompted to translate.
- `english`: the expected English translation.
- `alternativeAnswers`: 2-3 other correct English translations.
- `meaning`: Vietnamese explanation of the phrase.
- `grammarNotes`: Grammatical breakdowns in Vietnamese.
- `vocabulary`: A list of 2-3 words with `term`, `type`, and `explanation` in Vietnamese.
- `nativeTip`: Spoken English tips in Vietnamese.
- `speaker`: "user"

Return a JSON array containing exactly 3 Conversation objects matching this structure:
[
  {{
    "id": "{book_title.lower().replace(' ', '-')}-u{unit_num}-p1",
    "title": "Unit {unit_num} (Part 1): Dialogue Title in Vietnamese",
    "topic": "General topic matching the unit context",
    "difficulty": "easy",
    "tags": ["{book_title}", "Unit {unit_num}", "A1"],
    "turns": [
      {{ "speaker": "ai", "text": "..." }},
      {{
        "speaker": "user",
        "promptVietnamese": "...",
        "english": "...",
        "alternativeAnswers": ["...", "..."],
        "meaning": "...",
        "grammarNotes": "...",
        "vocabulary": [{{ "term": "...", "type": "...", "explanation": "..." }}],
        "nativeTip": "..."
      }}
    ]
  }},
  {{
    "id": "{book_title.lower().replace(' ', '-')}-u{unit_num}-p2",
    "title": "Unit {unit_num} (Part 2): Dialogue Title in Vietnamese",
    "topic": "General topic matching the unit context",
    "difficulty": "medium",
    "tags": ["{book_title}", "Unit {unit_num}", "A2"],
    "turns": [ ... ]
  }},
  {{
    "id": "{book_title.lower().replace(' ', '-')}-u{unit_num}-p3",
    "title": "Unit {unit_num} (Part 3): Dialogue Title in Vietnamese",
    "topic": "General topic",
    "difficulty": "hard",
    "tags": ["{book_title}", "Unit {unit_num}", "B1"],
    "turns": [ ... ]
  }}
]"""

    print("Sending content to Gemini for processing...")
    response = model.generate_content(prompt)
    try:
        return json.loads(response.text)
    except json.JSONDecodeError as e:
        print("Error: Gemini returned invalid JSON:")
        print(response.text)
        raise e

def main():
    print("====================================================")
    print("🐈 KITTY TEXTBOOK DIALOGUES COMPILER AUTOMATION SCRIPT")
    print("====================================================")
    
    # 1. Check folder
    if not os.path.exists(PDF_DIR):
        print(f"Error: PDF directory not found at {PDF_DIR}.")
        print("Please place your Cambridge PDFs in that folder.")
        sys.exit(1)
        
    print(f"Scanning PDF folder: {PDF_DIR}")
    files = os.listdir(PDF_DIR)
    for k, v in BOOKS.items():
        if v in files:
            print(f"[{k}] Found: {v}")
        else:
            print(f"[{k}] Missing: {v}")
            
    # 2. Get API Key
    gemini_key = os.environ.get("GEMINI_API_KEY")
    if not gemini_key:
        gemini_key = input("\nNhập Google Gemini API Key của bạn: ").strip()
    if not gemini_key:
        print("Error: API Key is required to run the compiler script.")
        sys.exit(1)
        
    # 3. Select Book
    choice = input("\nChọn số sách muốn biên dịch (1-4): ").strip()
    if choice not in BOOKS:
        print("Lựa chọn không hợp lệ.")
        sys.exit(1)
        
    book_file = BOOKS[choice]
    book_path = os.path.join(PDF_DIR, book_file)
    book_title = book_file.replace(".pdf", "").replace("_", " ")
    
    # 4. Set Unit and page ranges
    try:
        unit_num = int(input("Nhập số Unit (ví dụ: 5): "))
        start_page = int(input("Nhập trang bắt đầu của Unit này trong PDF (ví dụ: 12): "))
        end_page = int(input("Nhập trang kết thúc của Unit này trong PDF (ví dụ: 14): "))
    except ValueError:
        print("Vui lòng nhập định dạng số hợp lệ.")
        sys.exit(1)
        
    # 5. Execute Extraction
    try:
        pdf_text = extract_pdf_pages(book_path, start_page, end_page)
        if not pdf_text:
            print("Error: Không có văn bản nào được trích xuất từ PDF.")
            sys.exit(1)
            
        # Generate turns
        new_convs = generate_unit_dialogues(gemini_key, pdf_text, book_title, unit_num, start_page)
        
        # Load and append
        database = load_existing_conversations()
        
        # Filter duplicates (by ID)
        new_ids = [c["id"] for c in new_convs]
        database = [c for c in database if c["id"] not in new_ids]
        
        database.extend(new_convs)
        
        # Save
        save_conversations(database)
        
        print("\n🎉 Hoàn thành biên dịch!")
        print(f"Đã thêm 3 cuộc hội thoại phản xạ (30 lượt thoại tổng cộng) cho {book_title} - Unit {unit_num}!")
        
    except Exception as e:
        print(f"\n❌ Đã xảy ra lỗi: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
