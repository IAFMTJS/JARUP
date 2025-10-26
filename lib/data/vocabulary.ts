export interface VocabularyWord {
  id: string;
  language: 'japanese' | 'russian';
  word: string;
  pronunciation: string;
  translation: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  exampleSentence?: string;
}

export const japaneseVocabulary: VocabularyWord[] = [
  // Greetings
  { id: 'jv1', language: 'japanese', word: 'こんにちは', pronunciation: 'konnichiwa', translation: 'Hello / Good afternoon', category: 'Greetings', difficulty: 'beginner' },
  { id: 'jv2', language: 'japanese', word: 'おはよう', pronunciation: 'ohayou', translation: 'Good morning', category: 'Greetings', difficulty: 'beginner' },
  { id: 'jv3', language: 'japanese', word: 'こんばんは', pronunciation: 'konbanwa', translation: 'Good evening', category: 'Greetings', difficulty: 'beginner' },
  { id: 'jv4', language: 'japanese', word: 'さようなら', pronunciation: 'sayounara', translation: 'Goodbye', category: 'Greetings', difficulty: 'beginner' },
  { id: 'jv5', language: 'japanese', word: 'ありがとう', pronunciation: 'arigatou', translation: 'Thank you', category: 'Greetings', difficulty: 'beginner' },
  
  // Common Words
  { id: 'jv6', language: 'japanese', word: 'はい', pronunciation: 'hai', translation: 'Yes', category: 'Common', difficulty: 'beginner' },
  { id: 'jv7', language: 'japanese', word: 'いいえ', pronunciation: 'iie', translation: 'No', category: 'Common', difficulty: 'beginner' },
  { id: 'jv8', language: 'japanese', word: 'すみません', pronunciation: 'sumimasen', translation: 'Excuse me / Sorry', category: 'Common', difficulty: 'beginner' },
  { id: 'jv9', language: 'japanese', word: 'どうぞ', pronunciation: 'douzo', translation: 'Please / Go ahead', category: 'Common', difficulty: 'beginner' },
  { id: 'jv10', language: 'japanese', word: 'お願いします', pronunciation: 'onegaishimasu', translation: 'Please (formal)', category: 'Common', difficulty: 'beginner' },
  
  // Numbers
  { id: 'jv11', language: 'japanese', word: '一', pronunciation: 'ichi', translation: 'One', category: 'Numbers', difficulty: 'beginner' },
  { id: 'jv12', language: 'japanese', word: '二', pronunciation: 'ni', translation: 'Two', category: 'Numbers', difficulty: 'beginner' },
  { id: 'jv13', language: 'japanese', word: '三', pronunciation: 'san', translation: 'Three', category: 'Numbers', difficulty: 'beginner' },
  { id: 'jv14', language: 'japanese', word: '四', pronunciation: 'yon/shi', translation: 'Four', category: 'Numbers', difficulty: 'beginner' },
  { id: 'jv15', language: 'japanese', word: '五', pronunciation: 'go', translation: 'Five', category: 'Numbers', difficulty: 'beginner' },
  
  // Food
  { id: 'jv16', language: 'japanese', word: '水', pronunciation: 'mizu', translation: 'Water', category: 'Food', difficulty: 'beginner' },
  { id: 'jv17', language: 'japanese', word: 'ご飯', pronunciation: 'gohan', translation: 'Rice / Meal', category: 'Food', difficulty: 'beginner' },
  { id: 'jv18', language: 'japanese', word: '魚', pronunciation: 'sakana', translation: 'Fish', category: 'Food', difficulty: 'beginner' },
  { id: 'jv19', language: 'japanese', word: '肉', pronunciation: 'niku', translation: 'Meat', category: 'Food', difficulty: 'beginner' },
  { id: 'jv20', language: 'japanese', word: '野菜', pronunciation: 'yasai', translation: 'Vegetables', category: 'Food', difficulty: 'beginner' },
  
  // Time
  { id: 'jv21', language: 'japanese', word: '今日', pronunciation: 'kyou', translation: 'Today', category: 'Time', difficulty: 'beginner' },
  { id: 'jv22', language: 'japanese', word: '明日', pronunciation: 'ashita', translation: 'Tomorrow', category: 'Time', difficulty: 'beginner' },
  { id: 'jv23', language: 'japanese', word: '昨日', pronunciation: 'kinou', translation: 'Yesterday', category: 'Time', difficulty: 'beginner' },
  { id: 'jv24', language: 'japanese', word: '今', pronunciation: 'ima', translation: 'Now', category: 'Time', difficulty: 'beginner' },
  
  // Intermediate Words
  { id: 'jv25', language: 'japanese', word: '学校', pronunciation: 'gakkou', translation: 'School', category: 'Education', difficulty: 'intermediate' },
  { id: 'jv26', language: 'japanese', word: '先生', pronunciation: 'sensei', translation: 'Teacher', category: 'Education', difficulty: 'intermediate' },
  { id: 'jv27', language: 'japanese', word: '学生', pronunciation: 'gakusei', translation: 'Student', category: 'Education', difficulty: 'intermediate' },
  { id: 'jv28', language: 'japanese', word: '勉強する', pronunciation: 'benkyou suru', translation: 'To study', category: 'Education', difficulty: 'intermediate' },
  { id: 'jv29', language: 'japanese', word: '本', pronunciation: 'hon', translation: 'Book', category: 'Education', difficulty: 'intermediate' },
  
  { id: 'jv30', language: 'japanese', word: '仕事', pronunciation: 'shigoto', translation: 'Work / Job', category: 'Work', difficulty: 'intermediate' },
  { id: 'jv31', language: 'japanese', word: '会社員', pronunciation: 'kaishain', translation: 'Office worker', category: 'Work', difficulty: 'intermediate' },
  { id: 'jv32', language: 'japanese', word: '医者', pronunciation: 'isha', translation: 'Doctor', category: 'Work', difficulty: 'intermediate' },
  { id: 'jv33', language: 'japanese', word: '看護師', pronunciation: 'kangoshi', translation: 'Nurse', category: 'Work', difficulty: 'intermediate' },
  { id: 'jv34', language: 'japanese', word: 'エンジニア', pronunciation: 'enjinia', translation: 'Engineer', category: 'Work', difficulty: 'intermediate' },
  
  { id: 'jv35', language: 'japanese', word: '家族', pronunciation: 'kazoku', translation: 'Family', category: 'Relationships', difficulty: 'beginner' },
  { id: 'jv36', language: 'japanese', word: '父', pronunciation: 'chichi', translation: 'Father', category: 'Relationships', difficulty: 'beginner' },
  { id: 'jv37', language: 'japanese', word: '母', pronunciation: 'haha', translation: 'Mother', category: 'Relationships', difficulty: 'beginner' },
  { id: 'jv38', language: 'japanese', word: '兄弟', pronunciation: 'kyoudai', translation: 'Siblings', category: 'Relationships', difficulty: 'intermediate' },
  { id: 'jv39', language: 'japanese', word: '友達', pronunciation: 'tomodachi', translation: 'Friend', category: 'Relationships', difficulty: 'beginner' },
  
  { id: 'jv40', language: 'japanese', word: '車', pronunciation: 'kuruma', translation: 'Car', category: 'Transportation', difficulty: 'beginner' },
  { id: 'jv41', language: 'japanese', word: '電車', pronunciation: 'densha', translation: 'Train', category: 'Transportation', difficulty: 'intermediate' },
  { id: 'jv42', language: 'japanese', word: 'バス', pronunciation: 'basu', translation: 'Bus', category: 'Transportation', difficulty: 'beginner' },
  { id: 'jv43', language: 'japanese', word: '飛行機', pronunciation: 'hikouki', translation: 'Airplane', category: 'Transportation', difficulty: 'intermediate' },
  { id: 'jv44', language: 'japanese', word: '自転車', pronunciation: 'jitensha', translation: 'Bicycle', category: 'Transportation', difficulty: 'intermediate' },
  
  { id: 'jv45', language: 'japanese', word: '大好き', pronunciation: 'daisuki', translation: 'I love it', category: 'Emotions', difficulty: 'beginner' },
  { id: 'jv46', language: 'japanese', word: '嬉しい', pronunciation: 'ureshii', translation: 'Happy', category: 'Emotions', difficulty: 'intermediate' },
  { id: 'jv47', language: 'japanese', word: '悲しい', pronunciation: 'kanashii', translation: 'Sad', category: 'Emotions', difficulty: 'intermediate' },
  { id: 'jv48', language: 'japanese', word: '疲れた', pronunciation: 'tsukareta', translation: 'Tired', category: 'Emotions', difficulty: 'intermediate' },
  { id: 'jv49', language: 'japanese', word: '元気', pronunciation: 'genki', translation: 'Energetic / Healthy', category: 'Emotions', difficulty: 'beginner' },
  
  { id: 'jv50', language: 'japanese', word: '病院', pronunciation: 'byouin', translation: 'Hospital', category: 'Places', difficulty: 'intermediate' },
  { id: 'jv51', language: 'japanese', word: '図書館', pronunciation: 'toshokan', translation: 'Library', category: 'Places', difficulty: 'intermediate' },
  { id: 'jv52', language: 'japanese', word: 'レストラン', pronunciation: 'resutoran', translation: 'Restaurant', category: 'Places', difficulty: 'beginner' },
  { id: 'jv53', language: 'japanese', word: '銀行', pronunciation: 'ginkou', translation: 'Bank', category: 'Places', difficulty: 'intermediate' },
  { id: 'jv54', language: 'japanese', word: 'ホテル', pronunciation: 'hoteru', translation: 'Hotel', category: 'Places', difficulty: 'beginner' },
  
  // Advanced Words
  { id: 'jv55', language: 'japanese', word: '頑張る', pronunciation: 'ganbaru', translation: 'To do one\'s best', category: 'Common', difficulty: 'advanced' },
  { id: 'jv56', language: 'japanese', word: '世話をする', pronunciation: 'sewa wo suru', translation: 'To take care of', category: 'Common', difficulty: 'advanced' },
  { id: 'jv57', language: 'japanese', word: 'お疲れ様でした', pronunciation: 'otsukaresamadeshita', translation: 'Thank you for your hard work', category: 'Common', difficulty: 'advanced' },
  
  // Days of the Week
  { id: 'jv58', language: 'japanese', word: '月曜日', pronunciation: 'getsuyoubi', translation: 'Monday', category: 'Time', difficulty: 'beginner' },
  { id: 'jv59', language: 'japanese', word: '火曜日', pronunciation: 'kayoubi', translation: 'Tuesday', category: 'Time', difficulty: 'beginner' },
  { id: 'jv60', language: 'japanese', word: '水曜日', pronunciation: 'suiyoubi', translation: 'Wednesday', category: 'Time', difficulty: 'beginner' },
  { id: 'jv61', language: 'japanese', word: '木曜日', pronunciation: 'mokuyoubi', translation: 'Thursday', category: 'Time', difficulty: 'beginner' },
  { id: 'jv62', language: 'japanese', word: '金曜日', pronunciation: 'kin youbi', translation: 'Friday', category: 'Time', difficulty: 'beginner' },
  { id: 'jv63', language: 'japanese', word: '土曜日', pronunciation: 'doyoubi', translation: 'Saturday', category: 'Time', difficulty: 'beginner' },
  { id: 'jv64', language: 'japanese', word: '日曜日', pronunciation: 'nichiyoubi', translation: 'Sunday', category: 'Time', difficulty: 'beginner' },
  
  // Months
  { id: 'jv65', language: 'japanese', word: '一月', pronunciation: 'ichigatsu', translation: 'January', category: 'Time', difficulty: 'intermediate' },
  { id: 'jv66', language: 'japanese', word: '二月', pronunciation: 'nigatsu', translation: 'February', category: 'Time', difficulty: 'intermediate' },
  { id: 'jv67', language: 'japanese', word: '三月', pronunciation: 'sangatsu', translation: 'March', category: 'Time', difficulty: 'intermediate' },
  { id: 'jv68', language: 'japanese', word: '四月', pronunciation: 'shigatsu', translation: 'April', category: 'Time', difficulty: 'intermediate' },
  { id: 'jv69', language: 'japanese', word: '五月', pronunciation: 'gogatsu', translation: 'May', category: 'Time', difficulty: 'intermediate' },
  { id: 'jv70', language: 'japanese', word: '六月', pronunciation: 'rokugatsu', translation: 'June', category: 'Time', difficulty: 'intermediate' },
  { id: 'jv71', language: 'japanese', word: '七月', pronunciation: 'shichigatsu', translation: 'July', category: 'Time', difficulty: 'intermediate' },
  { id: 'jv72', language: 'japanese', word: '八月', pronunciation: 'hachigatsu', translation: 'August', category: 'Time', difficulty: 'intermediate' },
  { id: 'jv73', language: 'japanese', word: '九月', pronunciation: 'kugatsu', translation: 'September', category: 'Time', difficulty: 'intermediate' },
  { id: 'jv74', language: 'japanese', word: '十月', pronunciation: 'juugatsu', translation: 'October', category: 'Time', difficulty: 'intermediate' },
  { id: 'jv75', language: 'japanese', word: '十一月', pronunciation: 'juuichigatsu', translation: 'November', category: 'Time', difficulty: 'intermediate' },
  { id: 'jv76', language: 'japanese', word: '十二月', pronunciation: 'juunigatsu', translation: 'December', category: 'Time', difficulty: 'intermediate' },
  
  // Colors
  { id: 'jv77', language: 'japanese', word: '赤', pronunciation: 'aka', translation: 'Red', category: 'Colors', difficulty: 'beginner' },
  { id: 'jv78', language: 'japanese', word: '青', pronunciation: 'ao', translation: 'Blue', category: 'Colors', difficulty: 'beginner' },
  { id: 'jv79', language: 'japanese', word: '緑', pronunciation: 'midori', translation: 'Green', category: 'Colors', difficulty: 'beginner' },
  { id: 'jv80', language: 'japanese', word: '黄色', pronunciation: 'ki iro', translation: 'Yellow', category: 'Colors', difficulty: 'beginner' },
  { id: 'jv81', language: 'japanese', word: '白', pronunciation: 'shiro', translation: 'White', category: 'Colors', difficulty: 'beginner' },
  { id: 'jv82', language: 'japanese', word: '黒', pronunciation: 'kuro', translation: 'Black', category: 'Colors', difficulty: 'beginner' },
  { id: 'jv83', language: 'japanese', word: '茶色', pronunciation: 'chairo', translation: 'Brown', category: 'Colors', difficulty: 'beginner' },
  { id: 'jv84', language: 'japanese', word: 'ピンク', pronunciation: 'pinku', translation: 'Pink', category: 'Colors', difficulty: 'beginner' },
  { id: 'jv85', language: 'japanese', word: 'オレンジ', pronunciation: 'orenji', translation: 'Orange', category: 'Colors', difficulty: 'beginner' },
  { id: 'jv86', language: 'japanese', word: '紫', pronunciation: 'murasaki', translation: 'Purple', category: 'Colors', difficulty: 'beginner' },
  
  // Body Parts
  { id: 'jv87', language: 'japanese', word: '頭', pronunciation: 'atama', translation: 'Head', category: 'Body', difficulty: 'beginner' },
  { id: 'jv88', language: 'japanese', word: '目', pronunciation: 'me', translation: 'Eye', category: 'Body', difficulty: 'beginner' },
  { id: 'jv89', language: 'japanese', word: '鼻', pronunciation: 'hana', translation: 'Nose', category: 'Body', difficulty: 'beginner' },
  { id: 'jv90', language: 'japanese', word: '口', pronunciation: 'kuchi', translation: 'Mouth', category: 'Body', difficulty: 'beginner' },
  { id: 'jv91', language: 'japanese', word: '耳', pronunciation: 'mimi', translation: 'Ear', category: 'Body', difficulty: 'beginner' },
  { id: 'jv92', language: 'japanese', word: '手', pronunciation: 'te', translation: 'Hand', category: 'Body', difficulty: 'beginner' },
  { id: 'jv93', language: 'japanese', word: '足', pronunciation: 'ashi', translation: 'Leg / Foot', category: 'Body', difficulty: 'beginner' },
  { id: 'jv94', language: 'japanese', word: '髪', pronunciation: 'kami', translation: 'Hair', category: 'Body', difficulty: 'beginner' },
  { id: 'jv95', language: 'japanese', word: '首', pronunciation: 'kubi', translation: 'Neck', category: 'Body', difficulty: 'intermediate' },
  { id: 'jv96', language: 'japanese', word: '肩', pronunciation: 'kata', translation: 'Shoulder', category: 'Body', difficulty: 'intermediate' },
  { id: 'jv97', language: 'japanese', word: '背中', pronunciation: 'senaka', translation: 'Back', category: 'Body', difficulty: 'intermediate' },
  { id: 'jv98', language: 'japanese', word: '胸', pronunciation: 'mune', translation: 'Chest', category: 'Body', difficulty: 'intermediate' },
  { id: 'jv99', language: 'japanese', word: 'お腹', pronunciation: 'onaka', translation: 'Stomach', category: 'Body', difficulty: 'intermediate' },
  { id: 'jv100', language: 'japanese', word: '歯', pronunciation: 'ha', translation: 'Tooth', category: 'Body', difficulty: 'beginner' },
  
  // More Numbers
  { id: 'jv101', language: 'japanese', word: '六', pronunciation: 'roku', translation: 'Six', category: 'Numbers', difficulty: 'beginner' },
  { id: 'jv102', language: 'japanese', word: '七', pronunciation: 'nana/shichi', translation: 'Seven', category: 'Numbers', difficulty: 'beginner' },
  { id: 'jv103', language: 'japanese', word: '八', pronunciation: 'hachi', translation: 'Eight', category: 'Numbers', difficulty: 'beginner' },
  { id: 'jv104', language: 'japanese', word: '九', pronunciation: 'kyuu/ku', translation: 'Nine', category: 'Numbers', difficulty: 'beginner' },
  { id: 'jv105', language: 'japanese', word: '十', pronunciation: 'juu', translation: 'Ten', category: 'Numbers', difficulty: 'beginner' },
  { id: 'jv106', language: 'japanese', word: '二十', pronunciation: 'nijuu', translation: 'Twenty', category: 'Numbers', difficulty: 'intermediate' },
  { id: 'jv107', language: 'japanese', word: '三十', pronunciation: 'sanjuu', translation: 'Thirty', category: 'Numbers', difficulty: 'intermediate' },
  { id: 'jv108', language: 'japanese', word: '百', pronunciation: 'hyaku', translation: 'One hundred', category: 'Numbers', difficulty: 'intermediate' },
  
  // Clothing
  { id: 'jv109', language: 'japanese', word: 'シャツ', pronunciation: 'shatsu', translation: 'Shirt', category: 'Clothing', difficulty: 'beginner' },
  { id: 'jv110', language: 'japanese', word: 'ズボン', pronunciation: 'zubon', translation: 'Pants', category: 'Clothing', difficulty: 'beginner' },
  { id: 'jv111', language: 'japanese', word: '靴', pronunciation: 'kutsu', translation: 'Shoes', category: 'Clothing', difficulty: 'beginner' },
  { id: 'jv112', language: 'japanese', word: '靴下', pronunciation: 'kutsushita', translation: 'Socks', category: 'Clothing', difficulty: 'beginner' },
  { id: 'jv113', language: 'japanese', word: '帽子', pronunciation: 'boushi', translation: 'Hat', category: 'Clothing', difficulty: 'beginner' },
  { id: 'jv114', language: 'japanese', word: 'セーター', pronunciation: 'seetaa', translation: 'Sweater', category: 'Clothing', difficulty: 'beginner' },
  { id: 'jv115', language: 'japanese', word: 'コート', pronunciation: 'kooto', translation: 'Coat', category: 'Clothing', difficulty: 'beginner' },
  { id: 'jv116', language: 'japanese', word: 'スカート', pronunciation: 'sukaato', translation: 'Skirt', category: 'Clothing', difficulty: 'beginner' },
  
  // Weather
  { id: 'jv117', language: 'japanese', word: '天気', pronunciation: 'tenki', translation: 'Weather', category: 'Weather', difficulty: 'beginner' },
  { id: 'jv118', language: 'japanese', word: '晴れ', pronunciation: 'hare', translation: 'Sunny', category: 'Weather', difficulty: 'beginner' },
  { id: 'jv119', language: 'japanese', word: '雨', pronunciation: 'ame', translation: 'Rain', category: 'Weather', difficulty: 'beginner' },
  { id: 'jv120', language: 'japanese', word: '雪', pronunciation: 'yuki', translation: 'Snow', category: 'Weather', difficulty: 'beginner' },
  { id: 'jv121', language: 'japanese', word: '風', pronunciation: 'kaze', translation: 'Wind', category: 'Weather', difficulty: 'beginner' },
  { id: 'jv122', language: 'japanese', word: '雲', pronunciation: 'kumo', translation: 'Cloud', category: 'Weather', difficulty: 'beginner' },
  
  // More Food
  { id: 'jv123', language: 'japanese', word: 'パン', pronunciation: 'pan', translation: 'Bread', category: 'Food', difficulty: 'beginner' },
  { id: 'jv124', language: 'japanese', word: '牛乳', pronunciation: 'gyuunyu', translation: 'Milk', category: 'Food', difficulty: 'beginner' },
  { id: 'jv125', language: 'japanese', word: '卵', pronunciation: 'tamago', translation: 'Egg', category: 'Food', difficulty: 'beginner' },
  { id: 'jv126', language: 'japanese', word: 'チーズ', pronunciation: 'chiizu', translation: 'Cheese', category: 'Food', difficulty: 'beginner' },
  { id: 'jv127', language: 'japanese', word: 'りんご', pronunciation: 'ringo', translation: 'Apple', category: 'Food', difficulty: 'beginner' },
  { id: 'jv128', language: 'japanese', word: 'バナナ', pronunciation: 'banana', translation: 'Banana', category: 'Food', difficulty: 'beginner' },
  { id: 'jv129', language: 'japanese', word: 'オレンジ', pronunciation: 'orenji', translation: 'Orange (fruit)', category: 'Food', difficulty: 'beginner' },
  { id: 'jv130', language: 'japanese', word: 'コーヒー', pronunciation: 'koohii', translation: 'Coffee', category: 'Food', difficulty: 'beginner' },
  { id: 'jv131', language: 'japanese', word: 'お茶', pronunciation: 'ocha', translation: 'Tea', category: 'Food', difficulty: 'beginner' },
  { id: 'jv132', language: 'japanese', word: 'ビール', pronunciation: 'biiru', translation: 'Beer', category: 'Food', difficulty: 'beginner' },
  { id: 'jv133', language: 'japanese', word: '寿司', pronunciation: 'sushi', translation: 'Sushi', category: 'Food', difficulty: 'intermediate' },
  { id: 'jv134', language: 'japanese', word: 'ラーメン', pronunciation: 'raamen', translation: 'Ramen', category: 'Food', difficulty: 'intermediate' },
  { id: 'jv135', language: 'japanese', word: 'カレー', pronunciation: 'karee', translation: 'Curry', category: 'Food', difficulty: 'beginner' },
  { id: 'jv136', language: 'japanese', word: 'アイスクリーム', pronunciation: 'aisukurimu', translation: 'Ice cream', category: 'Food', difficulty: 'beginner' },
  
  // Common Verbs
  { id: 'jv137', language: 'japanese', word: '食べる', pronunciation: 'taberu', translation: 'To eat', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv138', language: 'japanese', word: '飲む', pronunciation: 'nomu', translation: 'To drink', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv139', language: 'japanese', word: '行く', pronunciation: 'iku', translation: 'To go', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv140', language: 'japanese', word: '来る', pronunciation: 'kuru', translation: 'To come', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv141', language: 'japanese', word: '見る', pronunciation: 'miru', translation: 'To see / watch', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv142', language: 'japanese', word: '聞く', pronunciation: 'kiku', translation: 'To hear / listen', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv143', language: 'japanese', word: '読む', pronunciation: 'yomu', translation: 'To read', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv144', language: 'japanese', word: '書く', pronunciation: 'kaku', translation: 'To write', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv145', language: 'japanese', word: '話す', pronunciation: 'hanasu', translation: 'To speak', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv146', language: 'japanese', word: '買う', pronunciation: 'kau', translation: 'To buy', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv147', language: 'japanese', word: '売る', pronunciation: 'uru', translation: 'To sell', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv148', language: 'japanese', word: '会う', pronunciation: 'au', translation: 'To meet', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv149', language: 'japanese', word: '作る', pronunciation: 'tsukuru', translation: 'To make', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv150', language: 'japanese', word: '言う', pronunciation: 'iu', translation: 'To say', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv151', language: 'japanese', word: '知る', pronunciation: 'shiru', translation: 'To know', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv152', language: 'japanese', word: '思う', pronunciation: 'omou', translation: 'To think', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv153', language: 'japanese', word: '見つける', pronunciation: 'mitsukeru', translation: 'To find', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv154', language: 'japanese', word: '始める', pronunciation: 'hajimeru', translation: 'To start', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv155', language: 'japanese', word: '終わる', pronunciation: 'owaru', translation: 'To end / finish', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv156', language: 'japanese', word: '教える', pronunciation: 'oshieru', translation: 'To teach', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv157', language: 'japanese', word: '習う', pronunciation: 'narau', translation: 'To learn', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv158', language: 'japanese', word: '使う', pronunciation: 'tsukau', translation: 'To use', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv159', language: 'japanese', word: 'とる', pronunciation: 'toru', translation: 'To take', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv160', language: 'japanese', word: 'あげる', pronunciation: 'ageru', translation: 'To give', category: 'Verbs', difficulty: 'intermediate' },
  
  // Adjectives
  { id: 'jv161', language: 'japanese', word: '大きい', pronunciation: 'ookii', translation: 'Big', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'jv162', language: 'japanese', word: '小さい', pronunciation: 'chiisai', translation: 'Small', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'jv163', language: 'japanese', word: '高い', pronunciation: 'takai', translation: 'Tall / Expensive', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'jv164', language: 'japanese', word: '低い', pronunciation: 'hikui', translation: 'Short / Low', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv165', language: 'japanese', word: '長い', pronunciation: 'nagai', translation: 'Long', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'jv166', language: 'japanese', word: '短い', pronunciation: 'mijikai', translation: 'Short', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv167', language: 'japanese', word: '新しい', pronunciation: 'atarashii', translation: 'New', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'jv168', language: 'japanese', word: '古い', pronunciation: 'furui', translation: 'Old', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'jv169', language: 'japanese', word: '良い', pronunciation: 'yoi/ii', translation: 'Good', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'jv170', language: 'japanese', word: '悪い', pronunciation: 'warui', translation: 'Bad', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'jv171', language: 'japanese', word: '暑い', pronunciation: 'atsui', translation: 'Hot', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'jv172', language: 'japanese', word: '寒い', pronunciation: 'samui', translation: 'Cold', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'jv173', language: 'japanese', word: '暖かい', pronunciation: 'atatakai', translation: 'Warm', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv174', language: 'japanese', word: '涼しい', pronunciation: 'suzushii', translation: 'Cool', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv175', language: 'japanese', word: '難しい', pronunciation: 'muzukashii', translation: 'Difficult', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv176', language: 'japanese', word: '易しい', pronunciation: 'yasashii', translation: 'Easy', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv177', language: 'japanese', word: '美味しい', pronunciation: 'oishii', translation: 'Delicious', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'jv178', language: 'japanese', word: '綺麗', pronunciation: 'kirei', translation: 'Beautiful', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv179', language: 'japanese', word: '面白い', pronunciation: 'omoshiroi', translation: 'Interesting', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv180', language: 'japanese', word: '早い', pronunciation: 'hayai', translation: 'Fast / Early', category: 'Adjectives', difficulty: 'beginner' },
  
  // Directions
  { id: 'jv181', language: 'japanese', word: '右', pronunciation: 'migi', translation: 'Right', category: 'Directions', difficulty: 'beginner' },
  { id: 'jv182', language: 'japanese', word: '左', pronunciation: 'hidari', translation: 'Left', category: 'Directions', difficulty: 'beginner' },
  { id: 'jv183', language: 'japanese', word: '前', pronunciation: 'mae', translation: 'Front / Before', category: 'Directions', difficulty: 'beginner' },
  { id: 'jv184', language: 'japanese', word: '後ろ', pronunciation: 'ushiro', translation: 'Back / Behind', category: 'Directions', difficulty: 'beginner' },
  { id: 'jv185', language: 'japanese', word: '上', pronunciation: 'ue', translation: 'Up / Above', category: 'Directions', difficulty: 'beginner' },
  { id: 'jv186', language: 'japanese', word: '下', pronunciation: 'shita', translation: 'Down / Below', category: 'Directions', difficulty: 'beginner' },
  { id: 'jv187', language: 'japanese', word: '中', pronunciation: 'naka', translation: 'Inside', category: 'Directions', difficulty: 'beginner' },
  { id: 'jv188', language: 'japanese', word: '外', pronunciation: 'soto', translation: 'Outside', category: 'Directions', difficulty: 'beginner' },
  
  // Home/Furniture
  { id: 'jv189', language: 'japanese', word: '家', pronunciation: 'ie', translation: 'House / Home', category: 'Home', difficulty: 'beginner' },
  { id: 'jv190', language: 'japanese', word: '部屋', pronunciation: 'heya', translation: 'Room', category: 'Home', difficulty: 'beginner' },
  { id: 'jv191', language: 'japanese', word: 'ベッド', pronunciation: 'beddo', translation: 'Bed', category: 'Home', difficulty: 'beginner' },
  { id: 'jv192', language: 'japanese', word: '机', pronunciation: 'tsukue', translation: 'Desk', category: 'Home', difficulty: 'beginner' },
  { id: 'jv193', language: 'japanese', word: '椅子', pronunciation: 'isu', translation: 'Chair', category: 'Home', difficulty: 'beginner' },
  { id: 'jv194', language: 'japanese', word: 'テーブル', pronunciation: 'teeburu', translation: 'Table', category: 'Home', difficulty: 'beginner' },
  { id: 'jv195', language: 'japanese', word: 'ドア', pronunciation: 'doa', translation: 'Door', category: 'Home', difficulty: 'beginner' },
  { id: 'jv196', language: 'japanese', word: '窓', pronunciation: 'mado', translation: 'Window', category: 'Home', difficulty: 'beginner' },
  { id: 'jv197', language: 'japanese', word: 'キッチン', pronunciation: 'kichin', translation: 'Kitchen', category: 'Home', difficulty: 'beginner' },
  { id: 'jv198', language: 'japanese', word: 'お風呂', pronunciation: 'ofuro', translation: 'Bath', category: 'Home', difficulty: 'beginner' },
  
  // Nature
  { id: 'jv199', language: 'japanese', word: '花', pronunciation: 'hana', translation: 'Flower', category: 'Nature', difficulty: 'beginner' },
  { id: 'jv200', language: 'japanese', word: '木', pronunciation: 'ki', translation: 'Tree', category: 'Nature', difficulty: 'beginner' },
  { id: 'jv201', language: 'japanese', word: '山', pronunciation: 'yama', translation: 'Mountain', category: 'Nature', difficulty: 'beginner' },
  { id: 'jv202', language: 'japanese', word: '川', pronunciation: 'kawa', translation: 'River', category: 'Nature', difficulty: 'beginner' },
  { id: 'jv203', language: 'japanese', word: '海', pronunciation: 'umi', translation: 'Ocean', category: 'Nature', difficulty: 'beginner' },
  { id: 'jv204', language: 'japanese', word: '鳥', pronunciation: 'tori', translation: 'Bird', category: 'Nature', difficulty: 'beginner' },
  { id: 'jv205', language: 'japanese', word: '犬', pronunciation: 'inu', translation: 'Dog', category: 'Nature', difficulty: 'beginner' },
  { id: 'jv206', language: 'japanese', word: '猫', pronunciation: 'neko', translation: 'Cat', category: 'Nature', difficulty: 'beginner' },
  
  // More Actions
  { id: 'jv207', language: 'japanese', word: '起きる', pronunciation: 'okiru', translation: 'To wake up / To get up', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv208', language: 'japanese', word: '寝る', pronunciation: 'neru', translation: 'To sleep', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv209', language: 'japanese', word: '起きる', pronunciation: 'okiru', translation: 'To happen / occur', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv210', language: 'japanese', word: '開ける', pronunciation: 'akeru', translation: 'To open', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv211', language: 'japanese', word: '閉める', pronunciation: 'shimeru', translation: 'To close', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv212', language: 'japanese', word: '持つ', pronunciation: 'motsu', translation: 'To hold / have', category: 'Verbs', difficulty: 'beginner' },
  { id: 'jv213', language: 'japanese', word: '置く', pronunciation: 'oku', translation: 'To put / place', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv214', language: 'japanese', word: '着る', pronunciation: 'kiru', translation: 'To wear', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv215', language: 'japanese', word: '脱ぐ', pronunciation: 'nugu', translation: 'To take off (clothes)', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv216', language: 'japanese', word: '着く', pronunciation: 'tsuku', translation: 'To arrive', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv217', language: 'japanese', word: '出る', pronunciation: 'deru', translation: 'To leave / appear', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv218', language: 'japanese', word: '入る', pronunciation: 'hairu', translation: 'To enter', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv219', language: 'japanese', word: '帰る', pronunciation: 'kaeru', translation: 'To return home', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'jv220', language: 'japanese', word: '寝る', pronunciation: 'neru', translation: 'To lie down', category: 'Verbs', difficulty: 'beginner' },
  
  // Technology
  { id: 'jv221', language: 'japanese', word: 'コンピューター', pronunciation: 'konpyuutaa', translation: 'Computer', category: 'Technology', difficulty: 'beginner' },
  { id: 'jv222', language: 'japanese', word: 'スマホ', pronunciation: 'sumaho', translation: 'Smartphone', category: 'Technology', difficulty: 'beginner' },
  { id: 'jv223', language: 'japanese', word: 'インターネット', pronunciation: 'inta-netto', translation: 'Internet', category: 'Technology', difficulty: 'intermediate' },
  { id: 'jv224', language: 'japanese', word: 'メール', pronunciation: 'meeru', translation: 'Email', category: 'Technology', difficulty: 'beginner' },
  { id: 'jv225', language: 'japanese', word: '電話', pronunciation: 'denwa', translation: 'Phone', category: 'Technology', difficulty: 'beginner' },
  { id: 'jv226', language: 'japanese', word: 'テレビ', pronunciation: 'terebi', translation: 'TV', category: 'Technology', difficulty: 'beginner' },
  { id: 'jv227', language: 'japanese', word: '音楽', pronunciation: 'ongaku', translation: 'Music', category: 'Entertainment', difficulty: 'beginner' },
  { id: 'jv228', language: 'japanese', word: '映画', pronunciation: 'eiga', translation: 'Movie', category: 'Entertainment', difficulty: 'beginner' },
  { id: 'jv229', language: 'japanese', word: '本', pronunciation: 'hon', translation: 'Book', category: 'Education', difficulty: 'beginner' },
  
  // Shopping
  { id: 'jv230', language: 'japanese', word: 'お店', pronunciation: 'omise', translation: 'Shop / Store', category: 'Shopping', difficulty: 'beginner' },
  { id: 'jv231', language: 'japanese', word: '買い物', pronunciation: 'kaimono', translation: 'Shopping', category: 'Shopping', difficulty: 'beginner' },
  { id: 'jv232', language: 'japanese', word: 'お金', pronunciation: 'okane', translation: 'Money', category: 'Shopping', difficulty: 'beginner' },
  { id: 'jv233', language: 'japanese', word: '安い', pronunciation: 'yasui', translation: 'Cheap', category: 'Shopping', difficulty: 'beginner' },
  { id: 'jv234', language: 'japanese', word: '高い', pronunciation: 'takai', translation: 'Expensive', category: 'Shopping', difficulty: 'beginner' },
  { id: 'jv235', language: 'japanese', word: 'いくら', pronunciation: 'ikura', translation: 'How much', category: 'Shopping', difficulty: 'beginner' },
  
  // Hobbies & Sports
  { id: 'jv236', language: 'japanese', word: '趣味', pronunciation: 'shumi', translation: 'Hobby', category: 'Hobbies', difficulty: 'intermediate' },
  { id: 'jv237', language: 'japanese', word: 'スポーツ', pronunciation: 'supootsu', translation: 'Sports', category: 'Hobbies', difficulty: 'beginner' },
  { id: 'jv238', language: 'japanese', word: 'サッカー', pronunciation: 'sakkaa', translation: 'Soccer', category: 'Hobbies', difficulty: 'beginner' },
  { id: 'jv239', language: 'japanese', word: 'テニス', pronunciation: 'tenisu', translation: 'Tennis', category: 'Hobbies', difficulty: 'beginner' },
  { id: 'jv240', language: 'japanese', word: '野球', pronunciation: 'yakyuu', translation: 'Baseball', category: 'Hobbies', difficulty: 'intermediate' },
  { id: 'jv241', language: 'japanese', word: '読書', pronunciation: 'dokusho', translation: 'Reading', category: 'Hobbies', difficulty: 'intermediate' },
  { id: 'jv242', language: 'japanese', word: '絵を描く', pronunciation: 'e wo kaku', translation: 'To draw / paint', category: 'Hobbies', difficulty: 'intermediate' },
  { id: 'jv243', language: 'japanese', word: '料理', pronunciation: 'ryouri', translation: 'Cooking', category: 'Hobbies', difficulty: 'intermediate' },
  { id: 'jv244', language: 'japanese', word: 'ゲーム', pronunciation: 'geemu', translation: 'Game', category: 'Hobbies', difficulty: 'beginner' },
  { id: 'jv245', language: 'japanese', word: '旅行', pronunciation: 'ryokou', translation: 'Travel / Trip', category: 'Hobbies', difficulty: 'intermediate' },
  
  // Health & Body
  { id: 'jv246', language: 'japanese', word: '健康', pronunciation: 'kenkou', translation: 'Health', category: 'Health', difficulty: 'intermediate' },
  { id: 'jv247', language: 'japanese', word: '病気', pronunciation: 'byouki', translation: 'Sick / Illness', category: 'Health', difficulty: 'intermediate' },
  { id: 'jv248', language: 'japanese', word: '治す', pronunciation: 'naosu', translation: 'To heal / cure', category: 'Health', difficulty: 'advanced' },
  { id: 'jv249', language: 'japanese', word: '薬', pronunciation: 'kusuri', translation: 'Medicine', category: 'Health', difficulty: 'intermediate' },
  { id: 'jv250', language: 'japanese', word: '痛い', pronunciation: 'itai', translation: 'Painful / hurts', category: 'Health', difficulty: 'beginner' },
  
  // Times of Day
  { id: 'jv251', language: 'japanese', word: '朝', pronunciation: 'asa', translation: 'Morning', category: 'Time', difficulty: 'beginner' },
  { id: 'jv252', language: 'japanese', word: '昼', pronunciation: 'hiru', translation: 'Daytime / noon', category: 'Time', difficulty: 'beginner' },
  { id: 'jv253', language: 'japanese', word: '夜', pronunciation: 'yoru', translation: 'Night', category: 'Time', difficulty: 'beginner' },
  { id: 'jv254', language: 'japanese', word: '午前', pronunciation: 'gozen', translation: 'AM / Before noon', category: 'Time', difficulty: 'intermediate' },
  { id: 'jv255', language: 'japanese', word: '午後', pronunciation: 'gogo', translation: 'PM / Afternoon', category: 'Time', difficulty: 'intermediate' },
  
  // More adjectives
  { id: 'jv256', language: 'japanese', word: '遅い', pronunciation: 'osoi', translation: 'Slow / Late', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'jv257', language: 'japanese', word: '近い', pronunciation: 'chikai', translation: 'Near / Close', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv258', language: 'japanese', word: '遠い', pronunciation: 'tooi', translation: 'Far / Distant', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv259', language: 'japanese', word: '広い', pronunciation: 'hiroi', translation: 'Wide / Spacious', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv260', language: 'japanese', word: '狭い', pronunciation: 'semai', translation: 'Narrow / Small', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv261', language: 'japanese', word: '重い', pronunciation: 'omoi', translation: 'Heavy', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv262', language: 'japanese', word: '軽い', pronunciation: 'karui', translation: 'Light (weight)', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv263', language: 'japanese', word: '正しい', pronunciation: 'tadashii', translation: 'Correct', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv264', language: 'japanese', word: '間違う', pronunciation: 'machigau', translation: 'Wrong / mistake', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv265', language: 'japanese', word: '忙しい', pronunciation: 'isogashii', translation: 'Busy', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv266', language: 'japanese', word: '暇', pronunciation: 'hima', translation: 'Free time', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv267', language: 'japanese', word: '静か', pronunciation: 'shizuka', translation: 'Quiet', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'jv268', language: 'japanese', word: 'うるさい', pronunciation: 'urusai', translation: 'Loud / noisy', category: 'Adjectives', difficulty: 'intermediate' },
];

export const russianVocabulary: VocabularyWord[] = [
  // Greetings
  { id: 'rv1', language: 'russian', word: 'Привет', pronunciation: 'privet', translation: 'Hello / Hi', category: 'Greetings', difficulty: 'beginner' },
  { id: 'rv2', language: 'russian', word: 'Здравствуйте', pronunciation: 'zdravstvuyte', translation: 'Hello (formal)', category: 'Greetings', difficulty: 'beginner' },
  { id: 'rv3', language: 'russian', word: 'Доброе утро', pronunciation: 'dobroe utro', translation: 'Good morning', category: 'Greetings', difficulty: 'beginner' },
  { id: 'rv4', language: 'russian', word: 'Добрый день', pronunciation: 'dobryy den', translation: 'Good afternoon', category: 'Greetings', difficulty: 'beginner' },
  { id: 'rv5', language: 'russian', word: 'Добрый вечер', pronunciation: 'dobryy vecher', translation: 'Good evening', category: 'Greetings', difficulty: 'beginner' },
  
  // Common Words
  { id: 'rv6', language: 'russian', word: 'Спасибо', pronunciation: 'spasibo', translation: 'Thank you', category: 'Common', difficulty: 'beginner' },
  { id: 'rv7', language: 'russian', word: 'Пожалуйста', pronunciation: 'pozhaluysta', translation: 'Please / You\'re welcome', category: 'Common', difficulty: 'beginner' },
  { id: 'rv8', language: 'russian', word: 'Извините', pronunciation: 'izvinite', translation: 'Excuse me / Sorry', category: 'Common', difficulty: 'beginner' },
  { id: 'rv9', language: 'russian', word: 'Да', pronunciation: 'da', translation: 'Yes', category: 'Common', difficulty: 'beginner' },
  { id: 'rv10', language: 'russian', word: 'Нет', pronunciation: 'net', translation: 'No', category: 'Common', difficulty: 'beginner' },
  
  // Numbers
  { id: 'rv11', language: 'russian', word: 'один', pronunciation: 'odin', translation: 'One', category: 'Numbers', difficulty: 'beginner' },
  { id: 'rv12', language: 'russian', word: 'два', pronunciation: 'dva', translation: 'Two', category: 'Numbers', difficulty: 'beginner' },
  { id: 'rv13', language: 'russian', word: 'три', pronunciation: 'tri', translation: 'Three', category: 'Numbers', difficulty: 'beginner' },
  { id: 'rv14', language: 'russian', word: 'четыре', pronunciation: 'chetyre', translation: 'Four', category: 'Numbers', difficulty: 'beginner' },
  { id: 'rv15', language: 'russian', word: 'пять', pronunciation: 'pyat', translation: 'Five', category: 'Numbers', difficulty: 'beginner' },
  
  // Food
  { id: 'rv16', language: 'russian', word: 'вода', pronunciation: 'voda', translation: 'Water', category: 'Food', difficulty: 'beginner' },
  { id: 'rv17', language: 'russian', word: 'хлеб', pronunciation: 'khleb', translation: 'Bread', category: 'Food', difficulty: 'beginner' },
  { id: 'rv18', language: 'russian', word: 'молоко', pronunciation: 'moloko', translation: 'Milk', category: 'Food', difficulty: 'beginner' },
  { id: 'rv19', language: 'russian', word: 'яблоко', pronunciation: 'yabloko', translation: 'Apple', category: 'Food', difficulty: 'beginner' },
  { id: 'rv20', language: 'russian', word: 'кофе', pronunciation: 'kofe', translation: 'Coffee', category: 'Food', difficulty: 'beginner' },
  
  // Time
  { id: 'rv21', language: 'russian', word: 'сегодня', pronunciation: 'segodnya', translation: 'Today', category: 'Time', difficulty: 'beginner' },
  { id: 'rv22', language: 'russian', word: 'завтра', pronunciation: 'zavtra', translation: 'Tomorrow', category: 'Time', difficulty: 'beginner' },
  { id: 'rv23', language: 'russian', word: 'вчера', pronunciation: 'vchera', translation: 'Yesterday', category: 'Time', difficulty: 'beginner' },
  { id: 'rv24', language: 'russian', word: 'сейчас', pronunciation: 'seychas', translation: 'Now', category: 'Time', difficulty: 'beginner' },
  
  // Intermediate Words
  { id: 'rv25', language: 'russian', word: 'школа', pronunciation: 'shkola', translation: 'School', category: 'Education', difficulty: 'intermediate' },
  { id: 'rv26', language: 'russian', word: 'учитель', pronunciation: 'uchitel', translation: 'Teacher', category: 'Education', difficulty: 'intermediate' },
  { id: 'rv27', language: 'russian', word: 'ученик', pronunciation: 'uchenik', translation: 'Student', category: 'Education', difficulty: 'intermediate' },
  { id: 'rv28', language: 'russian', word: 'учиться', pronunciation: 'uchitsya', translation: 'To study', category: 'Education', difficulty: 'intermediate' },
  { id: 'rv29', language: 'russian', word: 'книга', pronunciation: 'kniga', translation: 'Book', category: 'Education', difficulty: 'beginner' },
  
  { id: 'rv30', language: 'russian', word: 'работа', pronunciation: 'rabota', translation: 'Work / Job', category: 'Work', difficulty: 'intermediate' },
  { id: 'rv31', language: 'russian', word: 'офисный работник', pronunciation: 'ofisnyy rabotnik', translation: 'Office worker', category: 'Work', difficulty: 'intermediate' },
  { id: 'rv32', language: 'russian', word: 'врач', pronunciation: 'vrach', translation: 'Doctor', category: 'Work', difficulty: 'intermediate' },
  { id: 'rv33', language: 'russian', word: 'медсестра', pronunciation: 'medsestra', translation: 'Nurse', category: 'Work', difficulty: 'intermediate' },
  { id: 'rv34', language: 'russian', word: 'инженер', pronunciation: 'inzhener', translation: 'Engineer', category: 'Work', difficulty: 'intermediate' },
  
  { id: 'rv35', language: 'russian', word: 'семья', pronunciation: 'semya', translation: 'Family', category: 'Relationships', difficulty: 'beginner' },
  { id: 'rv36', language: 'russian', word: 'отец', pronunciation: 'otets', translation: 'Father', category: 'Relationships', difficulty: 'beginner' },
  { id: 'rv37', language: 'russian', word: 'мать', pronunciation: 'mat', translation: 'Mother', category: 'Relationships', difficulty: 'beginner' },
  { id: 'rv38', language: 'russian', word: 'брат', pronunciation: 'brat', translation: 'Brother', category: 'Relationships', difficulty: 'beginner' },
  { id: 'rv39', language: 'russian', word: 'сестра', pronunciation: 'sestra', translation: 'Sister', category: 'Relationships', difficulty: 'beginner' },
  { id: 'rv40', language: 'russian', word: 'друг', pronunciation: 'drug', translation: 'Friend (male)', category: 'Relationships', difficulty: 'beginner' },
  { id: 'rv41', language: 'russian', word: 'подруга', pronunciation: 'podruga', translation: 'Friend (female)', category: 'Relationships', difficulty: 'beginner' },
  
  { id: 'rv42', language: 'russian', word: 'машина', pronunciation: 'mashina', translation: 'Car', category: 'Transportation', difficulty: 'beginner' },
  { id: 'rv43', language: 'russian', word: 'поезд', pronunciation: 'poezd', translation: 'Train', category: 'Transportation', difficulty: 'intermediate' },
  { id: 'rv44', language: 'russian', word: 'автобус', pronunciation: 'avtobus', translation: 'Bus', category: 'Transportation', difficulty: 'intermediate' },
  { id: 'rv45', language: 'russian', word: 'самолет', pronunciation: 'samolyot', translation: 'Airplane', category: 'Transportation', difficulty: 'intermediate' },
  { id: 'rv46', language: 'russian', word: 'велосипед', pronunciation: 'velosiped', translation: 'Bicycle', category: 'Transportation', difficulty: 'intermediate' },
  
  { id: 'rv47', language: 'russian', word: 'любить', pronunciation: 'lyubit', translation: 'To love', category: 'Emotions', difficulty: 'intermediate' },
  { id: 'rv48', language: 'russian', word: 'радоваться', pronunciation: 'radovatsya', translation: 'To be happy', category: 'Emotions', difficulty: 'intermediate' },
  { id: 'rv49', language: 'russian', word: 'грустить', pronunciation: 'grustit', translation: 'To be sad', category: 'Emotions', difficulty: 'intermediate' },
  { id: 'rv50', language: 'russian', word: 'усталый', pronunciation: 'ustalyy', translation: 'Tired', category: 'Emotions', difficulty: 'intermediate' },
  { id: 'rv51', language: 'russian', word: 'здоровый', pronunciation: 'zdorovyy', translation: 'Healthy', category: 'Emotions', difficulty: 'intermediate' },
  
  { id: 'rv52', language: 'russian', word: 'больница', pronunciation: 'bolnitsa', translation: 'Hospital', category: 'Places', difficulty: 'intermediate' },
  { id: 'rv53', language: 'russian', word: 'библиотека', pronunciation: 'biblioteka', translation: 'Library', category: 'Places', difficulty: 'intermediate' },
  { id: 'rv54', language: 'russian', word: 'ресторан', pronunciation: 'restoran', translation: 'Restaurant', category: 'Places', difficulty: 'beginner' },
  { id: 'rv55', language: 'russian', word: 'банк', pronunciation: 'bank', translation: 'Bank', category: 'Places', difficulty: 'intermediate' },
  { id: 'rv56', language: 'russian', word: 'гостиница', pronunciation: 'gostinitsa', translation: 'Hotel', category: 'Places', difficulty: 'intermediate' },
  
  // Advanced Words
  { id: 'rv57', language: 'russian', word: 'стараться', pronunciation: 'staratsya', translation: 'To try hard', category: 'Common', difficulty: 'advanced' },
  { id: 'rv58', language: 'russian', word: 'заботиться', pronunciation: 'zabotitsya', translation: 'To take care of', category: 'Common', difficulty: 'advanced' },
  { id: 'rv59', language: 'russian', word: 'благодарю за работу', pronunciation: 'blagodaryu za rabotu', translation: 'Thank you for your work', category: 'Common', difficulty: 'advanced' },
  
  // Days of the Week
  { id: 'rv60', language: 'russian', word: 'понедельник', pronunciation: 'ponedelnik', translation: 'Monday', category: 'Time', difficulty: 'beginner' },
  { id: 'rv61', language: 'russian', word: 'вторник', pronunciation: 'vtornik', translation: 'Tuesday', category: 'Time', difficulty: 'beginner' },
  { id: 'rv62', language: 'russian', word: 'среда', pronunciation: 'sreda', translation: 'Wednesday', category: 'Time', difficulty: 'beginner' },
  { id: 'rv63', language: 'russian', word: 'четверг', pronunciation: 'chetverg', translation: 'Thursday', category: 'Time', difficulty: 'beginner' },
  { id: 'rv64', language: 'russian', word: 'пятница', pronunciation: 'pyatnitsa', translation: 'Friday', category: 'Time', difficulty: 'beginner' },
  { id: 'rv65', language: 'russian', word: 'суббота', pronunciation: 'subbota', translation: 'Saturday', category: 'Time', difficulty: 'beginner' },
  { id: 'rv66', language: 'russian', word: 'воскресенье', pronunciation: 'voskresenye', translation: 'Sunday', category: 'Time', difficulty: 'beginner' },
  
  // Months
  { id: 'rv67', language: 'russian', word: 'январь', pronunciation: 'yanvar', translation: 'January', category: 'Time', difficulty: 'intermediate' },
  { id: 'rv68', language: 'russian', word: 'февраль', pronunciation: 'fevral', translation: 'February', category: 'Time', difficulty: 'intermediate' },
  { id: 'rv69', language: 'russian', word: 'март', pronunciation: 'mart', translation: 'March', category: 'Time', difficulty: 'intermediate' },
  { id: 'rv70', language: 'russian', word: 'апрель', pronunciation: 'aprel', translation: 'April', category: 'Time', difficulty: 'intermediate' },
  { id: 'rv71', language: 'russian', word: 'май', pronunciation: 'may', translation: 'May', category: 'Time', difficulty: 'intermediate' },
  { id: 'rv72', language: 'russian', word: 'июнь', pronunciation: 'iyun', translation: 'June', category: 'Time', difficulty: 'intermediate' },
  { id: 'rv73', language: 'russian', word: 'июль', pronunciation: 'iyul', translation: 'July', category: 'Time', difficulty: 'intermediate' },
  { id: 'rv74', language: 'russian', word: 'август', pronunciation: 'avgust', translation: 'August', category: 'Time', difficulty: 'intermediate' },
  { id: 'rv75', language: 'russian', word: 'сентябрь', pronunciation: 'sentyabr', translation: 'September', category: 'Time', difficulty: 'intermediate' },
  { id: 'rv76', language: 'russian', word: 'октябрь', pronunciation: 'oktyabr', translation: 'October', category: 'Time', difficulty: 'intermediate' },
  { id: 'rv77', language: 'russian', word: 'ноябрь', pronunciation: 'noyabr', translation: 'November', category: 'Time', difficulty: 'intermediate' },
  { id: 'rv78', language: 'russian', word: 'декабрь', pronunciation: 'dekabr', translation: 'December', category: 'Time', difficulty: 'intermediate' },
  
  // Colors
  { id: 'rv79', language: 'russian', word: 'красный', pronunciation: 'krasnyy', translation: 'Red', category: 'Colors', difficulty: 'beginner' },
  { id: 'rv80', language: 'russian', word: 'синий', pronunciation: 'siniy', translation: 'Blue', category: 'Colors', difficulty: 'beginner' },
  { id: 'rv81', language: 'russian', word: 'зелёный', pronunciation: 'zelёnyy', translation: 'Green', category: 'Colors', difficulty: 'beginner' },
  { id: 'rv82', language: 'russian', word: 'желтый', pronunciation: 'zheltyy', translation: 'Yellow', category: 'Colors', difficulty: 'beginner' },
  { id: 'rv83', language: 'russian', word: 'белый', pronunciation: 'belyy', translation: 'White', category: 'Colors', difficulty: 'beginner' },
  { id: 'rv84', language: 'russian', word: 'черный', pronunciation: 'chernyy', translation: 'Black', category: 'Colors', difficulty: 'beginner' },
  { id: 'rv85', language: 'russian', word: 'коричневый', pronunciation: 'korichnevyy', translation: 'Brown', category: 'Colors', difficulty: 'beginner' },
  { id: 'rv86', language: 'russian', word: 'розовый', pronunciation: 'rozovyy', translation: 'Pink', category: 'Colors', difficulty: 'beginner' },
  { id: 'rv87', language: 'russian', word: 'оранжевый', pronunciation: 'oranzhevyy', translation: 'Orange', category: 'Colors', difficulty: 'beginner' },
  { id: 'rv88', language: 'russian', word: 'фиолетовый', pronunciation: 'fioletovyy', translation: 'Purple', category: 'Colors', difficulty: 'beginner' },
  
  // Body Parts
  { id: 'rv89', language: 'russian', word: 'голова', pronunciation: 'golova', translation: 'Head', category: 'Body', difficulty: 'beginner' },
  { id: 'rv90', language: 'russian', word: 'глаз', pronunciation: 'glaz', translation: 'Eye', category: 'Body', difficulty: 'beginner' },
  { id: 'rv91', language: 'russian', word: 'нос', pronunciation: 'nos', translation: 'Nose', category: 'Body', difficulty: 'beginner' },
  { id: 'rv92', language: 'russian', word: 'рот', pronunciation: 'rot', translation: 'Mouth', category: 'Body', difficulty: 'beginner' },
  { id: 'rv93', language: 'russian', word: 'ухо', pronunciation: 'ukho', translation: 'Ear', category: 'Body', difficulty: 'beginner' },
  { id: 'rv94', language: 'russian', word: 'рука', pronunciation: 'ruka', translation: 'Hand / Arm', category: 'Body', difficulty: 'beginner' },
  { id: 'rv95', language: 'russian', word: 'нога', pronunciation: 'noga', translation: 'Leg / Foot', category: 'Body', difficulty: 'beginner' },
  { id: 'rv96', language: 'russian', word: 'волосы', pronunciation: 'volosy', translation: 'Hair', category: 'Body', difficulty: 'beginner' },
  { id: 'rv97', language: 'russian', word: 'шея', pronunciation: 'sheya', translation: 'Neck', category: 'Body', difficulty: 'intermediate' },
  { id: 'rv98', language: 'russian', word: 'плечо', pronunciation: 'plecho', translation: 'Shoulder', category: 'Body', difficulty: 'intermediate' },
  { id: 'rv99', language: 'russian', word: 'спина', pronunciation: 'spina', translation: 'Back', category: 'Body', difficulty: 'intermediate' },
  { id: 'rv100', language: 'russian', word: 'грудь', pronunciation: 'grud', translation: 'Chest', category: 'Body', difficulty: 'intermediate' },
  { id: 'rv101', language: 'russian', word: 'живот', pronunciation: 'zhivot', translation: 'Stomach', category: 'Body', difficulty: 'intermediate' },
  { id: 'rv102', language: 'russian', word: 'зуб', pronunciation: 'zub', translation: 'Tooth', category: 'Body', difficulty: 'beginner' },
  
  // More Numbers
  { id: 'rv103', language: 'russian', word: 'шесть', pronunciation: 'shest', translation: 'Six', category: 'Numbers', difficulty: 'beginner' },
  { id: 'rv104', language: 'russian', word: 'семь', pronunciation: 'sem', translation: 'Seven', category: 'Numbers', difficulty: 'beginner' },
  { id: 'rv105', language: 'russian', word: 'восемь', pronunciation: 'vosem', translation: 'Eight', category: 'Numbers', difficulty: 'beginner' },
  { id: 'rv106', language: 'russian', word: 'девять', pronunciation: 'devyat', translation: 'Nine', category: 'Numbers', difficulty: 'beginner' },
  { id: 'rv107', language: 'russian', word: 'десять', pronunciation: 'desyat', translation: 'Ten', category: 'Numbers', difficulty: 'beginner' },
  { id: 'rv108', language: 'russian', word: 'двадцать', pronunciation: 'dvadtsat', translation: 'Twenty', category: 'Numbers', difficulty: 'intermediate' },
  { id: 'rv109', language: 'russian', word: 'тридцать', pronunciation: 'tridtsat', translation: 'Thirty', category: 'Numbers', difficulty: 'intermediate' },
  { id: 'rv110', language: 'russian', word: 'сто', pronunciation: 'sto', translation: 'One hundred', category: 'Numbers', difficulty: 'intermediate' },
  
  // Clothing
  { id: 'rv111', language: 'russian', word: 'рубашка', pronunciation: 'rubashka', translation: 'Shirt', category: 'Clothing', difficulty: 'beginner' },
  { id: 'rv112', language: 'russian', word: 'брюки', pronunciation: 'bryuki', translation: 'Pants', category: 'Clothing', difficulty: 'beginner' },
  { id: 'rv113', language: 'russian', word: 'обувь', pronunciation: 'obuv', translation: 'Shoes', category: 'Clothing', difficulty: 'beginner' },
  { id: 'rv114', language: 'russian', word: 'носок', pronunciation: 'nosok', translation: 'Sock', category: 'Clothing', difficulty: 'beginner' },
  { id: 'rv115', language: 'russian', word: 'шапка', pronunciation: 'shapka', translation: 'Hat', category: 'Clothing', difficulty: 'beginner' },
  { id: 'rv116', language: 'russian', word: 'свитер', pronunciation: 'sviter', translation: 'Sweater', category: 'Clothing', difficulty: 'beginner' },
  { id: 'rv117', language: 'russian', word: 'пальто', pronunciation: 'palto', translation: 'Coat', category: 'Clothing', difficulty: 'beginner' },
  { id: 'rv118', language: 'russian', word: 'юбка', pronunciation: 'yubka', translation: 'Skirt', category: 'Clothing', difficulty: 'beginner' },
  
  // Weather
  { id: 'rv119', language: 'russian', word: 'погода', pronunciation: 'pogoda', translation: 'Weather', category: 'Weather', difficulty: 'beginner' },
  { id: 'rv120', language: 'russian', word: 'солнце', pronunciation: 'solntse', translation: 'Sun', category: 'Weather', difficulty: 'beginner' },
  { id: 'rv121', language: 'russian', word: 'дождь', pronunciation: 'dozhd', translation: 'Rain', category: 'Weather', difficulty: 'beginner' },
  { id: 'rv122', language: 'russian', word: 'снег', pronunciation: 'sneg', translation: 'Snow', category: 'Weather', difficulty: 'beginner' },
  { id: 'rv123', language: 'russian', word: 'ветер', pronunciation: 'veter', translation: 'Wind', category: 'Weather', difficulty: 'beginner' },
  { id: 'rv124', language: 'russian', word: 'облако', pronunciation: 'oblako', translation: 'Cloud', category: 'Weather', difficulty: 'beginner' },
  
  // More Food
  { id: 'rv125', language: 'russian', word: 'сыр', pronunciation: 'syr', translation: 'Cheese', category: 'Food', difficulty: 'beginner' },
  { id: 'rv126', language: 'russian', word: 'яйцо', pronunciation: 'yaytso', translation: 'Egg', category: 'Food', difficulty: 'beginner' },
  { id: 'rv127', language: 'russian', word: 'банан', pronunciation: 'banan', translation: 'Banana', category: 'Food', difficulty: 'beginner' },
  { id: 'rv128', language: 'russian', word: 'апельсин', pronunciation: 'apelsin', translation: 'Orange (fruit)', category: 'Food', difficulty: 'beginner' },
  { id: 'rv129', language: 'russian', word: 'чай', pronunciation: 'chay', translation: 'Tea', category: 'Food', difficulty: 'beginner' },
  { id: 'rv130', language: 'russian', word: 'пиво', pronunciation: 'pivo', translation: 'Beer', category: 'Food', difficulty: 'beginner' },
  { id: 'rv131', language: 'russian', word: 'суши', pronunciation: 'sushi', translation: 'Sushi', category: 'Food', difficulty: 'intermediate' },
  { id: 'rv132', language: 'russian', word: 'лавка', pronunciation: 'lavka', translation: 'Shop', category: 'Places', difficulty: 'beginner' },
  { id: 'rv133', language: 'russian', word: 'мороженое', pronunciation: 'morozhenoye', translation: 'Ice cream', category: 'Food', difficulty: 'beginner' },
  
  // Common Verbs
  { id: 'rv134', language: 'russian', word: 'есть', pronunciation: 'est', translation: 'To eat', category: 'Verbs', difficulty: 'beginner' },
  { id: 'rv135', language: 'russian', word: 'пить', pronunciation: 'pit', translation: 'To drink', category: 'Verbs', difficulty: 'beginner' },
  { id: 'rv136', language: 'russian', word: 'идти', pronunciation: 'idti', translation: 'To go (by foot)', category: 'Verbs', difficulty: 'beginner' },
  { id: 'rv137', language: 'russian', word: 'ехать', pronunciation: 'ekhat', translation: 'To go (by vehicle)', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv138', language: 'russian', word: 'приходить', pronunciation: 'prikhodit', translation: 'To come', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv139', language: 'russian', word: 'видеть', pronunciation: 'videt', translation: 'To see', category: 'Verbs', difficulty: 'beginner' },
  { id: 'rv140', language: 'russian', word: 'слышать', pronunciation: 'slyshat', translation: 'To hear', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv141', language: 'russian', word: 'читать', pronunciation: 'chitat', translation: 'To read', category: 'Verbs', difficulty: 'beginner' },
  { id: 'rv142', language: 'russian', word: 'писать', pronunciation: 'pisat', translation: 'To write', category: 'Verbs', difficulty: 'beginner' },
  { id: 'rv143', language: 'russian', word: 'говорить', pronunciation: 'govorit', translation: 'To speak', category: 'Verbs', difficulty: 'beginner' },
  { id: 'rv144', language: 'russian', word: 'покупать', pronunciation: 'pokupat', translation: 'To buy', category: 'Verbs', difficulty: 'beginner' },
  { id: 'rv145', language: 'russian', word: 'продавать', pronunciation: 'prodavat', translation: 'To sell', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv146', language: 'russian', word: 'встречать', pronunciation: 'vstrechat', translation: 'To meet', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv147', language: 'russian', word: 'делать', pronunciation: 'delat', translation: 'To do / make', category: 'Verbs', difficulty: 'beginner' },
  { id: 'rv148', language: 'russian', word: 'сказать', pronunciation: 'skazat', translation: 'To say', category: 'Verbs', difficulty: 'beginner' },
  { id: 'rv149', language: 'russian', word: 'знать', pronunciation: 'znat', translation: 'To know', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv150', language: 'russian', word: 'думать', pronunciation: 'dumat', translation: 'To think', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv151', language: 'russian', word: 'находить', pronunciation: 'nakhodit', translation: 'To find', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv152', language: 'russian', word: 'начинать', pronunciation: 'nachinat', translation: 'To start', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv153', language: 'russian', word: 'кончать', pronunciation: 'konchat', translation: 'To end / finish', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv154', language: 'russian', word: 'учить', pronunciation: 'uchit', translation: 'To teach', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv155', language: 'russian', word: 'учиться', pronunciation: 'uchitsya', translation: 'To learn', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv156', language: 'russian', word: 'пользоваться', pronunciation: 'polzovatsya', translation: 'To use', category: 'Verbs', difficulty: 'advanced' },
  { id: 'rv157', language: 'russian', word: 'брать', pronunciation: 'brat', translation: 'To take', category: 'Verbs', difficulty: 'intermediate' },
  { id: 'rv158', language: 'russian', word: 'давать', pronunciation: 'davat', translation: 'To give', category: 'Verbs', difficulty: 'beginner' },
  
  // Adjectives
  { id: 'rv159', language: 'russian', word: 'большой', pronunciation: 'bolshoy', translation: 'Big', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'rv160', language: 'russian', word: 'маленький', pronunciation: 'malenkiy', translation: 'Small', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'rv161', language: 'russian', word: 'высокий', pronunciation: 'vysokiy', translation: 'Tall / High', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'rv162', language: 'russian', word: 'низкий', pronunciation: 'nizkiy', translation: 'Short / Low', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'rv163', language: 'russian', word: 'длинный', pronunciation: 'dlinniy', translation: 'Long', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'rv164', language: 'russian', word: 'короткий', pronunciation: 'korotkiy', translation: 'Short', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'rv165', language: 'russian', word: 'новый', pronunciation: 'novyy', translation: 'New', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'rv166', language: 'russian', word: 'старый', pronunciation: 'staryy', translation: 'Old', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'rv167', language: 'russian', word: 'хороший', pronunciation: 'khoroshiy', translation: 'Good', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'rv168', language: 'russian', word: 'плохой', pronunciation: 'plokhoy', translation: 'Bad', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'rv169', language: 'russian', word: 'горячий', pronunciation: 'goryachiy', translation: 'Hot', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'rv170', language: 'russian', word: 'холодный', pronunciation: 'kholodnyy', translation: 'Cold', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'rv171', language: 'russian', word: 'теплый', pronunciation: 'teplyy', translation: 'Warm', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'rv172', language: 'russian', word: 'прохладный', pronunciation: 'prokhladnyy', translation: 'Cool', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'rv173', language: 'russian', word: 'сложный', pronunciation: 'slozhnyy', translation: 'Difficult / Complex', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'rv174', language: 'russian', word: 'легкий', pronunciation: 'lyogkiy', translation: 'Easy / Light', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'rv175', language: 'russian', word: 'вкусный', pronunciation: 'vkusnyy', translation: 'Delicious', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'rv176', language: 'russian', word: 'красивый', pronunciation: 'krasivyy', translation: 'Beautiful', category: 'Adjectives', difficulty: 'beginner' },
  { id: 'rv177', language: 'russian', word: 'интересный', pronunciation: 'interesnyy', translation: 'Interesting', category: 'Adjectives', difficulty: 'intermediate' },
  { id: 'rv178', language: 'russian', word: 'быстрый', pronunciation: 'bystryy', translation: 'Fast', category: 'Adjectives', difficulty: 'beginner' },
  
  // Directions
  { id: 'rv179', language: 'russian', word: 'право', pronunciation: 'pravo', translation: 'Right', category: 'Directions', difficulty: 'beginner' },
  { id: 'rv180', language: 'russian', word: 'лево', pronunciation: 'levo', translation: 'Left', category: 'Directions', difficulty: 'beginner' },
  { id: 'rv181', language: 'russian', word: 'перед', pronunciation: 'pered', translation: 'Front / Before', category: 'Directions', difficulty: 'beginner' },
  { id: 'rv182', language: 'russian', word: 'позади', pronunciation: 'pozadi', translation: 'Back / Behind', category: 'Directions', difficulty: 'beginner' },
  { id: 'rv183', language: 'russian', word: 'верх', pronunciation: 'verkh', translation: 'Top / Above', category: 'Directions', difficulty: 'beginner' },
  { id: 'rv184', language: 'russian', word: 'низ', pronunciation: 'niz', translation: 'Bottom / Below', category: 'Directions', difficulty: 'beginner' },
  { id: 'rv185', language: 'russian', word: 'внутри', pronunciation: 'vnutri', translation: 'Inside', category: 'Directions', difficulty: 'beginner' },
  { id: 'rv186', language: 'russian', word: 'снаружи', pronunciation: 'snaruzhi', translation: 'Outside', category: 'Directions', difficulty: 'beginner' },
  
  // Home/Furniture
  { id: 'rv187', language: 'russian', word: 'дом', pronunciation: 'dom', translation: 'House / Home', category: 'Home', difficulty: 'beginner' },
  { id: 'rv188', language: 'russian', word: 'комната', pronunciation: 'komnata', translation: 'Room', category: 'Home', difficulty: 'beginner' },
  { id: 'rv189', language: 'russian', word: 'кровать', pronunciation: 'krovat', translation: 'Bed', category: 'Home', difficulty: 'beginner' },
  { id: 'rv190', language: 'russian', word: 'стол', pronunciation: 'stol', translation: 'Desk / Table', category: 'Home', difficulty: 'beginner' },
  { id: 'rv191', language: 'russian', word: 'стул', pronunciation: 'stul', translation: 'Chair', category: 'Home', difficulty: 'beginner' },
  { id: 'rv192', language: 'russian', word: 'дверь', pronunciation: 'dver', translation: 'Door', category: 'Home', difficulty: 'beginner' },
  { id: 'rv193', language: 'russian', word: 'окно', pronunciation: 'okno', translation: 'Window', category: 'Home', difficulty: 'beginner' },
  { id: 'rv194', language: 'russian', word: 'кухня', pronunciation: 'kukhnya', translation: 'Kitchen', category: 'Home', difficulty: 'beginner' },
  { id: 'rv195', language: 'russian', word: 'ванная', pronunciation: 'vannaya', translation: 'Bathroom', category: 'Home', difficulty: 'beginner' },
  
  // Nature
  { id: 'rv196', language: 'russian', word: 'цветок', pronunciation: 'tsvetok', translation: 'Flower', category: 'Nature', difficulty: 'beginner' },
  { id: 'rv197', language: 'russian', word: 'дерево', pronunciation: 'derevo', translation: 'Tree', category: 'Nature', difficulty: 'beginner' },
  { id: 'rv198', language: 'russian', word: 'гора', pronunciation: 'gora', translation: 'Mountain', category: 'Nature', difficulty: 'beginner' },
  { id: 'rv199', language: 'russian', word: 'река', pronunciation: 'reka', translation: 'River', category: 'Nature', difficulty: 'beginner' },
  { id: 'rv200', language: 'russian', word: 'море', pronunciation: 'more', translation: 'Sea / Ocean', category: 'Nature', difficulty: 'beginner' },
  { id: 'rv201', language: 'russian', word: 'птица', pronunciation: 'ptitsa', translation: 'Bird', category: 'Nature', difficulty: 'beginner' },
  { id: 'rv202', language: 'russian', word: 'собака', pronunciation: 'sobaka', translation: 'Dog', category: 'Nature', difficulty: 'beginner' },
  { id: 'rv203', language: 'russian', word: 'кошка', pronunciation: 'koshka', translation: 'Cat', category: 'Nature', difficulty: 'beginner' },
];

export function getVocabularyByCategory(language: 'japanese' | 'russian', category: string): VocabularyWord[] {
  const vocab = language === 'japanese' ? japaneseVocabulary : russianVocabulary;
  return vocab.filter(w => w.category === category);
}

export function getVocabularyByDifficulty(language: 'japanese' | 'russian', difficulty: 'beginner' | 'intermediate' | 'advanced'): VocabularyWord[] {
  const vocab = language === 'japanese' ? japaneseVocabulary : russianVocabulary;
  return vocab.filter(w => w.difficulty === difficulty);
}

