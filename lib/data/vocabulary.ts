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
];

export function getVocabularyByCategory(language: 'japanese' | 'russian', category: string): VocabularyWord[] {
  const vocab = language === 'japanese' ? japaneseVocabulary : russianVocabulary;
  return vocab.filter(w => w.category === category);
}

export function getVocabularyByDifficulty(language: 'japanese' | 'russian', difficulty: 'beginner' | 'intermediate' | 'advanced'): VocabularyWord[] {
  const vocab = language === 'japanese' ? japaneseVocabulary : russianVocabulary;
  return vocab.filter(w => w.difficulty === difficulty);
}

