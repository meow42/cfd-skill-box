SkillIconMap = {
  "a": {
    "s1": [0, 6], //普通攻击
    "s2": [1, 0], //猛击
    "s3": [11, 18], //制作生命水
    "s4": [0, 0], //守护者召唤
    "s5": [3, 6], //疾跑
    "s6": [2, 6], //飞行
    "s7": [4, 6], //飞行专精
    "s8": [1, 6], //能量吸收
    "s9": [10, 1], //解除异常
    "s10": [11, 1], //地心束缚
    "s11": [5, 7], //破釜沉舟
    "s49": [10, 18], //后撤步

    "s12": [6, 0], //重击
    "s13": [9, 0], //冲锋
    "s14": [2, 0], //碎击
    "s15": [7, 0], //双重重击
    "s16": [3, 0], //吸血碎击
    "s17": [5, 6], //雷霆重击
    "s18": [4, 0], //旋风一击
    "s19": [5, 0], //雷霆一击
    "s20": [0, 7], //狂沙风暴
    "s21": [1, 7], //战神之怒
    "s22": [4, 1], //近战武器专精
    "s23": [6, 1], //防御专精
    "s24": [7, 1], //盾牌专精
    "s25": [6, 6], //超核子形态
    "s26": [8, 0], //力量祝福
    "s27": [10, 0], //重伤
    "s28": [3, 1], //重击精通
    "s29": [7, 6], //精神修养
    "s50": [7, 18], //剑气一击

    "s30": [13, 0], //野猫枪弹
    "s31": [2, 7], //青蛙大炮
    "s32": [14, 0], //黑熊枪弹
    "s33": [3, 7], //猎鹰枪弹
    "s34": [5, 9], //飞火流星
    "s35": [8, 6], //美杜莎枪弹
    "s36": [11, 0], //穿刺射击
    "s37": [12, 0], //多重射击
    "s38": [4, 7], //核弹
    "s39": [0, 13], //空间束
    "s40": [5, 1], //远程武器专精
    "s41": [6, 7], //射击延伸
    "s42": [9, 6], //火力集中
    "s43": [8, 1], //敏捷精通
    "s44": [9, 1], //狩猎技术
    "s45": [7, 7], //魔法抗性
    "s46": [0, 1], //挫志
    "s47": [1, 1], //狂暴
    "s48": [2, 1], //疾风祝福
    "s51": [8, 18], //疯狂机关枪

    "s52": [0, 17], //粉碎
    "s53": [2, 17], //双重粉碎
    "s54": [7, 17], //三重粉碎
    "s55": [11, 17], //强力粉碎
    "s56": [15, 17], //粉碎震荡
    "s57": [3, 17], //剑与盾
    "s58": [8, 17], //盾光闪
    "s59": [12, 17], //剑气闪
    "s60": [16, 17], //暴雨
    "s61": [6, 17], //反击
    "s62": [1, 17], //抗性增强
    "s63": [4, 17], //盾牌强化
    "s64": [9, 17], //随机抗性
    "s65": [13, 17], //烟雾弹
    "s66": [17, 17], //完全防御
    "s67": [5, 17], //充能
    "s68": [10, 17], //能量护盾
    "s69": [14, 17], //能量场
    "s70": [9, 18], //咆哮之盾

    "w1": [0, 10], //近战集中
    "w2": [1, 10], //武器杀手
    "w3": [4, 10], //双手武器专精
    "w4": [5, 10], //武器破坏者
    "w5": [7, 13], //猛击强化
    "w6": [8, 13], //眩晕一击
    "w7": [6, 10], //单手武器专精
    "w8": [7, 10], //反击
    //"w9": "00043", //猛击强化
    "w10": [9, 13], //投掷盾牌
    "w11": [2, 10], //远程集中
    "w12": [3, 10], //激光束
    "w13": [8, 10], //速度精通
    "w14": [9, 10], //速射
    "w15": [10, 13], //射击强化
    "w16": [11, 13], //爆头
    "w17": [10 , 10], //狩猎精通
    "w18": [11, 10], //埋地雷
    //"w19": "00046", //射击强化
    "w20": [0, 14], //加农大炮
  },
  "s": {},
  "t": {}
}

