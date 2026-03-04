import { CatType, Language, ItemType, ItemCategory, CatState } from './types';

export const CANVAS_WIDTH = 1280;
export const CANVAS_HEIGHT = 720;

// Mobile Constants (Vertical Layout)
export const MOBILE_CANVAS_WIDTH = 720;
export const MOBILE_CANVAS_HEIGHT = 1280;

export const CAT_RADIUS = 40;
export const GRAB_THRESHOLD = 50; 
export const CATCH_DISTANCE = 55; 
// Increased MAX_HP to make it more forgiving as requested for the level system
export const MAX_HP = 5; 

// Desktop Zones
export const BATHTUB = {
  x: CANVAS_WIDTH - 250,
  y: CANVAS_HEIGHT - 200,
  width: 220,
  height: 180
};

export const FOOD_BOWL = {
  x: 150,
  y: CANVAS_HEIGHT - 100,
  radius: 35
};

// Mobile Zones (Bigger & Vertically Aligned)
export const MOBILE_BATHTUB = {
  x: 380, // Bottom right (720 - 300 - padding)
  y: 1100, // Bottom (1280 - 140 - padding)
  width: 300, // Reduced size (~half of previous 600)
  height: 140
};

export const MOBILE_FOOD_BOWL = {
  x: 360, // Center of width (720/2)
  y: 640, // Center of height (1280/2), matches Rug center
  radius: 50
};

export const COLORS = {
  bg: '#d2b48c',
  ink: '#2d2d2d',
  pencilWhite: '#f0f0f0',
  red: '#e74c3c',
  blue: '#3498db'
};

export const ITEMS_DATA: Record<ItemType, { category: ItemCategory, color: string, label: string }> = {
  fish: { category: 'food', color: '#3498db', label: 'Fish' },
  bun: { category: 'food', color: '#f1c40f', label: 'Bun' },
  pizza: { category: 'food', color: '#e74c3c', label: 'Pizza' },
  brush: { category: 'cleaning', color: '#9b59b6', label: 'Brush' },
  towel: { category: 'cleaning', color: '#1abc9c', label: 'Towel' },
  scissors: { category: 'cleaning', color: '#95a5a6', label: 'Scissors' },
  toy: { category: 'toy', color: '#e67e22', label: 'Toy' },
  catnip: { category: 'toy', color: '#2ecc71', label: 'Catnip' }
};

export interface LevelData {
  id: number;
  catType: CatType;
  difficulty: number;
  timeTargets: [number, number]; // [3star_limit, 2star_limit]
  initialState: {
    state: CatState;
    hunger: number;
    dirtiness: number;
    grumpiness: number;
  };
  availableItems: ItemType[];
}

export const LEVELS: LevelData[] = [
  { 
    id: 1, 
    catType: 'white', 
    difficulty: 1, 
    timeTargets: [15, 25],
    initialState: { state: 'hungry', hunger: 100, dirtiness: 0, grumpiness: 0 },
    availableItems: ['fish', 'bun']
  },
  { 
    id: 2, 
    catType: 'orange', 
    difficulty: 2, 
    timeTargets: [18, 30],
    initialState: { state: 'dirty', hunger: 0, dirtiness: 100, grumpiness: 0 },
    availableItems: ['brush', 'towel']
  },
  { 
    id: 3, 
    catType: 'tabby', 
    difficulty: 3, 
    timeTargets: [22, 35],
    initialState: { state: 'hungry', hunger: 100, dirtiness: 0, grumpiness: 0 },
    availableItems: ['pizza', 'fish', 'bun']
  },
  { 
    id: 4, 
    catType: 'calico', 
    difficulty: 4, 
    timeTargets: [27, 40],
    initialState: { state: 'dirty', hunger: 0, dirtiness: 100, grumpiness: 0 },
    availableItems: ['scissors', 'brush', 'towel']
  },
  { 
    id: 5, 
    catType: 'black', 
    difficulty: 5, 
    timeTargets: [32, 48],
    initialState: { state: 'grumpy', hunger: 0, dirtiness: 0, grumpiness: 100 },
    availableItems: ['toy', 'catnip']
  },
  { 
    id: 6, 
    catType: 'tuxedo', 
    difficulty: 7, 
    timeTargets: [40, 58],
    initialState: { state: 'hungry', hunger: 80, dirtiness: 50, grumpiness: 0 },
    availableItems: ['fish', 'brush', 'toy']
  },
  { 
    id: 7, 
    catType: 'siamese', 
    difficulty: 8, 
    timeTargets: [48, 68],
    initialState: { state: 'dirty', hunger: 20, dirtiness: 80, grumpiness: 50 },
    availableItems: ['towel', 'scissors', 'catnip']
  },
  { 
    id: 8, 
    catType: 'devon', 
    difficulty: 9, 
    timeTargets: [55, 78],
    initialState: { state: 'grumpy', hunger: 50, dirtiness: 50, grumpiness: 80 },
    availableItems: ['toy', 'fish', 'brush']
  },
  { 
    id: 9, 
    catType: 'sphynx', 
    difficulty: 9.5, 
    timeTargets: [63, 88],
    initialState: { state: 'hungry', hunger: 100, dirtiness: 100, grumpiness: 100 },
    availableItems: ['pizza', 'towel', 'catnip', 'fish']
  },
  { 
    id: 10, 
    catType: 'maine_coon', 
    difficulty: 10, 
    timeTargets: [72, 100],
    initialState: { state: 'dirty', hunger: 100, dirtiness: 100, grumpiness: 100 },
    availableItems: ['fish', 'bun', 'pizza', 'brush', 'towel', 'scissors', 'toy', 'catnip']
  },
];

