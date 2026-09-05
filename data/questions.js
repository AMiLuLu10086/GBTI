const QUESTIONS = [
  {
    id: 'q1',
    kind: 'core',
    dim: 'action',
    text: '刚开局，地图和队友都还是一片陌生，你脑子里冒出来的第一个念头通常是什么？',
    options: [
      { label: '不等队友，先冲为敬', pole: 'rush' },
      { label: '先观察，稳一点', pole: 'hold' }
    ]
  },
  {
    id: 'q2',
    kind: 'core',
    dim: 'action',
    text: '对面只剩一个人，而你自己状态一般、技能可能也在冷却，这种时候你更可能怎么处理？',
    options: [
      { label: '上去拼了，万一反杀', pole: 'rush' },
      { label: '先撤，活着才有输出', pole: 'hold' }
    ]
  },
  {
    id: 'q3',
    kind: 'core',
    dim: 'action',
    text: '不管是团战还是交火，你大多数时候会让自己待在什么位置，是前点还是后方？',
    options: [
      { label: '最前面，先手开团', pole: 'rush' },
      { label: '后排架枪或蹲点', pole: 'hold' }
    ]
  },
  {
    id: 'q4',
    kind: 'core',
    dim: 'action',
    text: '地图上突然冒出一个看起来能打的机会，但队友还没到位，你通常会选择怎么处理？',
    options: [
      { label: '看到就打，机会稍纵即逝', pole: 'rush' },
      { label: '等队友到位再动手', pole: 'hold' }
    ]
  },
  {
    id: 'q5',
    kind: 'core',
    dim: 'action',
    text: '抛开具体英雄和武器，你个人最喜欢、也最顺手的一种战斗方式是什么？',
    options: [
      { label: '冲进去把水搅浑', pole: 'rush' },
      { label: '慢慢把对方耗死', pole: 'hold' }
    ]
  },
  {
    id: 'q6',
    kind: 'core',
    dim: 'action',
    text: '当局面明显逆风、资源和节奏都不在你这边的时候，你更倾向于采取哪种应对方式？',
    options: [
      { label: '主动找架打，强行破局', pole: 'rush' },
      { label: '避战发育，等翻盘点', pole: 'hold' }
    ]
  },
  {
    id: 'q7',
    kind: 'core',
    dim: 'comm',
    text: '每次刚刚进入游戏，在正式开打之前，你通常会先做哪一件事来确认状态？',
    options: [
      { label: '开麦和队友打招呼', pole: 'mic' },
      { label: '闭麦，先听再说', pole: 'mute' }
    ]
  },
  {
    id: 'q8',
    kind: 'core',
    dim: 'comm',
    text: '队友突然操作得很抽象，像是有自己的想法，这个时候你一般会怎么做？',
    options: [
      { label: '直接开麦指出', pole: 'mic' },
      { label: '心里骂，嘴上不说', pole: 'mute' }
    ]
  },
  {
    id: 'q9',
    kind: 'core',
    dim: 'comm',
    text: '当团队需要有人报点、给信息、提醒位置的时候，你通常更习惯用哪种方式？',
    options: [
      { label: '主动开麦，报得比导航还细', pole: 'mic' },
      { label: '打字，能不打就不打', pole: 'mute' }
    ]
  },
  {
    id: 'q10',
    kind: 'core',
    dim: 'comm',
    text: '回想一下语音频道里的你，绝大多数时候你更像是哪一种存在？',
    options: [
      { label: '那个话最多的', pole: 'mic' },
      { label: '那个从头到尾没声音的', pole: 'mute' }
    ]
  },
  {
    id: 'q11',
    kind: 'core',
    dim: 'comm',
    text: '如果队友主动喊你开麦交流，你听到之后的第一反应更接近哪一种？',
    options: [
      { label: '马上开，聊起来', pole: 'mic' },
      { label: '装没看见', pole: 'mute' }
    ]
  },
  {
    id: 'q12',
    kind: 'core',
    dim: 'comm',
    text: '一波团战或交火打赢之后，你通常会把注意力放在哪件事上？',
    options: [
      { label: '开麦吹一波', pole: 'mic' },
      { label: '默默准备下一波', pole: 'mute' }
    ]
  },
  {
    id: 'q13',
    kind: 'core',
    dim: 'mindset',
    text: '连续输了好几局之后，你那种停不下来的感觉通常会怎么发作？',
    options: [
      { label: '越输越想打，非要赢回来', pole: 'sweat' },
      { label: '输了就输了，快乐最重要', pole: 'chill' }
    ]
  },
  {
    id: 'q14',
    kind: 'core',
    dim: 'mindset',
    text: '如果这局明明有机会赢，但整个过程又臭又长、让人非常难受，你会怎么选？',
    options: [
      { label: '只要能上分，折磨也行', pole: 'sweat' },
      { label: '太累就算了，换个游戏', pole: 'chill' }
    ]
  },
  {
    id: 'q15',
    kind: 'core',
    dim: 'mindset',
    text: '当你看到段位、积分或者排行榜上的数字时，你的内心活动更接近哪一种？',
    options: [
      { label: '我必须往上爬', pole: 'sweat' },
      { label: '这数字关我屁事', pole: 'chill' }
    ]
  },
  {
    id: 'q16',
    kind: 'core',
    dim: 'mindset',
    text: '队友明显在拖后腿，影响到了整局节奏，你这时候最在意的是哪一件事？',
    options: [
      { label: '会不会影响我上分', pole: 'sweat' },
      { label: '大家开心就好', pole: 'chill' }
    ]
  },
  {
    id: 'q17',
    kind: 'core',
    dim: 'mindset',
    text: '如果让你总结自己打游戏最根本的目标，下面哪一种说法最接近你的真实想法？',
    options: [
      { label: '赢，而且要赢得漂亮', pole: 'sweat' },
      { label: '开心，输赢无所谓', pole: 'chill' }
    ]
  },
  {
    id: 'q18',
    kind: 'core',
    dim: 'mindset',
    text: '已经是今晚的最后一局了，结果还是输了，你接下来最可能怎么做？',
    options: [
      { label: '再开一把，不赢不睡', pole: 'sweat' },
      { label: '正好，睡了', pole: 'chill' }
    ]
  },
  {
    id: 'q19',
    kind: 'core',
    dim: 'role',
    text: '发现队伍里缺少一个能站出来打输出的人，你通常更愿意怎么补这个位置？',
    options: [
      { label: '我来，资源给我', pole: 'core' },
      { label: '我拿工具人保输出', pole: 'support' }
    ]
  },
  {
    id: 'q20',
    kind: 'core',
    dim: 'role',
    text: '在资源本来就不太够、大家都要分一点的情况下，你会更倾向于怎么分配？',
    options: [
      { label: '先保证自己发育', pole: 'core' },
      { label: '让给更需要的人', pole: 'support' }
    ]
  },
  {
    id: 'q21',
    kind: 'core',
    dim: 'role',
    text: '真正开始打团的时候，你内心更享受哪一种参与方式和存在感？',
    options: [
      { label: '自己找机会击杀', pole: 'core' },
      { label: '配合队友做脏活', pole: 'support' }
    ]
  },
  {
    id: 'q22',
    kind: 'core',
    dim: 'role',
    text: '到了选角色或者选定位的环节，你往往会更愿意做出哪一种选择？',
    options: [
      { label: '拿能秀的', pole: 'core' },
      { label: '拿队伍需要的', pole: 'support' }
    ]
  },
  {
    id: 'q23',
    kind: 'core',
    dim: 'role',
    text: '如果必须指出自己最享受游戏里的哪个部分，你会更认同下面哪一种？',
    options: [
      { label: '自己 carry 全场', pole: 'core' },
      { label: '让队友舒服', pole: 'support' }
    ]
  },
  {
    id: 'q24',
    kind: 'core',
    dim: 'role',
    text: '在“关键人头”和“关键保护”之间只能二选一的时候，你会更想拿到哪一个？',
    options: [
      { label: '关键人头', pole: 'core' },
      { label: '关键保护', pole: 'support' }
    ]
  },
  {
    id: 'e1',
    kind: 'extra',
    dim: 'resource',
    text: '当一件装备或者一份资源刚好出现，而你和队友都盯着它，你会怎么处理？',
    options: [
      { label: '让给队友', value: 1 },
      { label: '看情况', value: 2 },
      { label: '自己先拿', value: 3 }
    ]
  },
  {
    id: 'e2',
    kind: 'extra',
    dim: 'resource',
    text: '聊到刷资源、攒经济这件事，你平时对它的态度更接近哪一种？',
    options: [
      { label: '随缘，够用就行', value: 1 },
      { label: '有空就刷一点', value: 2 },
      { label: '不刷满不舒服', value: 3 }
    ]
  },
  {
    id: 'e3',
    kind: 'extra',
    dim: 'team',
    text: '如果不考虑具体游戏，你平时更愿意一个人玩，还是有人一起玩？',
    options: [
      { label: '自己单机刷', value: 1 },
      { label: '有人一起更好', value: 2 },
      { label: '必须组队开黑', value: 3 }
    ]
  },
  {
    id: 'e4',
    kind: 'extra',
    dim: 'team',
    text: '队友突然需要帮忙、发来求助信号的时候，你通常更可能做出什么反应？',
    options: [
      { label: '别影响我', value: 1 },
      { label: '看情况', value: 2 },
      { label: '马上去帮', value: 3 }
    ]
  },
  {
    id: 'e5',
    kind: 'extra',
    dim: 'risk',
    text: '面对那种风险很大、但一旦成功回报也极其夸张的操作，你通常会怎么选？',
    options: [
      { label: '能躲就躲', value: 1 },
      { label: '偶尔试试', value: 2 },
      { label: '不赌不是人', value: 3 }
    ]
  },
  {
    id: 'e6',
    kind: 'extra',
    dim: 'comeback',
    text: '一局进入逆风、看起来很难翻的时候，你的整体心态更接近下面哪一种？',
    options: [
      { label: '点了吧', value: 1 },
      { label: '随缘打', value: 2 },
      { label: '翻盘才爽', value: 3 }
    ]
  },
  {
    id: 'gate_a',
    kind: 'gate',
    text: '你刚开始一局或一次游戏，结果刚进去就踩到屎一样的体验：出生即死、存档损坏、加载卡住、机制反人类，你的第一反应是？',
    options: [
      { label: '再试一次，说不定是意外', value: 'retry', hidden: false },
      { label: '先去查攻略或翻设置', value: 'help', hidden: false },
      { label: '已经开始想退了', value: 'quit', hidden: true },
      { label: '直接关游戏，换一个', value: 'quit', hidden: true }
    ]
  },
  {
    id: 'gate_b',
    kind: 'gate',
    text: '这次游戏已经让你明显不爽了，接下来你会？',
    options: [
      { label: '忍一忍，先打完', value: 'stay', hidden: false },
      { label: '开修改器或查攻略抢救一下', value: 'save', hidden: false },
      { label: '心里骂一句，但继续玩', value: 'curse', hidden: false },
      { label: '直接退出，删除或卸载，操，不伺候了', value: 'quit', hidden: true }
    ]
  }
];