class SkillData {
  id = ""; // 字符串ID
  race = ""; // 种族 a s t
  name = ""; // 名称
  kind = ""; // 类型 A=主动 AG=角色主动 AP=守护者主动 P=被动
  text = ""; // 介绍文本
  needt = ""; // 需求的武器装备描述文本
  n = []; // 每个等级的介绍文本
  needs = ""; // 前置技能ID
  needl = 0; // 需求前置技能等级
  init = 0; // 初始点数
  cost = 0; // 当前点数加值
  max1 = 0; // 点数上限
  max2 = 0;  // 觉醒后的上限
  wup = false; // 是否觉醒
  need = null; // 前置技能对象 SkillData
  nexts = []; // 后置技能对象 SkillData
  type = -1; // 种类 common skill1 skill2 skill3 wakeup
  getLeftPoint = () => { return 233; }; // 用于接收总剩余点数方法
  constructor(payload) {
    Object.assign(this, payload);
  }
  get max() {
    return this.wup ? this.max2 : this.max1;
  }
  get lv() {
    return this.init + this.cost;
  }
  get isMax() {
    return this.lv >= this.max;
  }
  get kindState() {
    let result = '';
    let char = this.kind.charAt(0);
    if (char === 'A') result = '主动技能';
    else if (char === 'P') result = '被动技能';
    return result;
  }
  get kindTarget() {
    let result = '';
    let char = this.kind.charAt(1);
    if (char === 'G') result = '需要乘坐守护者';
    else if (char === 'P') result = '需要冒险者';
    return result;
  }
  /** 获取等级数组中当前等级的数据 */
  getN(key) {
    let _n = this.n[Math.max(this.lv - 1, 0)];
    if (!key) return _n;
    if (!_n) return null;
    return _n[key];
  }
  /** 获取技能是否激活的状态 */
  isActive(pc_level) {
    pc_level = pc_level || 4;
    let flag = true;
    // 判断角色等级
    if (pc_level && this.n[0]) {
      if (pc_level < this.n[0]['cl']) flag = false;
    }
    // 判断前置技能的等级
    if (this.need) {
      if (this.need.lv < this.needl) flag = false;
    }
    return flag;
  }
  /** 获取图片URL（废弃） */
  getImgURL(isEnable = true) {
    if (!this.race || !this.id) return "";
    return `img/${this.race}/${this.id}_${isEnable ? 'e' : 'd'}.gif`;
  }
  /** 获取技能图标位置的 style */
  getIconStyle() {
    let x = 32;
    let y = 32;
    if (SkillIconMap[this.race] && typeof SkillIconMap[this.race][this.id] === "object") {
      let loc = SkillIconMap[this.race][this.id];
      x = -33 * (loc[0] || 0) - 1;
      y = -33 * (loc[1] || 0) - 1;
    }
    let styleObject = { objectPosition: `${x}px ${y}px` }
    //console.log(styleObject)
    return styleObject
  }
  /** 点数运算 */
  add(n) {
    // 判断是否超出可加点上限
    let _cost = n > 0 ? Math.min(n, this.getLeftPoint()) : n;
    _cost += this.cost;
    if (_cost < 0 || _cost > this.max - this.init) return;
    this.cost = _cost;
    this.setNextsCost();
  }
  toMax() {
    this.add(this.max - this.lv);
    //this.cost = this.max - this.init;
  }
  toMin() {
    this.add(-(this.cost));
    //this.cost = 0;
    //this.setNextsCost();
  }
  /** 处理可能存在的后置技能归零事务 */
  setNextsCost() {
    for (let i = 0; i < this.nexts.length; i++) {
      if (this.lv < this.nexts[i].needl) this.nexts[i].toMin();
    }
  }
  /** 解析并载入原始数据 */
  parse(c) {
    this.id = c[0].substring(1);
    this.name = c[1];
    this.init = c[2] - 0;
    this.max1 = c[3] - 0;
    this.max2 = c[4] - 0;
    this.kind = c[5];
    this.needs = c[6];
    this.needl = c[7] - 0;
    this.needt = c[8];
    this.text = c[9];
  }
  /** 解析并添加每个等级的描述数据 */
  addLevelText(c) {
    let a = {};
    a.sl = c[0] - 0; // 技能等级
    a.cl = c[1] - 0; // 必要等级
    a.ct = c[2]; // 咏唱时间
    a.dt = c[3]; // 冷却时间
    a.rg = c[4] - 0; // 射程距離
    a.nt = c[5]; // 文字描述
    this.n.push(a);
  }
}