export const TRANSLATIONS = {
  en: {
    title: "Hellycat",
    subtitle: "Can you give the mischievous cat a bath?",
    controls_wasd: "Move Hand",
    controls_space: "Hold to Grab",
    controls_tub: "Drop here",
    controls_move_mobile: "Drag to Move",
    controls_grab_mobile: "Pinch to Grab",
    controls_tub_mobile: "Drop in Tub",
    start_btn: "Start Catching!",
    choose_cat: "Select Level",
    temperament: "Temperament",
    chill: "Chill",
    spicy: "Spicy",
    go_btn: "GO!",
    caught_title: "Caught!",
    caught_msg: "The cat scratched you too much!",
    try_again: "Retry",
    win_title: "Squeaky Clean!",
    win_msg: "Level Complete!",
    play_again: "Next Level",
    back_to_levels: "Levels",
    meow_txt: "Meow~",
    level: "Level",
    locked: "Locked",
    time: "Time",
    stars: "Stars",
    new_record: "New Record!",
    cat_names: {
      white: 'Snow', black: 'Void', tuxedo: 'Tux', calico: 'Cali', 
      siamese: 'Meezer', devon: 'Rex', orange: 'Gingy', sphynx: 'Nakey', tabby: 'Tiger', maine_coon: 'Maine'
    },
    bath_messages: [
      "Good kitty!", "Almost done~", "So fluffy!", "Don't cry baby~", 
      "Love you!", "Squeaky clean!", "My precious~", "Just a bit more~", "Be a good boy/girl~"
    ],
    ouch_messages: [
      "OUCH!", "Bad kitty!", "No biting!", "It hurts!", "Mean!", "Hey!"
    ],
    fat_tub_title: "Oops!",
    fat_tub_msg: "Your bathtub can't fit this cat anymore!",
    fat_roll_msg: "Look what you did! Bad owner, your cat needs a walk.",
    free_title: "Freedom!",
    free_msg: "Your cat yearns for freedom and has escaped."
  },
  zh: {
    title: "Hellycat",
    subtitle: "你能给这只淘气猫洗个澡吗？",
    controls_wasd: "移动手",
    controls_space: "按住抓取",
    controls_tub: "放入澡盆",
    controls_move_mobile: "单指拖动",
    controls_grab_mobile: "双指捏合",
    controls_tub_mobile: "放入澡盆",
    start_btn: "开始抓猫！",
    choose_cat: "选择关卡",
    temperament: "脾气",
    chill: "温顺",
    spicy: "暴躁",
    go_btn: "开始！",
    caught_title: "被抓伤了！",
    caught_msg: "猫咪抓伤你太多次了！",
    try_again: "重试",
    win_title: "洗白白！",
    win_msg: "关卡完成！",
    play_again: "下一关",
    back_to_levels: "返回选关",
    meow_txt: "喵~",
    level: "第",
    locked: "未解锁",
    time: "用时",
    stars: "评价",
    new_record: "新纪录！",
    cat_names: {
      white: '小白', black: '小黑', tuxedo: '警长', calico: '三花', 
      siamese: '挖煤', devon: '卷毛', orange: '大橘', sphynx: '无毛', tabby: '虎斑', maine_coon: '缅因猫'
    },
    bath_messages: [
      "乖猫猫！", "快洗好了~", "好软乎！", "不哭不哭~", 
      "爱你哟！", "干干净净！", "我的宝贝~", "再坚持一下~", "做个好孩子~"
    ],
    ouch_messages: [
      "好痛！", "咪咪不乖！", "别咬我！", "痛痛痛！", "坏猫猫！", "哎呀！"
    ],
    fat_tub_title: "哎呀！",
    fat_tub_msg: "你的浴缸已经塞不下这只猫了！",
    fat_roll_msg: "看看你干了什么！坏主人，你的猫撑得需要散步。",
    free_title: "自由！",
    free_msg: "你的猫向往自由"
  },
  ja: {
    title: "Hellycat",
    subtitle: "いたずら猫をお風呂に入れられるかな？",
    controls_wasd: "移動",
    controls_space: "掴む",
    controls_tub: "お風呂",
    controls_move_mobile: "ドラッグ移動",
    controls_grab_mobile: "ピンチで掴む",
    controls_tub_mobile: "お風呂へ",
    start_btn: "捕獲開始！",
    choose_cat: "レベル選択",
    temperament: "気性",
    chill: "大人しい",
    spicy: "激しい",
    go_btn: "スタート！",
    caught_title: "やられた！",
    caught_msg: "猫に引っかかれすぎた！",
    try_again: "リトライ",
    win_title: "ピカピカ！",
    win_msg: "クリア！",
    play_again: "次のレベル",
    back_to_levels: "レベル選択",
    meow_txt: "ニャー",
    level: "レベル",
    locked: "未開放",
    time: "タイム",
    stars: "評価",
    new_record: "新記録！",
    cat_names: {
      white: 'シロ', black: 'クロ', tuxedo: 'タキシード', calico: 'ミケ', 
      siamese: 'シャム', devon: 'レックス', orange: 'チャトラ', sphynx: 'スフィンクス', tabby: 'トラ', maine_coon: 'メインクーン'
    },
    bath_messages: [
      "いい子だね！", "もうすぐ終わるよ~", "ふわふわ！", "泣かないで~", 
      "大好きだよ！", "ピカピカ！", "愛しい子~", "あとちょっと~", "いい子にしてて~"
    ],
    ouch_messages: [
      "痛い！", "ダメよ！", "噛まないで！", "ひどい！", "悪い子！", "ああっ！"
    ],
    fat_tub_title: "おっと！",
    fat_tub_msg: "猫が大きすぎてお風呂に入りません！",
    fat_roll_msg: "何てことを！悪い飼い主だ、猫は散歩が必要だよ。",
    free_title: "自由！",
    free_msg: "あなたの猫は自由を求めて飛んでいきました。"
  },
  fr: {
    title: "Hellycat",
    subtitle: "Peux-tu donner un bain à ce chat espiègle ?",
    controls_wasd: "Bouger",
    controls_space: "Attraper",
    controls_tub: "Baignoire",
    controls_move_mobile: "Glisser",
    controls_grab_mobile: "Pincer",
    controls_tub_mobile: "Baignoire",
    start_btn: "Commencer !",
    choose_cat: "Choisir Niveau",
    temperament: "Caractère",
    chill: "Calme",
    spicy: "Épicé",
    go_btn: "YALLAH !",
    caught_title: "Griffé !",
    caught_msg: "Le chat t'a trop griffé !",
    try_again: "Réessayer",
    win_title: "Tout propre !",
    win_msg: "Niveau terminé !",
    play_again: "Niveau suivant",
    back_to_levels: "Niveaux",
    meow_txt: "Miaou~",
    level: "Niveau",
    locked: "Verrouillé",
    time: "Temps",
    stars: "Étoiles",
    new_record: "Nouveau record !",
    cat_names: {
      white: 'Flocon', black: 'Minuit', tuxedo: 'Smoking', calico: 'Cali', 
      siamese: 'Siam', devon: 'Rex', orange: 'Roux', sphynx: 'Nu', tabby: 'Tigré', maine_coon: 'Maine Coon'
    },
    bath_messages: [
      "Gentil chat !", "Presque fini~", "Tout doux !", "Ne pleure pas~", 
      "Je t'aime !", "Tout propre !", "Mon précieux~", "Encore un peu~", "Sois sage~"
    ],
    ouch_messages: [
      "AÏE !", "Vilain chat !", "Pas mordre !", "Ça fait mal !", "Méchant !", "Hé !"
    ],
    fat_tub_title: "Oups !",
    fat_tub_msg: "Ta baignoire est trop petite pour ce chat !",
    fat_roll_msg: "Regarde ce que tu as fait ! Mauvais maître, ton chat a besoin d'une promenade.",
    free_title: "Liberté !",
    free_msg: "Votre chat aspire à la liberté et s'est envolé."
  },
  de: {
    title: "Hellycat",
    subtitle: "Kannst du die schelmische Katze baden?",
    controls_wasd: "Bewegen",
    controls_space: "Greifen",
    controls_tub: "Badewanne",
    controls_move_mobile: "Ziehen",
    controls_grab_mobile: "Kneifen",
    controls_tub_mobile: "Badewanne",
    start_btn: "Starten!",
    choose_cat: "Levelwahl",
    temperament: "Temperament",
    chill: "Ruhig",
    spicy: "Wild",
    go_btn: "LOS!",
    caught_title: "Erwischt!",
    caught_msg: "Die Katze hat dich zu oft gekratzt!",
    try_again: "Nochmal",
    win_title: "Blitzblank!",
    win_msg: "Level geschafft!",
    play_again: "Nächstes Level",
    back_to_levels: "Level",
    meow_txt: "Miau~",
    level: "Level",
    locked: "Gesperrt",
    time: "Zeit",
    stars: "Sterne",
    new_record: "Neuer Rekord!",
    cat_names: {
      white: 'Schneeball', black: 'Schatten', tuxedo: 'Smoking', calico: 'Bunt', 
      siamese: 'Siam', devon: 'Rex', orange: 'Rot', sphynx: 'Nackt', tabby: 'Tiger', maine_coon: 'Maine Coon'
    },
    bath_messages: [
      "Gute Katze!", "Fast fertig~", "So flauschig!", "Nicht weinen~", 
      "Hab dich lieb!", "Sauber!", "Mein Schatz~", "Nur noch kurz~", "Sei brav~"
    ],
    ouch_messages: [
      "AUA!", "Böse Katze!", "Nicht beißen!", "Das tut weh!", "Gemein!", "Hey!"
    ],
    fat_tub_title: "Hoppla!",
    fat_tub_msg: "Deine Badewanne ist zu klein für diese Katze!",
    fat_roll_msg: "Schau, was du getan hast! Schlechter Besitzer, deine Katze braucht einen Spaziergang.",
    free_title: "Freiheit!",
    free_msg: "Deine Katze sehnt sich nach Freiheit und ist geflogen."
  },
  ru: {
    title: "Hellycat",
    subtitle: "Сможешь искупать этого озорного кота?",
    controls_wasd: "Рука",
    controls_space: "Хватать",
    controls_tub: "Ванна",
    controls_move_mobile: "Тяни",
    controls_grab_mobile: "Щипок",
    controls_tub_mobile: "Ванна",
    start_btn: "Начать!",
    choose_cat: "Уровни",
    temperament: "Характер",
    chill: "Тихий",
    spicy: "Дикий",
    go_btn: "Вперед!",
    caught_title: "Пойман!",
    caught_msg: "Кот слишком сильно исцарапал тебя!",
    try_again: "Еще раз",
    win_title: "Чистота!",
    win_msg: "Уровень пройден!",
    play_again: "След. уровень",
    back_to_levels: "В меню",
    meow_txt: "Мяу~",
    level: "Уровень",
    locked: "Закрыто",
    time: "Время",
    stars: "Звезды",
    new_record: "Рекорд!",
    cat_names: {
      white: 'Снежок', black: 'Уголек', tuxedo: 'Феликс', calico: 'Пятно', 
      siamese: 'Сиам', devon: 'Рекс', orange: 'Рыжий', sphynx: 'Сфинкс', tabby: 'Тигр', maine_coon: 'Мейн-кун'
    },
    bath_messages: [
      "Хороший котик!", "Почти всё~", "Такой пушистый!", "Не плачь~", 
      "Люблю тебя!", "Чистенький!", "Моя прелесть~", "Еще чуть-чуть~", "Будь умницей~"
    ],
    ouch_messages: [
      "АЙ!", "Плохой кот!", "Не кусайся!", "Больно!", "Злюка!", "Эй!"
    ],
    fat_tub_title: "Ой!",
    fat_tub_msg: "Твоя ванна слишком мала для этого кота!",
    fat_roll_msg: "Смотри, что ты наделал! Плохой хозяин, коту нужно гулять.",
    free_title: "Свобода!",
    free_msg: "Твой кот жаждет свободы и улетел."
  }
};