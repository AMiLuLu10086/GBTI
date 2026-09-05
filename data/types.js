const TYPES = [
  {
    code: 'RUSH',
    cn: '无脑冲锋枪',
    genre: 'FPS',
    intro: '一梭子过去，先送为敬。',
    desc: '你不是在冲，就是在去冲的路上。复活点对你来说只是加油站，死亡只是下一次冲锋的前摇。你的字典里没有后退，只有按到底。队友还在架枪，你已经把对面五个人都引了过来。',
    image: 'image/RUSH.svg',
    core: { action: 'rush', comm: 'mic', mindset: 'sweat', role: 'core' }
  },
  {
    code: 'RELOAD',
    cn: '换弹癌',
    genre: 'FPS',
    intro: '敌人来了我在换弹，走了我还在换弹。',
    desc: '你对子弹数量有极其变态的执念。哪怕还剩二十发，也要先换满再出门。于是每次交火都变成：你出现、你换弹、你倒地。真正的战术不是开枪，是找一个没人看见的地方安静地换完这一梭。',
    image: 'image/RELOAD.svg',
    core: { action: 'rush', comm: 'mute', mindset: 'sweat', role: 'core' }
  },
  {
    code: 'CAMPER',
    cn: '蹲点老六',
    genre: 'FPS',
    intro: '不露头，只等你路过。',
    desc: '你相信最好的枪法是让别人先动。蹲点、架枪、卡墙角，一局游戏下来可能就露了三次头，但每次都有人被送走。你不需要理解什么叫主动，你只需要一个视野好、隐蔽性强的完美角落。',
    image: 'image/CAMPER.svg',
    core: { action: 'hold', comm: 'mic', mindset: 'sweat', role: 'core' }
  },
  {
    code: 'MEDKIT',
    cn: '无声奶妈',
    genre: 'FPS',
    intro: '不聊天，只给你续命。',
    desc: '你是队伍里最没有存在感、但最离不开的人。不抢人头，不抢资源，队友残血时你永远在正确的位置递上治疗。没人会感谢你，但你要是掉线了，全队立刻开始怀念你。',
    image: 'image/MEDKIT.svg',
    core: { action: 'hold', comm: 'mute', mindset: 'sweat', role: 'support' }
  },
  {
    code: 'PING',
    cn: '泉水指挥官',
    genre: 'MOBA',
    intro: '这波听我指挥，然后团灭。',
    desc: '你有一张停不下来的嘴和一腔指挥的激情。地图上的每一个问号、每一个撤退信号都出自你的手。可惜你的战术永远领先版本，队友永远落后一拍。你负责决策，队友负责背锅。',
    image: 'image/PING.svg',
    core: { action: 'rush', comm: 'mic', mindset: 'sweat', role: 'support' }
  },
  {
    code: 'WARD',
    cn: '插眼工具人',
    genre: 'MOBA',
    intro: '不说话，只负责点亮地图。',
    desc: '你是队伍里最沉默的地图灯光师。别人打架，你在插眼；别人推塔，你还在插眼。全场最亮的地方不一定是你，但你让整片地图不再那么黑。你相信视野就是生命，尤其相信自己的命。',
    image: 'image/WARD.svg',
    core: { action: 'rush', comm: 'mute', mindset: 'sweat', role: 'support' }
  },
  {
    code: 'TOWER',
    cn: '防御塔',
    genre: 'MOBA',
    intro: '嘴在输出，人在塔下。',
    desc: '你的输出一半靠技能，一半靠语言。站位极其稳健，基本和防御塔焊在一起，但嘴已经冲进了敌方泉水。真正的伤害不一定要击杀，也可以是让对面心态爆炸。',
    image: 'image/TOWER.svg',
    core: { action: 'hold', comm: 'mic', mindset: 'sweat', role: 'support' }
  },
  {
    code: 'FARM',
    cn: '兵线',
    genre: 'MOBA',
    intro: '不刷满六神不出山。',
    desc: '你打游戏像在经营农场，发育才是唯一主线。队友打团，你在刷；家被推了，你在刷。你相信经济决定一切，只有装备毕业，你才愿意从野区走出来参加一次团战。那时游戏可能已经结束了。',
    image: 'image/FARM.svg',
    core: { action: 'hold', comm: 'mute', mindset: 'sweat', role: 'core' }
  },
  {
    code: 'GEAR',
    cn: '满配玩家',
    genre: 'Roguelike',
    intro: '装备没毕业，这局不算数。',
    desc: '你玩游戏先看词条，再看面板。一把武器能研究十分钟，一个装备没毕业就浑身难受。别人在享受战斗，你在享受配装。你的快乐不是胜利，是角色属性条被拉满的那一刻。',
    image: 'image/GEAR.svg',
    core: { action: 'rush', comm: 'mic', mindset: 'chill', role: 'core' }
  },
  {
    code: 'ACHIEVEMENT',
    cn: '隐藏成就',
    genre: 'Roguelike',
    intro: '打得好不如打得抽象。',
    desc: '你对输赢没什么执念，只对稀有成就和离谱操作有兴趣。主线可以不做，隐藏彩蛋必须集齐；正常通关没意思，用最怪的方式通关才叫通关。你是游戏世界的非主流学者。',
    image: 'image/ACHIEVEMENT.svg',
    core: { action: 'rush', comm: 'mute', mindset: 'chill', role: 'core' }
  },
  {
    code: 'SAVE',
    cn: '通关存档',
    genre: 'Roguelike',
    intro: '我打游戏是来收集结局的。',
    desc: '你是单机存档收藏家，喜欢把每条支线、每个结局都打出来。游戏对你来说不是竞技，是一本可以反复翻阅的小说。你可以为了一个隐藏剧情重开十次，也可以在结局前存档退出，安心睡觉。',
    image: 'image/SAVE.svg',
    core: { action: 'hold', comm: 'mute', mindset: 'chill', role: 'core' }
  },
  {
    code: 'AUTOSAVE',
    cn: '自动存档',
    genre: 'Roguelike',
    intro: '什么时候下线都行，反正已经存了。',
    desc: '你最大的安全感来自右下角那行“已保存”。你可以随时退出、随时开溜，因为你知道进度不会背叛你。你不追求高难度，只追求一段不折腾、不焦虑的稳定游戏体验。',
    image: 'image/AUTOSAVE.svg',
    core: { action: 'hold', comm: 'mute', mindset: 'chill', role: 'support' }
  },
  {
    code: 'RESPAWN',
    cn: '复活点气氛组',
    genre: 'MMO',
    intro: '死了也要在频道里把氛围拉满。',
    desc: '你可能是队伍里第一个倒下的人，但一定是复活点最活跃的人。你负责在频道里聊天、报点、发战况、制造气氛，偶尔复活后冲出去再倒一次。胜率不重要，热闹才重要。',
    image: 'image/RESPAWN.svg',
    core: { action: 'rush', comm: 'mic', mindset: 'chill', role: 'support' }
  },
  {
    code: 'GHOST',
    cn: '透明队友',
    genre: 'MMO',
    intro: '从头到尾找不到人。',
    desc: '你在队伍列表里，但谁也感觉不到你的存在。不发言、不报点、不抢戏，关键时刻还常常消失。也许你是在看风景，也许你只是在挂机。队友甚至要确认你有没有掉线。',
    image: 'image/GHOST.svg',
    core: { action: 'rush', comm: 'mute', mindset: 'chill', role: 'support' }
  },
  {
    code: 'TUTORIAL',
    cn: '新手引导',
    genre: 'MMO',
    intro: '谁死教谁，永远热心。',
    desc: '你天生适合当游戏里的新手引导，看到谁不会玩就忍不住教两句。虽然有时候对方根本不想听，但你依然耐心讲解。你让队伍多了个老师，也多了份血压。',
    image: 'image/TUTORIAL.svg',
    core: { action: 'hold', comm: 'mic', mindset: 'chill', role: 'core' }
  },
  {
    code: 'AFK',
    cn: '挂机进度条',
    genre: 'MMO',
    intro: '看似在线，灵魂已离线。',
    desc: '你的身体在电脑前，意识已经飞到了别处。游戏对你来说只是背景音，队友在打架，你在发呆；队友在推塔，你在等下一局。你不是在玩游戏，你只是让游戏开着。',
    image: 'image/AFK.svg',
    core: { action: 'hold', comm: 'mic', mindset: 'chill', role: 'support' }
  }
];

const HIDDEN_TYPE = {
  code: 'ALT-F4',
  cn: '一键退游人',
  genre: '隐藏',
  intro: '操，这局能玩？溜了。',
  desc: '你拥有一种极其果断的退出哲学：烂局不值得投入。别人还在互相问候，你已经回到桌面开始思考人生。你不是菜，也不是摆，你只是对时间的价值有清醒认知。',
  image: 'image/ALT-F4.svg'
};
