const QUESTIONS = [
  {
    id: 'q1',
    kind: 'core',
    dim: 'action',
    text: '刚开局，你的第一反应是？',
    options: [
      { label: '不等队友，先冲为敬', pole: 'rush' },
      { label: '先观察，稳一点', pole: 'hold' }
    ]
  },
  {
    id: 'q2',
    kind: 'core',
    dim: 'action',
    text: '对面只剩一个人，而你状态一般，你会？',
    options: [
      { label: '上去拼了，万一反杀', pole: 'rush' },
      { label: '先撤，活着才有输出', pole: 'hold' }
    ]
  },
  {
    id: 'q3',
    kind: 'core',
    dim: 'action',
    text: '团战或交火时，你的位置通常在哪？',
    options: [
      { label: '最前面，先手开团', pole: 'rush' },
      { label: '后排架枪或蹲点', pole: 'hold' }
    ]
  },
  {
    id: 'q4',
    kind: 'core',
    dim: 'action',
    text: '地图上突然出现一个机会，你通常？',
    options: [
      { label: '看到就打，机会稍纵即逝', pole: 'rush' },
      { label: '等队友到位再动手', pole: 'hold' }
    ]
  },
  {
    id: 'q5',
    kind: 'core',
    dim: 'action',
    text: '你最喜欢的战斗方式是？',
    options: [
      { label: '冲进去把水搅浑', pole: 'rush' },
      { label: '慢慢把对方耗死', pole: 'hold' }
    ]
  },
  {
    id: 'q6',
    kind: 'core',
    dim: 'action',
    text: '逆风局你会选择？',
    options: [
      { label: '主动找架打，强行破局', pole: 'rush' },
      { label: '避战发育，等翻盘点', pole: 'hold' }
    ]
  },
  {
    id: 'q7',
    kind: 'core',
    dim: 'comm',
    text: '进游戏后的第一件事是？',
    options: [
      { label: '开麦和队友打招呼', pole: 'mic' },
      { label: '闭麦，先听再说', pole: 'mute' }
    ]
  },
  {
    id: 'q8',
    kind: 'core',
    dim: 'comm',
    text: '队友操作抽象时，你会？',
    options: [
      { label: '直接开麦指出', pole: 'mic' },
      { label: '心里骂，嘴上不说', pole: 'mute' }
    ]
  },
  {
    id: 'q9',
    kind: 'core',
    dim: 'comm',
    text: '需要报点时，你的习惯是？',
    options: [
      { label: '主动开麦，报得比导航还细', pole: 'mic' },
      { label: '打字，能不打就不打', pole: 'mute' }
    ]
  },
  {
    id: 'q10',
    kind: 'core',
    dim: 'comm',
    text: '语音频道里，你通常是？',
    options: [
      { label: '那个话最多的', pole: 'mic' },
      { label: '那个从头到尾没声音的', pole: 'mute' }
    ]
  },
  {
    id: 'q11',
    kind: 'core',
    dim: 'comm',
    text: '队友喊你开麦，你会？',
    options: [
      { label: '马上开，聊起来', pole: 'mic' },
      { label: '装没看见', pole: 'mute' }
    ]
  },
  {
    id: 'q12',
    kind: 'core',
    dim: 'comm',
    text: '打赢一波后，你通常？',
    options: [
      { label: '开麦吹一波', pole: 'mic' },
      { label: '默默准备下一波', pole: 'mute' }
    ]
  },
  {
    id: 'q13',
    kind: 'core',
    dim: 'mindset',
    text: '连跪之后，你通常？',
    options: [
      { label: '越输越想打，非要赢回来', pole: 'sweat' },
      { label: '输了就输了，快乐最重要', pole: 'chill' }
    ]
  },
  {
    id: 'q14',
    kind: 'core',
    dim: 'mindset',
    text: '这局能赢但过程很折磨，你会？',
    options: [
      { label: '只要能上分，折磨也行', pole: 'sweat' },
      { label: '太累就算了，换个游戏', pole: 'chill' }
    ]
  },
  {
    id: 'q15',
    kind: 'core',
    dim: 'mindset',
    text: '看到段位或排行榜，你的反应是？',
    options: [
      { label: '我必须往上爬', pole: 'sweat' },
      { label: '这数字关我屁事', pole: 'chill' }
    ]
  },
  {
    id: 'q16',
    kind: 'core',
    dim: 'mindset',
    text: '队友拖后腿时，你更在意？',
    options: [
      { label: '会不会影响我上分', pole: 'sweat' },
      { label: '大家开心就好', pole: 'chill' }
    ]
  },
  {
    id: 'q17',
    kind: 'core',
    dim: 'mindset',
    text: '你打游戏的目标是？',
    options: [
      { label: '赢，而且要赢得漂亮', pole: 'sweat' },
      { label: '开心，输赢无所谓', pole: 'chill' }
    ]
  },
  {
    id: 'q18',
    kind: 'core',
    dim: 'mindset',
    text: '最后一局输了，你会？',
    options: [
      { label: '再开一把，不赢不睡', pole: 'sweat' },
      { label: '正好，睡了', pole: 'chill' }
    ]
  },
  {
    id: 'q19',
    kind: 'core',
    dim: 'role',
    text: '队伍缺输出，你会？',
    options: [
      { label: '我来，资源给我', pole: 'core' },
      { label: '我拿工具人保输出', pole: 'support' }
    ]
  },
  {
    id: 'q20',
    kind: 'core',
    dim: 'role',
    text: '资源有限时，你更倾向？',
    options: [
      { label: '先保证自己发育', pole: 'core' },
      { label: '让给更需要的人', pole: 'support' }
    ]
  },
  {
    id: 'q21',
    kind: 'core',
    dim: 'role',
    text: '打团时你更喜欢？',
    options: [
      { label: '自己找机会击杀', pole: 'core' },
      { label: '配合队友做脏活', pole: 'support' }
    ]
  },
  {
    id: 'q22',
    kind: 'core',
    dim: 'role',
    text: '选角色时你更愿意？',
    options: [
      { label: '拿能秀的', pole: 'core' },
      { label: '拿队伍需要的', pole: 'support' }
    ]
  },
  {
    id: 'q23',
    kind: 'core',
    dim: 'role',
    text: '你享受游戏的哪个部分？',
    options: [
      { label: '自己 carry 全场', pole: 'core' },
      { label: '让队友舒服', pole: 'support' }
    ]
  },
  {
    id: 'q24',
    kind: 'core',
    dim: 'role',
    text: '如果必须二选一，你要？',
    options: [
      { label: '关键人头', pole: 'core' },
      { label: '关键保护', pole: 'support' }
    ]
  },
  {
    id: 'e1',
    kind: 'extra',
    dim: 'resource',
    text: '装备或资源刚够，你会？',
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
    text: '刷资源时你的态度是？',
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
    text: '你更喜欢怎么玩？',
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
    text: '队友需要帮助，你会？',
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
    text: '面对高风险高回报的操作，你通常？',
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
    text: '逆风局你的心态是？',
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