var app = new Vue({
  el: '#app',
  data: {
    loaded: false,
    disp_popup: true, // 是否显示技能详细介绍
    popupData: null, // 弹出内容数据
    popupOffset: { top: 0, left: 0 }, // 弹出框偏移量
    race: 'a', // a s t
    raceName: { a: '人类', s: '龙人', t: '精灵' },
    g_wakeup_level: [0, 10, 30, 50, 70, 90, 110],
    sim_pc_level: 55, // 选取的等级
    sim_pc_wakeup: '0', // 选取的觉醒状态
    sim_have_point: 0, // 技能点总数
    activeTab: 1, // 当前选中的tab下标
    skillTab: [ // 技能分类tab数据
      { a: '共通', s: '共通', t: '共通', point: 0, mouseover: false },
      { a: '攻击', s: '火焰', t: '刺杀', point: 0, mouseover: false },
      { a: '射击', s: '冰霜', t: '诅咒', point: 0, mouseover: false },
      { a: '防御', s: '光电', t: '忍者', point: 0, mouseover: false },
      { a: '无', s: '自然', t: '无', point: 0, mouseover: false },
      { a: '觉醒', s: '觉醒', t: '觉醒', mouseover: false }
    ],
    skills: [], // 技能数据
    wakeupList: [], // 觉醒技能列表
    wakeups: [ // 觉醒数据
      { id: '0', label: '未觉醒', skill: '', a: '', s: '', t: '' },
      { id: '1', label: '1次觉醒', skill: 'w1,w2', a: '近战机体', s: '元素', t: '刺客' },
      { id: '11', label: '┣2次觉醒', skill: 'w3,w4', a: '双手机体', s: '火法', t: '刀刺' },
      { id: '111', label: '┃┗3次觉醒', skill: 'w5,w6', a: '战争机体', s: '火法', t: '刀刺' },
      { id: '12', label: '┗2次觉醒', skill: 'w7,w8', a: '单手机体', s: '冰法', t: '爪刺' },
      { id: '121', label: '\xa0\xa0┗3次觉醒', skill: 'w5,w10', a: '防御机体', s: '冰法', t: '爪刺' },
      { id: '2', label: '1次觉醒', skill: 'w11,w12', a: '射击机体', s: '光法', t: '毒刺' },
      { id: '21', label: '┣2次觉醒', skill: 'w13,w14', a: '迅捷机体', s: '光法', t: '召唤' },
      { id: '211', label: '┃┗3次觉醒', skill: 'w15,w16', a: '狙击机体', s: '光法', t: '召唤' },
      { id: '22', label: '┗2次觉醒', skill: 'w17,w18', a: '爆破机体', s: '牧师', t: '变身' },
      { id: '221', label: '\xa0\xa0┗3次觉醒', skill: 'w15,w20', a: '大炮武器', s: '牧师', t: '变身' },
    ],
  },
  computed: {
  },
  components: {
    'arrow': httpVueLoader('js/SkillArrow.vue'),
    'skill': httpVueLoader('js/SkillBox.vue'),
    'popup': httpVueLoader('js/SkillPopup.vue'),
  },
  created() { },
  mounted() {
    this.resetPointParam();
    this.loadData();
    console.log('app.mounted() ', this);
  },
  watch: {
    // 选择的等级低于当前时，重置加点
    sim_pc_level: function (newValue, oldValue) {
      if (newValue < oldValue) this.resetSkillCost();
      this.resetPointParam();
    }
  },
  methods: {
    /** 变更种族 */
    changeRace(race) {
      //if (race) this.race = race;
      this.activeTab = 1;
      this.sim_pc_wakeup = '0';
      this.loadData();
      this.resetPointParam();
    },
    /** 重置总点数 */
    resetPointParam(level) {
      if (level) this.sim_pc_level = level;
      this.sim_have_point = (this.sim_pc_level - 3) * 2;
      if (this.sim_have_point < 0) {
        this.sim_have_point = 0;
      }
      // 5的整倍数额外获得5point
      this.sim_have_point += Math.floor(this.sim_pc_level / 5) * 5;
    },
    /** 重置技能加点 */
    resetSkillCost() {
      this.skills.map(item => {
        item.cost = 0;
      });
    },
    /** 载入数据 */
    loadData(url) {
      if (!url) {
        url = `data/${this.race}.uf8`;
      }
      let that = this;
      that.loaded = false;
      axios.get(url)
        .then((res) => {
          //console.log('loadData()', url, res.data);
          that.skills = that.parseData(res.data);
          //console.log('loadData()', url, that.skills);
        })
        .catch((err) => {
          console.log('loadData() - Failed', url, err);
        })
        .then(() => {
          that.loaded = true;
        });
    },
    /** 解析数据 */
    parseData(text_data) {
      let t = text_data.split('\n');
      let skills = [];
      let skillObj = {};
      let skillMap = new Map();
      let type = -1; // 标记技能大类别序号
      for (let i = 0; i < t.length; i++) {
        //if ((t[i] === '') || (t[i].charAt(0) === '#')) continue; // 跳过空行和注释
        //if ((t[i].charAt(0) === '!')) continue; //!开头的行说明是新的种类翻页
        //if ((t[i].charAt(0) === '.')) break; // 结尾符号
        let mark = t[i].charAt(0);
        if (['', '#', '.'].includes(mark)) continue;
        if (mark === '!') {
          type = t[i].includes('!覚醒') ? 4 : type + 1;
          continue;
        }
        // 处理数据行
        let c = t[i].split(',');
        if (['*', '$'].includes(mark)) {
          let data = new SkillData();
          data.parse(c);
          data.race = this.race;
          data.type = type;
          data.getLeftPoint = this.getLeftPoint;
          skills.push(data);
          skillObj = data;
          skillMap.set(data.id, data);
        }
        else { // 等级提升数据，要求必须紧跟在技能数据行之后
          skillObj.addLevelText(c);
        }
      }
      // 关联上下级对象
      skills.map(item => {
        let _need = skillMap.get(item.needs) || null;
        if (!_need) return;
        item.need = _need;
        _need.nexts.push(item);
      });
      //console.log('parseData()', skills);
      return skills;
    },
    /** TODO: 读取构建参数 */
    loadBuildCode() {
      return;
      let build_code = window.location.href.split("?b=");
      if (build_code.length < 2) return;
      let code = build_code[1];
      let res = loadBuildCode(code);
      if (res === false) {
        //putErrorMessage('ビルドコードが正しくありません。読み込みませんでした。');
        this.resetPointParam(4);
        this.resetWakeupParam('00');
      }
    },
    /** 设置弹出层 */
    setPopup(data, skill) {
      //console.log('setPopup()', id, e);
      if (!data) {
        this.popupData = null;
        return;
      }
      this.popupData = data;
      // 设置弹出位置
      let area = document.getElementById('middle2').getBoundingClientRect();
      let popup = document.getElementById('popup'); // width: 256px
      let popupWidth = 256;
      let _left = area.width / 2;
      let _top = skill.top - 42;
      if ((skill.left + skill.width + popupWidth) < (area.left + area.width)) {
        _left = skill.left + skill.width + 3;
      } else {
        _left = skill.left - popupWidth - 12;
      }
      popup.style.top = _top + 'px';
      popup.style.left = _left + 'px';
      //console.log(area, skill, _top, _left);      
    },
    /** 获取tab背景图片名称 */
    getTabBgUrl(index) {
      let suffix = 'd';
      if (this.activeTab === index) suffix = 'e';
      else if (this.skillTab[index]['mouseover']) suffix = 'o';
      return `img/${this.race}/t${index}_${suffix}.gif`;
    },
    /** 获得技能数据 */
    skill(id) {
      return this.skills.filter(item => {
        return item.id === id;
      })[0] || new SkillData();
    },
    /** 获得觉醒视图的数据 */
    getWakeupList(id) {
      let _id = id || this.sim_pc_wakeup;
      let _data = null;
      let result = [];
      // 压入存在的数据
      while (_id.length > 0 && _id !== '0') {
        _data = this.wakeups.filter(item => { return item.id === _id; })[0];
        _id = _data.id.substring(0, _data.id.length - 1) || '';
        //console.log(_data, _id);
        if (_data.id.length < 1) continue;
        result.unshift(_data);
        _data.skills = _data.skill.split(',');
        _data.skill1 = this.skill(_data.skill.split(',')[0]);
        _data.skill2 = this.skill(_data.skill.split(',')[1]);
      }
      // 补齐固定长度
      while (result.length < 6) {
        result.push({});
      }
      //console.log('getWakeupList()', result);
      return result;
    },
    /** 获取消耗总点数 */
    getUsedPoint() {
      let result = 0;
      this.skills.map(item => {
        if (item.type === 'wup') return;
        result += item.cost;
      });
      return result;
    },
    /** 获取剩余点数 */
    getLeftPoint() {
      return this.sim_have_point - this.getUsedPoint();
    },
    /** 获得某类别技能使用点数 */
    getTypePoint(type) {
      let result = 0;
      this.skills.map(item => {
        if (item.type === type) result += item.cost;
      });
      return result;
    },
    /** 觉醒选取 */
    handelWakeChange(e) {
      this.wakeupList = this.getWakeupList();
      //console.log('handelWakeChange()', this.sim_pc_wakeup);
    },
    /** 技能点重置 */
    handelPointReset(e) {
      console.log('handelPointReset()', e);
      if (!this.loaded) return;
      this.resetSkillCost();
    },
    /** 技能Tab点击 */
    handelTabClick(index) {
      this.activeTab = index;
      if (this.activeTab === 5) this.wakeupList = this.getWakeupList();
    },
  }
})