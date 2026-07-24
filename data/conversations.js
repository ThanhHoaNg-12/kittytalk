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
  // 📚 BOOK 2: English Vocabulary in Use (Pre-Int & Intermediate)
  // Unit 5: In The Coffee Shop (30 turns total)
  // ==========================================
  
  // --- Unit 5 - Part 1: Entering and Ordering (10 turns) ---
  {
    id: "evu-pre-u5-p1",
    title: "Unit 5 (Part 1): Gọi đồ uống",
    topic: "Coffee Shop",
    difficulty: "medium",
    tags: ["English Vocabulary in Use Pre-Intermediate", "Unit 5: In the Coffee Shop", "A2"],
    turns: [
      { speaker: "ai", text: "Hello! Welcome to Kitty Cafe. What can I get started for you today?" },
      {
        speaker: "user",
        promptVietnamese: "Chào bạn. Cho tôi gọi một ly cà phê đen đá.",
        english: "Hello. I'd like to order an iced black coffee.",
        alternativeAnswers: ["Hi, can I get an iced black coffee, please?", "Hello, I will have an iced black coffee"],
        meaning: "Chào bạn, cho tôi gọi một cốc cà phê đen đá.",
        grammarNotes: "Sử dụng 'I'd like to' thay vì 'I want to' để yêu cầu đồ uống một cách lịch sự.",
        vocabulary: [{ term: "iced black coffee", type: "noun", explanation: "cà phê đen đá" }],
        nativeTip: "Cụm 'Can I get...?' là cách gọi đồ uống siêu tự nhiên tại các quán cà phê phương Tây."
      },
      { speaker: "ai", text: "Sure! Do you want any sugar or milk in your coffee?" },
      {
        speaker: "user",
        promptVietnamese: "Không, chỉ cà phê đen không đường thôi, cảm ơn bạn.",
        english: "No, just plain black coffee, thank you.",
        alternativeAnswers: ["No, just black coffee without sugar, thanks", "No sugar and no milk, thanks"],
        meaning: "Không, chỉ cà phê đen nguyên chất thôi, cảm ơn.",
        grammarNotes: "Dùng tính từ 'plain' để chỉ đồ ăn/thức uống nguyên bản, không thêm gia vị/sữa.",
        vocabulary: [{ term: "plain", type: "adjective", explanation: "mộc, không pha chế thêm gì" }],
        nativeTip: "Nói 'just black' là nhân viên pha chế sẽ hiểu bạn muốn uống đen đá không đường."
      },
      { speaker: "ai", text: "Understood. And what size would you prefer: small, medium, or large?" },
      {
        speaker: "user",
        promptVietnamese: "Cho tôi một ly cỡ vừa. Tôi có thể uống tại đây không?",
        english: "A medium one, please. Can I drink it here?",
        alternativeAnswers: ["Medium size, please. Is it for here?", "A medium, please. Can I sit here to drink it?"],
        meaning: "Cho tôi cốc cỡ vừa. Tôi có thể uống ở đây được không?",
        grammarNotes: "Cụm hỏi để uống tại chỗ là 'For here' đối lập với 'To go' (mang đi).",
        vocabulary: [{ term: "prefer", type: "verb", explanation: "thích hơn, lựa chọn" }],
        nativeTip: "Nhân viên thường hỏi ngắn gọn: 'For here or to go?' để biết bạn dùng tại quán hay mang về."
      },
      { speaker: "ai", text: "Yes, of course you can! That will be three dollars. How would you like to pay?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi thanh toán bằng thẻ tín dụng được không?",
        english: "Can I pay by credit card?",
        alternativeAnswers: ["Do you accept credit cards?", "Can I use my credit card?"],
        meaning: "Tôi trả bằng thẻ tín dụng được không?",
        grammarNotes: "Sử dụng giới từ 'by' trước các phương thức thanh toán 'by card', 'by cash'.",
        vocabulary: [{ term: "credit card", type: "noun", explanation: "thẻ tín dụng" }],
        nativeTip: "Do you take card? - câu hỏi thanh toán ngắn gọn của người bản xứ."
      },
      { speaker: "ai", text: "Yes, we accept all cards. Please tap your card on the reader." },
      {
        speaker: "user",
        promptVietnamese: "Được rồi, tôi đã chạm thẻ rồi. Cảm ơn bạn.",
        english: "Okay, I have tapped my card. Thank you.",
        alternativeAnswers: ["Alright, I've tapped the card. Thanks", "Done, I swiped it. Thank you"],
        meaning: "Ok, tôi chạm thẻ rồi. Cảm ơn.",
        grammarNotes: "Thì Hiện tại Hoàn thành 'have tapped' chỉ hành động vừa mới hoàn thành xong.",
        vocabulary: [{ term: "tap", type: "verb", explanation: "chạm, gõ nhẹ" }],
        nativeTip: "Thời nay thanh toán không tiếp xúc dùng từ 'tap' thay vì 'swipe' (quẹt thẻ)."
      }
    ]
  },

  // --- Unit 5 - Part 2: Seat & Wifi (10 turns) ---
  {
    id: "evu-pre-u5-p2",
    title: "Unit 5 (Part 2): Tìm chỗ ngồi & WiFi",
    topic: "Coffee Shop",
    difficulty: "medium",
    tags: ["English Vocabulary in Use Pre-Intermediate", "Unit 5: In the Coffee Shop", "A2"],
    turns: [
      { speaker: "ai", text: "Great! Please take a seat, and we will bring the coffee to your table. Have a nice day!" },
      {
        speaker: "user",
        promptVietnamese: "Cảm ơn bạn. Chỗ ngồi cạnh cửa sổ kia còn trống không?",
        english: "Thank you. Is that seat by the window free?",
        alternativeAnswers: ["Thanks. Is anyone sitting at that window table?", "Thank you. Is that window seat available?"],
        meaning: "Cảm ơn bạn, ghế cạnh cửa sổ kia còn trống chứ?",
        grammarNotes: "Tính từ 'free' hoặc 'available' dùng để hỏi ghế/chỗ có trống hay không.",
        vocabulary: [{ term: "by the window", type: "phrase", explanation: "cạnh cửa sổ" }],
        nativeTip: "Hỏi 'Is this seat taken?' (Chỗ này có ai ngồi chưa?) là câu thông dụng nhất để hỏi ghế trống."
      },
      { speaker: "ai", text: "Yes, that seat is empty. You can sit there. Do you need anything else?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi muốn xin mật khẩu wifi của quán.",
        english: "I'd like to get the wifi password of the shop.",
        alternativeAnswers: ["Could you tell me the wifi password?", "What is the wifi password, please?", "Can I have the wifi password?"],
        meaning: "Cho tôi xin mật khẩu wifi của quán nhé.",
        grammarNotes: "Dùng từ hỏi 'What' hoặc yêu cầu lịch sự 'Could you...' để xin thông tin.",
        vocabulary: [{ term: "wifi password", type: "noun", explanation: "mật khẩu wifi" }],
        nativeTip: "Câu hỏi 'What's the wifi password?' là cách hỏi ngắn gọn và tự nhiên nhất."
      },
      { speaker: "ai", text: "Sure, the password is 'kitty_cafe_2026' in lowercase. Let me write it down for you." },
      {
        speaker: "user",
        promptVietnamese: "Cảm ơn bạn nhiều. Bạn thật chu đáo.",
        english: "Thank you so much. That is very thoughtful of you.",
        alternativeAnswers: ["Thanks a lot. You are very kind", "Thank you, that's very helpful"],
        meaning: "Cảm ơn nhiều nhé. Bạn thật chu đáo quá.",
        grammarNotes: "Cấu trúc cảm thán: 'It/That is + adjective + of + object'.",
        vocabulary: [{ term: "thoughtful", type: "adjective", explanation: "chu đáo, ân cần" }],
        nativeTip: "'That is very kind/thoughtful of you' nâng tầm tiếng Anh xã giao của bạn lên rất nhiều."
      },
      { speaker: "ai", text: "No problem! Your iced black coffee is ready. Enjoy your drink!" },
      {
        speaker: "user",
        promptVietnamese: "Cà phê trông ngon quá. Chúc bạn một ngày làm việc vui vẻ.",
        english: "The coffee looks delicious. Have a great workday.",
        alternativeAnswers: ["It looks good. Have a nice shift!", "Looks great. Hope you have a good day at work"],
        meaning: "Cà phê trông ngon quá. Chúc bạn ngày làm việc vui vẻ.",
        grammarNotes: "Động từ trạng thái 'looks' theo sau bởi một tính từ 'delicious' để miêu tả cảm giác.",
        vocabulary: [{ term: "workday", type: "noun", explanation: "ngày làm việc" }],
        nativeTip: "Nói 'Have a good shift' đối với nhân viên làm việc theo ca là lời chúc cực kỳ bản xứ."
      },
      { speaker: "ai", text: "Thank you! Please let me know if you need a refill or some water." },
      {
        speaker: "user",
        promptVietnamese: "Được rồi, tôi sẽ cho bạn biết nếu cần. Cảm ơn nhé.",
        english: "Okay, I will let you know if I need. Thanks.",
        alternativeAnswers: ["Alright, I'll ask if I need anything. Thank you", "Okay, will do. Thanks"],
        meaning: "Ok, tôi sẽ báo lại nếu cần. Cảm ơn.",
        grammarNotes: "Thì Tương lai đơn 'I will let' diễn tả một quyết định đưa ra ngay tại thời điểm nói.",
        vocabulary: [{ term: "let someone know", type: "phrase", explanation: "cho ai đó biết" }],
        nativeTip: "Cụm từ 'will do' là tiếng lóng rút gọn rất hay của người bản xứ nghĩa là 'tôi sẽ làm thế'."
      }
    ]
  },

  // --- Unit 5 - Part 3: Chatting with Friend (10 turns) ---
  {
    id: "evu-pre-u5-p3",
    title: "Unit 5 (Part 3): Gặp gỡ & Rời quán",
    topic: "Coffee Shop",
    difficulty: "medium",
    tags: ["English Vocabulary in Use Pre-Intermediate", "Unit 5: In the Coffee Shop", "A2"],
    turns: [
      { speaker: "ai", text: "Hi Nam! Sorry I'm late. Have you been waiting for me long?" },
      {
        speaker: "user",
        promptVietnamese: "Không sao đâu. Tôi cũng vừa mới đến quán thôi.",
        english: "No problem. I have just arrived at the shop too.",
        alternativeAnswers: ["That's fine. I just got here myself", "No worries. I just arrived as well"],
        meaning: "Không sao cả, tôi cũng mới tới thôi.",
        grammarNotes: "Sử dụng phó từ 'just' trong thì Hiện tại Hoàn thành để diễn tả hành động vừa mới xảy ra.",
        vocabulary: [{ term: "arrive", type: "verb", explanation: "đến nơi, tới" }],
        nativeTip: "Cụm 'I just got here' được dùng nhiều hơn 'arrive' trong văn nói thường ngày."
      },
      { speaker: "ai", text: "Whew, glad to hear that! What did you order? It looks refreshing." },
      {
        speaker: "user",
        promptVietnamese: "Tôi gọi một ly cà phê đen đá. Bạn muốn uống gì không?",
        english: "I ordered an iced black coffee. Do you want to drink something?",
        alternativeAnswers: ["I got an iced black coffee. Would you like to order something?", "I'm having iced black coffee. What would you like?"],
        meaning: "Tôi gọi cà phê đen đá. Bạn có muốn uống gì không?",
        grammarNotes: "Thì Quá khứ đơn 'ordered' chỉ hành động gọi nước đã hoàn tất trước đó.",
        vocabulary: [{ term: "iced", type: "adjective", explanation: "có đá, ướp đá" }],
        nativeTip: "Hỏi lịch sự bằng cấu trúc 'What would you like to have?' hoặc 'What are you getting?'."
      },
      { speaker: "ai", text: "I think I will get a hot green tea. Let me go to the counter to order." },
      {
        speaker: "user",
        promptVietnamese: "Được rồi, tôi sẽ ngồi ở đây đợi bạn quay lại.",
        english: "Okay, I will sit here and wait for you to come back.",
        alternativeAnswers: ["Alright, I'll wait for you here", "Okay, I will stay here and wait for you"],
        meaning: "Được rồi, tôi sẽ ngồi đây đợi bạn trở lại.",
        grammarNotes: "Cấu trúc 'wait for someone to do something' (đợi ai làm gì).",
        vocabulary: [{ term: "come back", type: "phrasal verb", explanation: "quay trở lại" }],
        nativeTip: "'I'll wait for you here' ngắn gọn và cực kỳ tự nhiên trong giao tiếp."
      },
      { speaker: "ai", text: "Thanks. (A few minutes later) I got my tea! Let's talk about our plans." },
      {
        speaker: "user",
        promptVietnamese: "Tuyệt vời. Chúng ta nên bắt đầu thảo luận về chuyến đi du lịch.",
        english: "Great. We should start discussing the travel trip.",
        alternativeAnswers: ["Awesome. Let's talk about our vacation trip", "Great. We should discuss our travel plans"],
        meaning: "Tuyệt vời. Chúng ta nên thảo luận về chuyến đi du lịch.",
        grammarNotes: "Động từ 'discuss' đi trực tiếp với tân ngữ danh từ, không dùng discuss about.",
        vocabulary: [{ term: "discuss", type: "verb", explanation: "thảo luận" }],
        nativeTip: "Lỗi phổ biến nhất của người Việt là nói 'discuss about'. Hãy bỏ từ 'about' đi."
      },
      { speaker: "ai", text: "Yes! Time flies. Let's finish up and leave, it's getting dark." },
      {
        speaker: "user",
        promptVietnamese: "Đúng vậy, chúng ta đi thôi. Hẹn gặp lại bạn ngày mai.",
        english: "Yes, let's go. See you tomorrow.",
        alternativeAnswers: ["Right, let's head out. See you tomorrow", "Yes, let's leave. Catch you tomorrow"],
        meaning: "Đúng vậy, đi thôi. Hẹn gặp ngày mai nhé.",
        grammarNotes: "Cấu trúc đề nghị 'Let's + động từ nguyên thể' (hãy cùng làm gì).",
        vocabulary: [{ term: "leave", type: "verb", explanation: "rời đi, rời khỏi" }],
        nativeTip: "Cụm 'let's head out' là tiếng lóng rất hay nghĩa là 'chúng ta cùng đi ra ngoài thôi'."
      }
    ]
  },

  // ==========================================
  // 📚 BOOK 3: English Vocabulary in Use (Upper-Int)
  // Unit 25: Office & Work (30 turns total)
  // ==========================================
  
  // --- Unit 25 - Part 1: Morning Check-in & Traffic (10 turns) ---
  {
    id: "evu-upper-u25-p1",
    title: "Unit 25 (Part 1): Check-in sáng & Tắc đường",
    topic: "Office",
    difficulty: "hard",
    tags: ["English Vocabulary in Use Upper-Intermediate", "Unit 25: Office and Work", "B1"],
    turns: [
      { speaker: "ai", text: "Good morning, Nam! You made it just in time. Did you get caught in traffic?" },
      {
        speaker: "user",
        promptVietnamese: "Chào buổi sáng. Tôi bị trễ mười phút vì tắc đường.",
        english: "Good morning. I was late by ten minutes because of a traffic jam.",
        alternativeAnswers: ["Good morning. I'm ten minutes late due to traffic", "Morning. I got stuck in traffic and was late for 10 minutes"],
        meaning: "Chào buổi sáng. Tôi bị trễ 10 phút do kẹt xe.",
        grammarNotes: "Dùng cụm giới từ 'because of' theo sau bởi cụm danh từ 'a traffic jam'.",
        vocabulary: [
          { term: "traffic jam", type: "noun", explanation: "sự kẹt xe, tắc đường" },
          { term: "late by", type: "phrase", explanation: "muộn mất khoảng bao lâu" }
        ],
        nativeTip: "'I got stuck in traffic' (tôi bị kẹt xe) là lý do xin đi muộn phổ biến và lịch sự nhất."
      },
      { speaker: "ai", text: "No worries, the traffic today is indeed terrible. Let's grab some coffee before the morning meeting." },
      {
        speaker: "user",
        promptVietnamese: "Ý kiến hay đó. Hôm nay ai sẽ chủ trì cuộc họp buổi sáng?",
        english: "Good idea. Who is going to chair the morning meeting today?",
        alternativeAnswers: ["That's a good idea. Who will lead the morning meeting today?", "Great idea. Who is running the morning meeting today?"],
        meaning: "Ý kiến hay. Ai chủ trì cuộc họp sáng nay thế?",
        grammarNotes: "Sử dụng động từ 'chair' với nghĩa là chủ trì/chủ tọa một cuộc họp.",
        vocabulary: [{ term: "chair", type: "verb", explanation: "chủ trì (cuộc họp, phiên tòa)" }],
        nativeTip: "'Run a meeting' hoặc 'lead a meeting' cũng là cách nói vô cùng thông dụng của các sếp."
      },
      { speaker: "ai", text: "I believe the project manager is chairing it today. We have a lot of updates to go through." },
      {
        speaker: "user",
        promptVietnamese: "Tôi hiểu rồi. Tôi cần in một số tài liệu cho cuộc họp.",
        english: "I see. I need to print out some documents for the meeting.",
        alternativeAnswers: ["I understand. I have to print some papers for the meeting", "I see. I need to make some copies of the documents"],
        meaning: "Tôi biết rồi. Tôi cần in vài tài liệu cho cuộc họp.",
        grammarNotes: "Phrasal verb 'print out' nghĩa là in từ máy tính ra giấy vật lý.",
        vocabulary: [{ term: "print out", type: "phrasal verb", explanation: "in ra giấy" }],
        nativeTip: "Người bản xứ thường dùng 'print out' hơn là chỉ nói 'print' khi làm việc công sở."
      },
      { speaker: "ai", text: "Sure, the copier is in the hallway. Let me know if it runs out of paper." },
      {
        speaker: "user",
        promptVietnamese: "Cảm ơn bạn. Tôi sẽ kiểm tra nó trước khi sử dụng.",
        english: "Thank you. I will check it before using it.",
        alternativeAnswers: ["Thanks, I'll inspect it first", "Thank you, I will make sure it has paper before I start"],
        meaning: "Cảm ơn. Tôi sẽ kiểm tra máy trước khi dùng.",
        grammarNotes: "Sử dụng danh động từ 'using' sau giới từ chỉ thời gian 'before'.",
        vocabulary: [{ term: "copier", type: "noun", explanation: "máy photocopy" }],
        nativeTip: "Máy photocopy thường được gọi ngắn gọn là 'photocopier' hoặc 'copier'."
      },
      { speaker: "ai", text: "Great. Meet you in the conference room in five minutes." },
      {
        speaker: "user",
        promptVietnamese: "Được rồi, tôi sẽ đến đó ngay sau khi in xong.",
        english: "Okay, I will head there right after I finish printing.",
        alternativeAnswers: ["Alright, I'll be there as soon as I print", "Okay, I will go there immediately after printing"],
        meaning: "Được rồi, tôi sẽ qua đó ngay sau khi in xong.",
        grammarNotes: "Động từ 'finish' bắt buộc đi kèm danh động từ V-ing ('printing').",
        vocabulary: [{ term: "head to", type: "verb phrase", explanation: "đi về hướng, đi tới" }],
        nativeTip: "Cụm 'head there' (đi đến đó) cực kỳ bản xứ và chuyên nghiệp trong văn phòng."
      }
    ]
  },

  // --- Unit 25 - Part 2: The Project Meeting (10 turns) ---
  {
    id: "evu-upper-u25-p2",
    title: "Unit 25 (Part 2): Cuộc họp dự án",
    topic: "Office",
    difficulty: "hard",
    tags: ["English Vocabulary in Use Upper-Intermediate", "Unit 25: Office and Work", "B1"],
    turns: [
      { speaker: "ai", text: "Thanks for joining. Today we need to discuss the project schedule and deadlines." },
      {
        speaker: "user",
        promptVietnamese: "Tôi đã chuẩn bị báo cáo tiến độ cho nhóm.",
        english: "I have prepared the progress report for the team.",
        alternativeAnswers: ["I've prepared the status update for the team", "I prepared the progress report for everyone"],
        meaning: "Tôi đã chuẩn bị báo cáo tiến độ cho nhóm.",
        grammarNotes: "Thì Hiện tại Hoàn thành biểu thị kết quả chuẩn bị vẫn còn tác dụng trong cuộc họp.",
        vocabulary: [{ term: "progress report", type: "noun", explanation: "báo cáo tiến độ" }],
        nativeTip: "'Status report' hoặc 'progress report' là các thuật ngữ chuẩn mực trong quản lý dự án."
      },
      { speaker: "ai", text: "Perfect! Has anyone updated the client on our recent delay?" },
      {
        speaker: "user",
        promptVietnamese: "Trưởng nhóm của chúng tôi đã gửi email giải trình cho họ sáng nay.",
        english: "Our team leader emailed them an explanation this morning.",
        alternativeAnswers: ["Our manager sent them an email explaining it this morning", "Our team lead has emailed them the explanation earlier today"],
        meaning: "Trưởng nhóm chúng tôi đã gửi email giải thích cho họ sáng nay.",
        grammarNotes: "Từ 'email' được sử dụng trực tiếp làm động từ trong câu.",
        vocabulary: [{ term: "team leader", type: "noun", explanation: "trưởng nhóm" }],
        nativeTip: "Dùng trực tiếp động từ 'email' thay vì 'send an email' để nói ngắn gọn, chuyên nghiệp hơn."
      },
      { speaker: "ai", text: "Good. We must stay on track to avoid any further penalties. What is the next task?" },
      {
        speaker: "user",
        promptVietnamese: "Chúng ta cần hoàn thành thiết kế bản vẽ kỹ thuật vào ngày mai.",
        english: "We need to finalize the engineering design by tomorrow.",
        alternativeAnswers: ["We must finish the technical blueprint by tomorrow", "We have to finalize the technical designs by tomorrow"],
        meaning: "Chúng ta cần hoàn tất thiết kế kỹ thuật vào ngày mai.",
        grammarNotes: "Giới từ 'by' đứng trước mốc thời gian chỉ giới hạn 'trước ngày mai'.",
        vocabulary: [{ term: "finalize", type: "verb", explanation: "hoàn tất, chốt bản cuối" }],
        nativeTip: "Từ 'finalize' mang tính chất chốt duyệt phiên bản cuối cùng của tài liệu."
      },
      { speaker: "ai", text: "Excellent. Please assign this task to the developer team immediately." },
      {
        speaker: "user",
        promptVietnamese: "Tôi sẽ bàn giao công việc này cho họ ngay sau cuộc họp.",
        english: "I will hand over this task to them right after the meeting.",
        alternativeAnswers: ["I will assign this work to them after we finish", "I'll transfer this duty to them right after the meeting"],
        meaning: "Tôi sẽ bàn giao công việc này cho họ ngay sau cuộc họp.",
        grammarNotes: "Phrasal verb 'hand over' nghĩa là bàn giao lại công việc/trách nhiệm.",
        vocabulary: [{ term: "hand over", type: "phrasal verb", explanation: "bàn giao" }],
        nativeTip: "Dùng 'hand over' khi chuyển giao công việc hoặc chuyển giao ca làm việc."
      },
      { speaker: "ai", text: "Thank you. Let's move on to the next item on our agenda." },
      {
        speaker: "user",
        promptVietnamese: "Chủ đề tiếp theo là ngân sách cho chiến dịch tiếp thị.",
        english: "The next topic is the budget for the marketing campaign.",
        alternativeAnswers: ["The next item is the marketing campaign budget", "Next, we will discuss the budget for marketing"],
        meaning: "Chủ đề tiếp theo là ngân sách cho chiến dịch marketing.",
        vocabulary: [
          { term: "budget", type: "noun", explanation: "ngân sách" },
          { term: "agenda", type: "noun", explanation: "chương trình nghị sự, nội dung họp" }
        ],
        nativeTip: "'Next item on the agenda' là câu chuyển đề tài rất chuẩn trong các cuộc họp chuyên nghiệp."
      }
    ]
  },

  // --- Unit 25 - Part 3: Leaving the Office (10 turns) ---
  {
    id: "evu-upper-u25-p3",
    title: "Unit 25 (Part 3): Rời văn phòng & OT",
    topic: "Office",
    difficulty: "hard",
    tags: ["English Vocabulary in Use Upper-Intermediate", "Unit 25: Office and Work", "B1"],
    turns: [
      { speaker: "ai", text: "Wow, it's already 6 PM. The workday is officially over. Are you leaving now?" },
      {
        speaker: "user",
        promptVietnamese: "Tôi cần phải làm việc ngoài giờ để hoàn thành báo cáo này.",
        english: "I need to work overtime to finish this report.",
        alternativeAnswers: ["I have to do some overtime to complete this report", "I need to work late to get this report done"],
        meaning: "Tôi phải làm thêm giờ để hoàn tất báo cáo này.",
        grammarNotes: "Cụm từ 'work overtime' có nghĩa là làm việc ngoài giờ hành chính quy định.",
        vocabulary: [{ term: "overtime", type: "noun/adverb", explanation: "giờ làm thêm, ngoài giờ" }],
        nativeTip: "Người bản xứ hay nói tắt làm việc muộn là 'work late' hoặc 'do OT' (Overtime)."
      },
      { speaker: "ai", text: "Don't work too hard! You've been working non-stop since morning." },
      {
        speaker: "user",
        promptVietnamese: "Tôi sẽ chỉ ở lại thêm khoảng một tiếng nữa thôi.",
        english: "I will only stay for about one more hour.",
        alternativeAnswers: ["I'll only stay for around one hour", "I will only remain here for one more hour"],
        meaning: "Tôi sẽ chỉ ở lại thêm khoảng 1 tiếng nữa.",
        grammarNotes: "Cụm từ 'one more hour' chỉ thời gian kéo dài thêm một tiếng nữa.",
        vocabulary: [{ term: "stay", type: "verb", explanation: "ở lại, lưu lại" }],
        nativeTip: "'One more hour' hoặc 'another hour' đều diễn tả thời gian ở lại thêm."
      },
      { speaker: "ai", text: "Alright. Remember to turn off the lights and lock the door when you leave." },
      {
        speaker: "user",
        promptVietnamese: "Được rồi, tôi sẽ khóa cửa văn phòng cẩn thận.",
        english: "Okay, I will lock the office door carefully.",
        alternativeAnswers: ["Alright, I'll make sure the office is locked", "Okay, I will lock up the office properly"],
        meaning: "Được rồi, tôi sẽ khóa cửa văn phòng cẩn thận.",
        grammarNotes: "Trạng từ 'carefully' đứng sau tân ngữ 'the office door' để bổ nghĩa cho động từ 'lock'.",
        vocabulary: [{ term: "lock", type: "verb", explanation: "khóa cửa" }],
        nativeTip: "Cụm 'lock up' thường được dùng trong văn phòng chỉ việc khóa tất cả cửa trước khi về."
      },
      { speaker: "ai", text: "Thanks. Have a good evening, Nam. See you tomorrow morning!" },
      {
        speaker: "user",
        promptVietnamese: "Cảm ơn bạn. Chúc bạn buổi tối vui vẻ. Hẹn gặp lại ngày mai.",
        english: "Thank you. Have a good evening. See you tomorrow.",
        alternativeAnswers: ["Thanks. You too. See you tomorrow", "Thank you. Have a nice evening. See you tomorrow"],
        meaning: "Cảm ơn. Chúc tối vui vẻ. Hẹn gặp ngày mai.",
        grammarNotes: "Lời chúc xã giao chuẩn: 'Have a good/nice evening'.",
        vocabulary: [{ term: "evening", type: "noun", explanation: "buổi tối" }],
        nativeTip: "Khi ai đó chúc bạn 'Have a good evening', bạn có thể trả lời nhanh gọn 'You too!'."
      },
      { speaker: "ai", text: "Take care! Bye." },
      {
        speaker: "user",
        promptVietnamese: "Tạm biệt bạn. Đi đường cẩn thận nhé.",
        english: "Goodbye. Drive safely.",
        alternativeAnswers: ["Bye. Take care on the road", "Goodbye. Get home safely"],
        meaning: "Tạm biệt bạn. Đi đường an toàn nhé.",
        grammarNotes: "Cụm câu mệnh lệnh khuyên nhủ lịch sự: 'Drive + adverb (safely)'.",
        vocabulary: [{ term: "safely", type: "adverb", explanation: "một cách an toàn" }],
        nativeTip: "'Drive safely' hoặc 'Get home safe' là lời chào ra về vô cùng ấm áp và lịch sự ở các nước."
      }
    ]
  },

  // ==========================================
  // 📚 BOOK 4: English Vocabulary in Use (Advanced)
  // Unit 60: Business & Entrepreneurship (30 turns total)
  // ==========================================
  
  // --- Unit 60 - Part 1: Raising Capital (10 turns) ---
  {
    id: "evu-adv-u60-p1",
    title: "Unit 60 (Part 1): Huy động vốn khởi nghiệp",
    topic: "Business",
    difficulty: "hard",
    tags: ["English Vocabulary in Use Advanced", "Unit 60: Business & Entrepreneurship", "B2"],
    turns: [
      { speaker: "ai", text: "Hello! Welcome to Kitty Capital. I read your startup pitch deck. Are you seeking seed funding?" },
      {
        speaker: "user",
        promptVietnamese: "Vâng, chúng tôi đang tìm kiếm khoản đầu tư thiên thần trị giá hai trăm nghìn đô la.",
        english: "Yes, we are seeking an angel investment of two hundred thousand dollars.",
        alternativeAnswers: ["Yes, we're looking for a two-hundred-thousand-dollar angel investment", "Yes, we are seeking seed funding of $200,000 from angel investors"],
        meaning: "Vâng, chúng tôi đang tìm kiếm khoản đầu tư thiên thần trị giá 200,000 đô la.",
        grammarNotes: "Thì Hiện tại Tiếp diễn 'are seeking' mô tả nỗ lực đang tiếp diễn của startup.",
        vocabulary: [
          { term: "angel investment", type: "noun", explanation: "đầu tư thiên thần (vốn ban đầu)" },
          { term: "seek", type: "verb", explanation: "tìm kiếm, săn lùng" }
        ],
        nativeTip: "'Angel investment' là khoản đầu tư từ các cá nhân giàu có ở giai đoạn sơ khai của doanh nghiệp."
      },
      { speaker: "ai", text: "That is a reasonable amount. What is your startup's pre-money valuation?" },
      {
        speaker: "user",
        promptVietnamese: "Định giá trước khi gọi vốn của chúng tôi là hai triệu đô la.",
        english: "Our pre-money valuation is two million dollars.",
        alternativeAnswers: ["Our startup is valued at two million dollars before funding", "The pre-money valuation is $2,000,000"],
        meaning: "Định giá trước gọi vốn của chúng tôi là 2 triệu đô la.",
        grammarNotes: "Danh từ ghép tài chính 'pre-money valuation'.",
        vocabulary: [{ term: "valuation", type: "noun", explanation: "sự định giá, trị giá định đoạt" }],
        nativeTip: "'Pre-money valuation' là giá trị công ty trước khi nhận khoản đầu tư mới."
      },
      { speaker: "ai", text: "And what is your current monthly burn rate?" },
      {
        speaker: "user",
        promptVietnamese: "Tốc độ tiêu tiền hàng tháng của chúng tôi khoảng mười lăm nghìn đô la.",
        english: "Our monthly burn rate is around fifteen thousand dollars.",
        alternativeAnswers: ["We burn about fifteen thousand dollars a month", "Our current monthly burn rate is approximately $15,000"],
        meaning: "Tốc độ chi tiêu hàng tháng của chúng tôi khoảng 15,000 đô la.",
        grammarNotes: "Cụm danh từ tài chính khởi nghiệp 'monthly burn rate'.",
        vocabulary: [{ term: "burn rate", type: "noun", explanation: "tốc độ tiêu tiền (của startup)" }],
        nativeTip: "'Burn rate' chỉ tốc độ một công ty mới tiêu hết số vốn đầu tư trước khi tự tạo dòng tiền dương."
      },
      { speaker: "ai", text: "That gives you more than a year of runway. What is your monetization strategy?" },
      {
        speaker: "user",
        promptVietnamese: "Chúng tôi sử dụng mô hình đăng ký trả phí định kỳ (SaaS).",
        english: "We use a recurring subscription model (SaaS).",
        alternativeAnswers: ["We monetize through a monthly subscription model", "We utilize a software-as-a-service subscription model"],
        meaning: "Chúng tôi kiếm tiền thông qua mô hình đăng ký dịch vụ định kỳ (SaaS).",
        grammarNotes: "Tính từ 'recurring' mô tả dòng tiền lặp đi lặp lại hằng tháng/năm.",
        vocabulary: [
          { term: "recurring", type: "adjective", explanation: "định kỳ, lặp lại thường xuyên" },
          { term: "subscription", type: "noun", explanation: "sự đăng ký thuê bao" }
        ],
        nativeTip: "'SaaS' là viết tắt của Software-as-a-Service, mô hình SaaS cực kỳ phổ biến đối với startup công nghệ."
      },
      { speaker: "ai", text: "Excellent. Let's talk about the equity share you are offering for this round." },
      {
        speaker: "user",
        promptVietnamese: "Chúng tôi sẵn sàng nhượng lại mười phần trăm cổ phần cho vòng gọi vốn này.",
        english: "We are willing to offer ten percent equity for this round.",
        alternativeAnswers: ["We are offering a ten percent stake in this funding round", "We can give ten percent equity for this investment"],
        meaning: "Chúng tôi sẵn lòng nhượng lại 10% cổ phần cho vòng này.",
        grammarNotes: "Cấu trúc 'be willing to + V' (sẵn lòng/sẵn sàng làm gì).",
        vocabulary: [{ term: "equity", type: "noun", explanation: "cổ phần sở hữu, vốn chủ sở hữu" }],
        nativeTip: "Từ 'stake' cũng được dùng phổ biến để thay cho 'equity' với nghĩa là tỷ lệ sở hữu."
      }
    ]
  }
];
