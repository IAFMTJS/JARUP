import { Lesson, Character } from '../models';

export const hiraganaCharacters: Character[] = [
  // Vowels
  { id: 'h1', language: 'japanese', character: 'あ', pronunciation: 'a', meaning: 'a (as in apple)' },
  { id: 'h2', language: 'japanese', character: 'い', pronunciation: 'i', meaning: 'i (as in eat)' },
  { id: 'h3', language: 'japanese', character: 'う', pronunciation: 'u', meaning: 'u (as in you)' },
  { id: 'h4', language: 'japanese', character: 'え', pronunciation: 'e', meaning: 'e (as in egg)' },
  { id: 'h5', language: 'japanese', character: 'お', pronunciation: 'o', meaning: 'o (as in old)' },
  
  // K-row
  { id: 'h6', language: 'japanese', character: 'か', pronunciation: 'ka', meaning: 'ka' },
  { id: 'h7', language: 'japanese', character: 'き', pronunciation: 'ki', meaning: 'ki' },
  { id: 'h8', language: 'japanese', character: 'く', pronunciation: 'ku', meaning: 'ku' },
  { id: 'h9', language: 'japanese', character: 'け', pronunciation: 'ke', meaning: 'ke' },
  { id: 'h10', language: 'japanese', character: 'こ', pronunciation: 'ko', meaning: 'ko' },
  
  // S-row
  { id: 'h11', language: 'japanese', character: 'さ', pronunciation: 'sa', meaning: 'sa' },
  { id: 'h12', language: 'japanese', character: 'し', pronunciation: 'shi', meaning: 'shi' },
  { id: 'h13', language: 'japanese', character: 'す', pronunciation: 'su', meaning: 'su' },
  { id: 'h14', language: 'japanese', character: 'せ', pronunciation: 'se', meaning: 'se' },
  { id: 'h15', language: 'japanese', character: 'そ', pronunciation: 'so', meaning: 'so' },
  
  // T-row
  { id: 'h16', language: 'japanese', character: 'た', pronunciation: 'ta', meaning: 'ta' },
  { id: 'h17', language: 'japanese', character: 'ち', pronunciation: 'chi', meaning: 'chi' },
  { id: 'h18', language: 'japanese', character: 'つ', pronunciation: 'tsu', meaning: 'tsu' },
  { id: 'h19', language: 'japanese', character: 'て', pronunciation: 'te', meaning: 'te' },
  { id: 'h20', language: 'japanese', character: 'と', pronunciation: 'to', meaning: 'to' },
  
  // N-row
  { id: 'h21', language: 'japanese', character: 'な', pronunciation: 'na', meaning: 'na' },
  { id: 'h22', language: 'japanese', character: 'に', pronunciation: 'ni', meaning: 'ni' },
  { id: 'h23', language: 'japanese', character: 'ぬ', pronunciation: 'nu', meaning: 'nu' },
  { id: 'h24', language: 'japanese', character: 'ね', pronunciation: 'ne', meaning: 'ne' },
  { id: 'h25', language: 'japanese', character: 'の', pronunciation: 'no', meaning: 'no' },
  
  // H-row
  { id: 'h26', language: 'japanese', character: 'は', pronunciation: 'ha', meaning: 'ha' },
  { id: 'h27', language: 'japanese', character: 'ひ', pronunciation: 'hi', meaning: 'hi' },
  { id: 'h28', language: 'japanese', character: 'ふ', pronunciation: 'fu', meaning: 'fu' },
  { id: 'h29', language: 'japanese', character: 'へ', pronunciation: 'he', meaning: 'he' },
  { id: 'h30', language: 'japanese', character: 'ほ', pronunciation: 'ho', meaning: 'ho' },
  
  // M-row
  { id: 'h31', language: 'japanese', character: 'ま', pronunciation: 'ma', meaning: 'ma' },
  { id: 'h32', language: 'japanese', character: 'み', pronunciation: 'mi', meaning: 'mi' },
  { id: 'h33', language: 'japanese', character: 'む', pronunciation: 'mu', meaning: 'mu' },
  { id: 'h34', language: 'japanese', character: 'め', pronunciation: 'me', meaning: 'me' },
  { id: 'h35', language: 'japanese', character: 'も', pronunciation: 'mo', meaning: 'mo' },
  
  // Y-row
  { id: 'h36', language: 'japanese', character: 'や', pronunciation: 'ya', meaning: 'ya' },
  { id: 'h37', language: 'japanese', character: 'ゆ', pronunciation: 'yu', meaning: 'yu' },
  { id: 'h38', language: 'japanese', character: 'よ', pronunciation: 'yo', meaning: 'yo' },
  
  // R-row
  { id: 'h39', language: 'japanese', character: 'ら', pronunciation: 'ra', meaning: 'ra' },
  { id: 'h40', language: 'japanese', character: 'り', pronunciation: 'ri', meaning: 'ri' },
  { id: 'h41', language: 'japanese', character: 'る', pronunciation: 'ru', meaning: 'ru' },
  { id: 'h42', language: 'japanese', character: 'れ', pronunciation: 're', meaning: 're' },
  { id: 'h43', language: 'japanese', character: 'ろ', pronunciation: 'ro', meaning: 'ro' },
  
  // W-row
  { id: 'h44', language: 'japanese', character: 'わ', pronunciation: 'wa', meaning: 'wa' },
  { id: 'h45', language: 'japanese', character: 'を', pronunciation: 'wo', meaning: 'wo' },
  { id: 'h46', language: 'japanese', character: 'ん', pronunciation: 'n', meaning: 'n' },
];

export const katakanaCharacters: Character[] = [
  // Vowels
  { id: 'k1', language: 'japanese', character: 'ア', pronunciation: 'a', meaning: 'a (Katakana)' },
  { id: 'k2', language: 'japanese', character: 'イ', pronunciation: 'i', meaning: 'i (Katakana)' },
  { id: 'k3', language: 'japanese', character: 'ウ', pronunciation: 'u', meaning: 'u (Katakana)' },
  { id: 'k4', language: 'japanese', character: 'エ', pronunciation: 'e', meaning: 'e (Katakana)' },
  { id: 'k5', language: 'japanese', character: 'オ', pronunciation: 'o', meaning: 'o (Katakana)' },
  
  // K-row
  { id: 'k6', language: 'japanese', character: 'カ', pronunciation: 'ka', meaning: 'ka' },
  { id: 'k7', language: 'japanese', character: 'キ', pronunciation: 'ki', meaning: 'ki' },
  { id: 'k8', language: 'japanese', character: 'ク', pronunciation: 'ku', meaning: 'ku' },
  { id: 'k9', language: 'japanese', character: 'ケ', pronunciation: 'ke', meaning: 'ke' },
  { id: 'k10', language: 'japanese', character: 'コ', pronunciation: 'ko', meaning: 'ko' },
  
  // S-row
  { id: 'k11', language: 'japanese', character: 'サ', pronunciation: 'sa', meaning: 'sa' },
  { id: 'k12', language: 'japanese', character: 'シ', pronunciation: 'shi', meaning: 'shi' },
  { id: 'k13', language: 'japanese', character: 'ス', pronunciation: 'su', meaning: 'su' },
  { id: 'k14', language: 'japanese', character: 'セ', pronunciation: 'se', meaning: 'se' },
  { id: 'k15', language: 'japanese', character: 'ソ', pronunciation: 'so', meaning: 'so' },
  
  // T-row
  { id: 'k16', language: 'japanese', character: 'タ', pronunciation: 'ta', meaning: 'ta' },
  { id: 'k17', language: 'japanese', character: 'チ', pronunciation: 'chi', meaning: 'chi' },
  { id: 'k18', language: 'japanese', character: 'ツ', pronunciation: 'tsu', meaning: 'tsu' },
  { id: 'k19', language: 'japanese', character: 'テ', pronunciation: 'te', meaning: 'te' },
  { id: 'k20', language: 'japanese', character: 'ト', pronunciation: 'to', meaning: 'to' },
  
  // N-row
  { id: 'k21', language: 'japanese', character: 'ナ', pronunciation: 'na', meaning: 'na' },
  { id: 'k22', language: 'japanese', character: 'ニ', pronunciation: 'ni', meaning: 'ni' },
  { id: 'k23', language: 'japanese', character: 'ヌ', pronunciation: 'nu', meaning: 'nu' },
  { id: 'k24', language: 'japanese', character: 'ネ', pronunciation: 'ne', meaning: 'ne' },
  { id: 'k25', language: 'japanese', character: 'ノ', pronunciation: 'no', meaning: 'no' },
  
  // H-row
  { id: 'k26', language: 'japanese', character: 'ハ', pronunciation: 'ha', meaning: 'ha' },
  { id: 'k27', language: 'japanese', character: 'ヒ', pronunciation: 'hi', meaning: 'hi' },
  { id: 'k28', language: 'japanese', character: 'フ', pronunciation: 'fu', meaning: 'fu' },
  { id: 'k29', language: 'japanese', character: 'ヘ', pronunciation: 'he', meaning: 'he' },
  { id: 'k30', language: 'japanese', character: 'ホ', pronunciation: 'ho', meaning: 'ho' },
  
  // M-row
  { id: 'k31', language: 'japanese', character: 'マ', pronunciation: 'ma', meaning: 'ma' },
  { id: 'k32', language: 'japanese', character: 'ミ', pronunciation: 'mi', meaning: 'mi' },
  { id: 'k33', language: 'japanese', character: 'ム', pronunciation: 'mu', meaning: 'mu' },
  { id: 'k34', language: 'japanese', character: 'メ', pronunciation: 'me', meaning: 'me' },
  { id: 'k35', language: 'japanese', character: 'モ', pronunciation: 'mo', meaning: 'mo' },
  
  // Y-row
  { id: 'k36', language: 'japanese', character: 'ヤ', pronunciation: 'ya', meaning: 'ya' },
  { id: 'k37', language: 'japanese', character: 'ユ', pronunciation: 'yu', meaning: 'yu' },
  { id: 'k38', language: 'japanese', character: 'ヨ', pronunciation: 'yo', meaning: 'yo' },
  
  // R-row
  { id: 'k39', language: 'japanese', character: 'ラ', pronunciation: 'ra', meaning: 'ra' },
  { id: 'k40', language: 'japanese', character: 'リ', pronunciation: 'ri', meaning: 'ri' },
  { id: 'k41', language: 'japanese', character: 'ル', pronunciation: 'ru', meaning: 'ru' },
  { id: 'k42', language: 'japanese', character: 'レ', pronunciation: 're', meaning: 're' },
  { id: 'k43', language: 'japanese', character: 'ロ', pronunciation: 'ro', meaning: 'ro' },
  
  // W-row
  { id: 'k44', language: 'japanese', character: 'ワ', pronunciation: 'wa', meaning: 'wa' },
  { id: 'k45', language: 'japanese', character: 'ヲ', pronunciation: 'wo', meaning: 'wo' },
  { id: 'k46', language: 'japanese', character: 'ン', pronunciation: 'n', meaning: 'n' },
];

export const basicKanji: Character[] = [
  { id: 'kan1', language: 'japanese', character: '人', pronunciation: 'hito/jin', meaning: 'person/people' },
  { id: 'kan2', language: 'japanese', character: '水', pronunciation: 'mizu', meaning: 'water' },
  { id: 'kan3', language: 'japanese', character: '山', pronunciation: 'yama', meaning: 'mountain' },
  { id: 'kan4', language: 'japanese', character: '火', pronunciation: 'hi', meaning: 'fire' },
  { id: 'kan5', language: 'japanese', character: '日', pronunciation: 'hi/ni', meaning: 'day/sun' },
];

export const japaneseLessons: Lesson[] = [
  {
    id: 'jp-h1',
    language: 'japanese',
    category: 'Hiragana',
    title: 'Hiragana Basics: Vowels',
    content: [
      { type: 'text', data: 'Learn the five basic vowels: あ(a), い(i), う(u), え(e), お(o)' },
    ],
    exercises: [
      {
        id: 'ex1',
        type: 'matching',
        question: 'Match the hiragana character with its sound',
        options: ['あ', 'い', 'う', 'え', 'お'],
        correctAnswer: ['a', 'i', 'u', 'e', 'o'],
        points: 10,
      },
    ],
    order: 1,
  },
  {
    id: 'jp-h2',
    language: 'japanese',
    category: 'Hiragana',
    title: 'Hiragana: K-sounds',
    content: [
      { type: 'text', data: 'Learn the K-sound characters: か(ka), き(ki), く(ku), け(ke), こ(ko)' },
    ],
    exercises: [
      {
        id: 'ex2',
        type: 'typing',
        question: 'Type "ka" in hiragana',
        correctAnswer: 'か',
        points: 10,
      },
    ],
    order: 2,
  },
  {
    id: 'jp-h3',
    language: 'japanese',
    category: 'Hiragana',
    title: 'Hiragana: S-sounds',
    content: [
      { type: 'text', data: 'Learn the S-sound characters: さ(sa), し(shi), す(su), せ(se), そ(so)' },
    ],
    exercises: [
      {
        id: 'ex3',
        type: 'typing',
        question: 'Type "sa" in hiragana',
        correctAnswer: 'さ',
        points: 10,
      },
    ],
    order: 3,
  },
  {
    id: 'jp-h4',
    language: 'japanese',
    category: 'Hiragana',
    title: 'Hiragana: T-sounds',
    content: [
      { type: 'text', data: 'Learn the T-sound characters: た(ta), ち(chi), つ(tsu), て(te), と(to)' },
    ],
    exercises: [],
    order: 4,
  },
  {
    id: 'jp-k1',
    language: 'japanese',
    category: 'Katakana',
    title: 'Katakana Basics',
    content: [
      { type: 'text', data: 'Katakana is used for foreign words. Learn: ア(a), イ(i), ウ(u), エ(e), オ(o)' },
    ],
    exercises: [],
    order: 5,
  },
  {
    id: 'jp-kan1',
    language: 'japanese',
    category: 'Kanji',
    title: 'Basic Kanji: Nature',
    content: [
      { type: 'text', data: 'Learn basic kanji: 人(person), 水(water), 山(mountain), 火(fire), 日(day)' },
    ],
    exercises: [],
    order: 6,
  },
  {
    id: 'jp-gr1',
    language: 'japanese',
    category: 'Grammar',
    title: 'Basic Sentence Structure',
    content: [
      { type: 'text', data: 'Japanese sentence structure: Subject + Object + Verb. Example: 私は りんごを 食べます (I eat an apple)' },
    ],
    exercises: [],
    order: 7,
  },
  {
    id: 'jp-gr2',
    language: 'japanese',
    category: 'Grammar',
    title: 'Particles は and を',
    content: [
      { type: 'text', data: 'は (wa) marks the topic. を (wo) marks the direct object. Example: 私は本を読みます (I read books)' },
    ],
    exercises: [],
    order: 8,
  },
  {
    id: 'jp-voc1',
    language: 'japanese',
    category: 'Vocabulary',
    title: 'Greetings',
    content: [
      { type: 'text', data: 'こんにちは (Hello), ありがとう (Thank you), すみません (Excuse me)' },
    ],
    exercises: [],
    order: 9,
  },
  {
    id: 'jp-voc2',
    language: 'japanese',
    category: 'Vocabulary',
    title: 'Common Phrases',
    content: [
      { type: 'text', data: 'おはよう (Good morning), さようなら (Goodbye), お願いします (Please)' },
    ],
    exercises: [],
    order: 10,
  },
];

