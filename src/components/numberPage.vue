<template>
  <div>
    <navHead :locate="584"></navHead>
    <div class="department-container">
      <div class="tabs">
        <button v-for="department in departments" :key="department.id" @click="selectDepartment(department)"
          :class="{ active: department.id === selectedDepartmentId }">
          {{ department.name }}
        </button>
      </div>
      <div class="members-list">
        <div class="back">
          <router-link to="/"><img src="../assets/Go Back.webp" alt="" width="31px" /></router-link>
        </div>
        <div v-if="selectedDepartment" class="member-con">
          <div v-for="member in selectedDepartment.members" :key="member.id" class="member">
            <img :src="member.photo" alt="Member Photo" @click="showMemberInfo(member)" class="photo" />
            <span @click="showMemberInfo(member)">{{ member.name }}</span>
          </div>
        </div>
      </div>
      <MemberInfo class="detial" v-if="showingInfo" :member="infoMember" @close="closeInfo" />
    </div>
  </div>
</template>

<script>
import MemberInfo from "./MemberInfo.vue";
import navHead from "./nav-head.vue";

export default {
  components: {
    MemberInfo,
    navHead,
  },
  data() {
    return {
      departments: [
        // 示例数据，确保photo是有效的URL
        {
          id: 1,
          name: "程序部",
          members: [
            {
              name: "陈祺新",
              photo: require('@/assets/avatar/2023/cxcqx.webp'),
              department: "23级程序部",
              message: "你好",
            },
            {
              name: "孙安琪",
              photo: require('@/assets/avatar/2023/cxsaq.webp'),
              department: "23级程序部",
              message: "∀ε＞0，|me-fw|＜ε",
            },
            {
              name: "彭传喜",
              photo: require('@/assets/avatar/2023/cxpcx.webp'),
              department: "23级程序部",
              message: "逸一时，误一世，忆旧亦疚罢己龄。",
            },
            {
              name: "任程枫",
              photo: require('@/assets/avatar/2023/cxrcf.webp'),
              department: "23级程序部",
              message: "I am iron man",
            },
            {
              name: "    袁  健",
              photo: require('@/assets/avatar/2023/cxyj.webp'),
              department: "23级程序部",
              message: "...",
            },
            {
              name: "李仁杰",
              photo: require('@/assets/avatar/2023/cxlrj.webp'),
              department: "23级程序部",
              message: "技术立身",
            },
            {
              name: "蔺春名",
              photo: require('@/assets/avatar/2023/cxlcm.webp'),
              department: "23级程序部",
              message:
                "It is better to be Socrates dissatisfied than a fool satisfied.",
            },
            {
              name: "路修哲",
              photo: require('@/assets/avatar/2022/luxiuzhe.webp'),
              department: "22级程序部",
              message: '哪有什么身不由己，己不由心，身又怎能由己。'
            },
            {
              name: "方诗颖",
              photo: require('@/assets/avatar/2022/fangshiying.webp'),
              department: "22级程序部",
              message: '吃饭！'
            },
            {
              name: "雷祥宁",
              photo: require('@/assets/avatar/2022/lxn.webp'),
              department: "22级程序部",
              message: '迟早猝死'
            },

            {
              name: "刘襄琪",
              photo: require('@/assets/avatar/2021/cx1.webp'),
              department: "21级程序部",
              message: '阿巴阿巴阿巴'
            },
            {
              name: "康家辉",
              photo: require('@/assets/avatar/2021/cx2.webp'),
              department: "21级程序部",
              message: '人生苦短，我用Python'
            },
            {
              name: "唐玉硕",
              photo: require('@/assets/avatar/2021/cx3.webp'),
              department: "21级程序部",
              message: 'Programming makes heads bald.'
            },
            {
              name: "甘海",
              photo: require('@/assets/avatar/2021/cx4.webp'),
              department: "21级程序部",
              message: '其作始也简，其将毕也必巨'
            },
            {
              name: "黄乃煊",
              photo: require('@/assets/avatar/2021/cx5.webp'),
              department: "21级程序部",
              message: 'Change the world by programmmmmm!'
            },
            {
              name: "刘宇璨",
              photo: require('@/assets/avatar/2021/cx6.webp'),
              department: "21级程序部",
              message: '晚点再摆!'
            },
            {
              name: "孟广樾",
              photo: require('@/assets/avatar/2021/cx7.webp'),
              department: "21级程序部",
              message: '好好学习，天天向上！'
            },
            {
              name: "吴卓衡",
              photo: require('@/assets/avatar/2021/cx8.webp'),
              department: "21级程序部",
              message: 'Bug退散！！！！'
            },
            {
              name: "刘召",
              photo: require('@/assets/avatar/2020/cx1.webp'),
              department: "20级程序部",
              message: '諸隸僧降吽無諸陀摩隸僧缽薩嚤無劫陀無伏所蜜嚤咒寂聞喃缽囉愍寂摩囉喃叻無嚩諸嚩僧諸隸諸訶嚤劫僧無愍尊闍無般無吽即無慧吽祗嚩須無降薩無吶嚤諸斯彌心眾嚤空無嘚心所伏波如阿如'
            },
            {
              name: "姚梦迪",
              photo: require('@/assets/avatar/2020/cx2.webp'),
              department: "20级程序部",
              message: '别垂头丧气，显矮。'
            },
            {
              name: "杨泽晨",
              photo: require('@/assets/avatar/2020/cx3.webp'),
              department: "20级程序部",
              message: '要做人民的先生，先做人民的学生。——毛泽东'
            },
            {
              name: "帅翔宇",
              photo: require('@/assets/avatar/2019/cx1.webp'),
              department: "19级程序部",
              message: '生而不有，为而不恃，长而不宰'
            },
            {
              name: "戴俞成",
              photo: require('@/assets/avatar/2019/cx2.webp'),
              department: "19级程序部",
              message: 'undefined'
            },
            {
              name: "程传奇",
              photo: require('@/assets/avatar/2019/cx3.webp'),
              department: "19级程序部",
              message: '“不必每天早睡早起，但要注意锻炼身体”'
            },
            {
              name: "花如壮",
              photo: require('@/assets/avatar/2019/cx4.webp'),
              department: "19级程序部",
              message: '要么孤独，要么庸俗'
            },
            {
              name: "蔡宇翔",
              photo: require('@/assets/avatar/2018/cx1.webp'),
              department: "18级程序部",
              message: '学计算机不coding，死路一条'
            },
            {
              name: "刘阳",
              photo: require('@/assets/avatar/2018/cx2.webp'),
              department: "18级程序部",
              message: '编(de)程(bug)'
            },
            {
              name: "慈浩艺",
              photo: require('@/assets/avatar/2018/cx3.webp'),
              department: "18级程序部",
              message: 'bug的数量可能与你勤奋程度成正相关。'
            },
            {
              name: "谭坚铭",
              photo: require('@/assets/avatar/2017/cx1.webp'),
              department: "17级程序部",
              message: '既且,且往观乎?'
            },
            {
              name: "陈开拓",
              photo: require('@/assets/avatar/2017/cx2.webp'),
              department: "17级程序部",
              message: '睡觉是第一生产力'
            },

            {
              name: "陈尊龙",
              photo: require('@/assets/avatar/2017/cx4.webp'),
              department: "17级程序部",
              message: '健忘是头秃的前兆——谁说的来着'
            },
            {
              name: "宿天宇",
              photo: require('@/assets/avatar/2016/cx1.webp'),
              department: "16级程序部",
              message: 'No pain, no gain'
            },
            {
              name: "梁颖芳",
              photo: require('@/assets/avatar/2016/cx2.webp'),
              department: "16级程序部",
              message: '给缺氧的那位递个氧气瓶'
            },
            {
              name: "方政",
              photo: require('@/assets/avatar/2016/cx3.webp'),
              department: "16级程序部",
              message: '只有流过血的手指才能弹出世间的绝唱.'
            },
            {
              name: "叶伊凡",
              photo: require('@/assets/avatar/2016/cx4.webp'),
              department: "16级程序部",
              message: '请称赞我，高贵冷艳'
            },

            {
              name: "张钦贤",
              photo: require('@/assets/avatar/2015/cx1.webp'),
              department: "15级程序部",
              message: '我就是我，是颜色不一样的烟火'
            },
            {
              name: "申一鸣",
              photo: require('@/assets/avatar/2014/cx1.webp'),
              department: "14级程序部",
              message: '好代码本身就是最好的文档—Steve McConnell'
            },
            {
              name: "李春林",
              photo: require('@/assets/avatar/2014/cx2.webp'),
              department: "14级程序部",
              message: '过早的优化是罪恶之源。——Donald Knuth'
            },
            {
              name: "王恺鹏",
              photo: require('@/assets/avatar/2014/cx3.webp'),
              department: "14级程序部",
              message: '一切奇怪的现象都是有原因的——佚名'
            },
            {
              name: "郑作武",
              photo: require('@/assets/avatar/2014/cx4.webp'),
              department: "14级程序部",
              message: '“设计是一个发现问题、而不是发现解决方案的过程”—Leslie Chicoine'
            },
            {
              name: "王晓瑞",
              photo: require('@/assets/avatar/2014/cx5.webp'),
              department: "14级程序部",
              message: '诚信自由平等爱国文明诚信民主诚信民主诚信自由敬业爱国富强友善平等友善公正'
            },
            {
              name: "徐永亮",
              photo: require('@/assets/avatar/2013/cx1.webp'),
              department: "13级程序部",
              message: '优秀的代码是它自己最好的文档——Steve McConnell'
            },
            {
              name: "杨旭",
              photo: require('@/assets/avatar/2013/cx2.webp'),
              department: "13级程序部",
              message: '优秀的判断力来自经验，但经验来自于错误的判断。——Fred Brooks'
            },
            {
              name: "张静",
              photo: require('@/assets/avatar/2013/cx3.webp'),
              department: "13级程序部",
              message: '简单不先于复杂，而是在复杂之后” —— Alan Perlis'
            },
            {
              name: "凌霄",
              photo: require('@/assets/avatar/2012/cx1.webp'),
              department: "12级程序部",
              message: '当你试图解决一个你不理解的问题时，复杂化就产成了。——Andy Boothe'
            },
            {
              name: "李一诺",
              photo: require('@/assets/avatar/2012/cx2.webp'),
              department: "12级程序部",
              message: '控制复杂性是计算机编程的本质。—— Brian Kernighan'
            },
            {
              name: "李昱坤",
              photo: require('@/assets/avatar/2012/cx3.webp'),
              department: "12级程序部",
              message: '用几个小时来制定计划，可以节省几周的编程时间。—— 佚名'
            },
            {
              name: "刘嘉爱",
              photo: require('@/assets/avatar/2012/cx4.webp'),
              department: "12级程序部",
              message: '当你选择了一种语言，意味着你还选择了一组技术、一个社区。JoshuaBloch'
            },


          ],
        },
        {
          id: 2,
          name: "web部",
          members: [
            {
              name: "李德儒",
              photo: require('@/assets/avatar/2023/webldr.webp'),
              department: "23级web部",
              message: "什么比七个工作日更不爽？第八个（debug）",
            },
            {
              name: "李佳潼",
              photo: require('@/assets/avatar/2023/webljt.webp'),
              department: "23级web部",
              message: "web人很好的捏",
            },
            {
              name: "    何  瑶",
              photo: require('@/assets/avatar/2023/webhy.webp'),
              department: "23级web部",
              message: "小小世界开心至上！",
            },
            {
              name: "姚佳瑜",
              photo: require('@/assets/avatar/2023/webyjy.webp'),
              department: "23级web部",
              message: "好好学习，天天向上",
            },
            {
              name: "黄明宇",
              photo: require('@/assets/avatar/2023/webhmy.webp'),
              department: "23级web部",
              message: "长期素食导致的",
            },
            {
              name: "张世卿",
              photo: require('@/assets/avatar/2022/zhangshiqing.webp'),
              department: "22级web部",
              message: '关注永雏塔菲喵，关注永雏塔菲谢谢喵'
            },
            {
              name: "冷越",
              photo: require('@/assets/avatar/2022/lengyue.webp'),
              department: "22级web部",
              message: '在潮湿里种水仙吧'
            },
            {
              name: "卢育彬",
              photo: require('@/assets/avatar/2022/lyb.webp'),
              department: "22级web部",
              message: '生活索然无味 尸体cos人类'
            },
            {
              name: "路畅",
              photo: require('@/assets/avatar/2022/lc.webp'),
              department: "22级web部",
              message: '道阻且长，行则将至。行而不辍，未来可期'
            },

            {
              name: "廉嘉蕊",
              photo: require('@/assets/avatar/2022/lianjiarui.webp'),
              department: "22级web部",
              message: '事了拂衣去，深藏功与名'
            },
            {
              name: "李伯辉",
              photo: require('@/assets/avatar/2022/lbh.webp'),
              department: "22级web部",
              message: '坤粉一万年'
            },
            {
              name: "雷志良",
              photo: require('@/assets/avatar/2022/leizhiliang.webp'),
              department: "22级web部",
              message: 'CSGO，启动'
            },
            {
              name: "张润宁",
              photo: require('@/assets/avatar/2021/web1.webp'),
              department: "21级web部",
              message: '禁止摆烂-'
            },
            {
              name: "汪洋",
              photo: require('@/assets/avatar/2021/web2.webp'),
              department: "21级web部",
              message: '咸鱼翻身||'
            },
            {
              name: "符谷泰",
              photo: require('@/assets/avatar/2021/web3.webp'),
              department: "21级web部",
              message: 'bug别来了'
            },
            {
              name: "陈江栋",
              photo: require('@/assets/avatar/2020/web1.webp'),
              department: "20级web部",
              message: '禁止低头'
            },
            {
              name: "陈李焘",
              photo: require('@/assets/avatar/2020/web2.webp'),
              department: "20级web部",
              message: 'debug冲冲冲'
            },
            {
              name: "高可欣",
              photo: require('@/assets/avatar/2019/web1.webp'),
              department: "19级web部",
              message: '#NAME?'
            },
            {
              name: "赵有为",
              photo: require('@/assets/avatar/2018/web1.webp'),
              department: "18级web部",
              message: 'Gu?Gu...Gu!'
            },
            {
              name: "沈世纪",
              photo: require('@/assets/avatar/2018/web2.webp'),
              department: "18级web部",
              message: '。。。咕咕咕？'
            },
            {
              name: "陈玉沅",
              photo: require('@/assets/avatar/2017/web1.webp'),
              department: "17级web部",
              message: '面向百度编程'
            },
            {
              name: "官欣仪",
              photo: require('@/assets/avatar/2016/web1.webp'),
              department: "16级web部",
              message: '抠脚宅√LLer√经常女装√'
            },
            {
              name: "李凌宇",
              photo: require('@/assets/avatar/2016/web2.webp'),
              department: "16级web部",
              message: '诶，这里有点缺氧'
            },
            {
              name: "李楚娇",
              photo: require('@/assets/avatar/2016/web3.webp'),
              department: "16级web部",
              message: '热爱生活，热爱技术'
            },
            {
              name: "钱怡辰",
              photo: require('@/assets/avatar/2016/web4.webp'),
              department: "16级web部",
              message: '日常敲代码吃东西'
            },
            {
              name: "刘凡莉",
              photo: require('@/assets/avatar/2016/web5.webp'),
              department: "16级web部",
              message: '人生总会熬出来的'
            },
            {
              name: "李策",
              photo: require('@/assets/avatar/2015/web1.webp'),
              department: "15级web部",
              message: '我不是一个伟大的程序员，我只是一个具有良好习惯的优秀程序员―KentBeck'
            },
            {
              name: "陶赟",
              photo: require('@/assets/avatar/2015/web2.webp'),
              department: "15级web部",
              message: '大部分情况下，构建程序的过程本质上是对规范调试的过程。—FredBrooks'
            },
            {
              name: "雷镇宇",
              photo: require('@/assets/avatar/2015/web3.webp'),
              department: "15级web部",
              message: '不听不听，王八念经'
            },
            {
              name: "张竣凯",
              photo: require('@/assets/avatar/2014/web1.webp'),
              department: "14级web部",
              message: '质量、速度、廉价，选择其中两个。——佚名'
            },
            {
              name: "何珺",
              photo: require('@/assets/avatar/2013/web1.webp'),
              department: "13级web部",
              message: '测试是来表明bug的存在而不是不存在” —— Edsger Dijkstra'
            },
            {
              name: "刘祯昆",
              photo: require('@/assets/avatar/2013/web2.webp'),
              department: "13级web部",
              message: '你要么要软件质量，要么要指针算法；两者不可兼得。—Bertrand Meyer'
            },
            {
              name: "林皇",
              photo: require('@/assets/avatar/2012/web1.webp'),
              department: "12级web部",
              message: '一个人在教会电脑之前，别说他真正理解这个东西了。'
            },
          ],
        },
        {
          id: 3,
          name: "游戏部",
          members: [
            {
              name: "袁庆康",
              photo: require('@/assets/avatar/2023/yxyqk.webp'),
              department: "23级游戏部",
              message: "究极缝补匠",
            },
            {
              name: "    赖 欣",
              photo: require('@/assets/avatar/2023/yxlx.webp'),
              department: "23级游戏部",
              message: "拯救世界!",
            },
            {
              name: "张开元",
              photo: require('@/assets/avatar/2023/yxzky.webp'),
              department: "23级游戏部",
              message: "无",
            },
            {
              name: "黄乐煊",
              photo: require('@/assets/avatar/2023/yxhlx.webp'),
              department: "23级游戏部",
              message: "DONE AND DUSTED.",
            },
            {
              name: "梁芷菁",
              photo: require('@/assets/avatar/2022/lzj.webp'),
              department: "22级游戏部",
              message: '能以知识描绘，亦可以爱描绘，唯独不能用奇迹来描绘'
            },
            {
              name: "潘熙阳",
              photo: require('@/assets/avatar/2022/panxiyang2.webp'),
              department: "22级游戏部",
              message: '想冲天天'
            },
            {
              name: "金鑫溢",
              photo: require('@/assets/avatar/2022/jxy2.webp'),
              department: "22级游戏部",
              message: '指鹿为马不负韶华'
            },
            {
              name: "姚茂琪",
              photo: require('@/assets/avatar/2022/yaomaoqi.webp'),
              department: "22级游戏部",
              message: '呃呃'
            },
            {
              name: "岳一磊",
              photo: require('@/assets/avatar/2022/yueyilei.webp'),
              department: "22级游戏部",
              message: '程序员终成大牛'
            },
            {
              name: "王铭新",
              photo: require('@/assets/avatar/2022/wangmingxin.webp'),
              department: "22级游戏部",
              message: '你说得对，但是'
            },
            {
              name: "时晓天",
              photo: require('@/assets/avatar/2022/shixiaotian.webp'),
              department: "22级游戏部",
              message: '这个人很懒，什么都没有留下'
            },
            {
              name: "许其鸿",
              photo: require('@/assets/avatar/2022/xuqihong.webp'),
              department: "22级游戏部",
              message: '卷不过卷不过'

            },
            {
              name: "陈子荣",
              photo: require("@/assets/avatar/2022/czr.webp"),
              department: "22级游戏部",
              message: "我不是二次元"
            },
            {
              name: "刘宇宙",
              photo: require("@/assets/avatar/2021/game1.webp"),
              department: "21级游戏部",
              message: "你说得对，但是《鬼泣5》是由卡普空自主研发的一款全新动作类冒险游戏。游戏发生在一个被称作「红墓市」的幻想世界，在这里，被斯巴达选中的人将被授予「魔人」，导引恶魔之力。你将扮演一位名为「恶魔猎人」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，阻止魔树侵袭的同时，逐步发掘「V」的真相。"
            },
            {
              name: "戴立桓",
              photo: require("@/assets/avatar/2021/game2.webp"),
              department: "21级游戏部",
              message: "游戏爱好者，不过是手残"
            },
            {
              name: "安戈新",
              photo: require("@/assets/avatar/2021/game3.webp"),
              department: "21级游戏部",
              message: "能躺着就不坐着"
            },
            {
              name: "陈嘉鹏",
              photo: require("@/assets/avatar/2021/game4.webp"),
              department: "21级游戏部",
              message: "此广告位长期招租"
            },
            {
              name: "彭程",
              photo: require("@/assets/avatar/2020/game2.webp"),
              department: "21级游戏部",
              message: "智商在线，没有解决不掉的问题"
            },
            {
              name: "杨飏",
              photo: require("@/assets/avatar/2021/game6.webp"),
              department: "21级游戏部",
              message: "客观是高枕无忧之人的挡箭牌"
            },
            {
              name: "邹雨潼",
              photo: require("@/assets/avatar/2021/game7.webp"),
              department: "21级游戏部",
              message: "好好学习"
            },
            {
              name: "李昱辉",
              photo: require("@/assets/avatar/2020/game1.webp"),
              department: "20级游戏部",
              message: "收获很大，必可活用于下一次……"
            },
            {
              name: "颜慧敏",
              photo: require("@/assets/avatar/2020/game2.webp"),
              department: "20级游戏部",
              message: "······"
            },
            {
              name: "尹嘉豪",
              photo: require("@/assets/avatar/2020/game3.webp"),
              department: "20级游戏部",
              message: "功不唐捐"
            },
            {
              name: "陈子骞",
              photo: require("@/assets/avatar/2019/game1.webp"),
              department: "19级游戏部",
              message: "整点新玩具"
            },
            {
              name: "张浩宇",
              photo: require("@/assets/avatar/2019/game2.webp"),
              department: "19级游戏部",
              message: "兴趣是第一动力。"
            },
            {
              name: "陈祺龙",
              photo: require("@/assets/avatar/2018/game1.webp"),
              department: "18级游戏部",
              message: "缘，妙不可言。"
            },
            {
              name: "张云涛",
              photo: require("@/assets/avatar/2018/game2.webp"),
              department: "18级游戏部",
              message: "Coding is not about typing, is about thinking."
            },
            {
              name: "李隆岩",
              photo: require("@/assets/avatar/2017/game1.webp"),
              department: "17级游戏部",
              message: "我们每天度过的称之为日常的生活，其实是一个个奇迹的连续也说不定。"
            },

          ],
        },
        {
          id: 4,
          name: "APP部",
          members: [
            {
              name: "徐启睿",
              photo: require('@/assets/avatar/2023/appxqr.webp'),
              department: "23级APP部",
              message: "尽力而为，随遇而安",
            },
            {
              name: "李佳潼",
              photo: require('@/assets/avatar/2023/appljt.webp'),
              department: "23级APP部",
              message: "app人很好的捏",
            },
            {
              name: "王建享",
              photo: require('@/assets/avatar/2022/wjx.webp'),
              department: "22级APP部",
              message: '欢迎加入APP部'
            },
            {
              name: "王佳俊",
              photo: require('@/assets/avatar/2022/wjj.webp'),
              department: "22级APP部",
              message: '吃面'
            },
            {
              name: "刘彩鑫",
              photo: require('@/assets/avatar/2021/app1.webp'),
              department: "21级APP部",
              message: '心之所向，无问西东'
            },
            {
              name: "张泽峰",
              photo: require('@/assets/avatar/2021/app2.webp'),
              department: "21级APP部",
              message: '没啥可说的'
            },
            {
              name: "吴东升",
              photo: require('@/assets/avatar/2021/app3.webp'),
              department: "21级APP部",
              message: '开摆!'
            },
            {
              name: "黄博斌",
              photo: require('@/assets/avatar/2020/app1.webp'),
              department: "20级APP部",
              message: '心有猛虎，细嗅蔷薇'
            },
            {
              name: "王梓懿",
              photo: require('@/assets/avatar/2020/app2.webp'),
              department: "20级APP部",
              message: '过去可知不可空，未来可控不可知——Claude Shannon'
            },
            {
              name: "张凯",
              photo: require('@/assets/avatar/2020/app3.webp'),
              department: "20级APP部",
              message: '万物皆可卷积'
            },
            {
              name: "赵艳然",
              photo: require('@/assets/avatar/2019/app11.webp'),
              department: "19级APP部",
              message: '努力成长'
            },
            {
              name: "岳宇轩",
              photo: require('@/assets/avatar/2019/app22.webp'),
              department: "19级APP部",
              message: '我们的工作是搬运知识和技能。'
            },
            {
              name: "钱思航",
              photo: require('@/assets/avatar/2019/app33.webp'),
              department: "19级APP部",
              message: '广告位招租'
            },
            {
              name: "田同晓",
              photo: require('@/assets/avatar/2018/app1.webp'),
              department: "18级APP部",
              message: 'deadline是第一生产力'
            },
            {
              name: "马良吉",
              photo: require('@/assets/avatar/2018/app2.webp'),
              department: "18级APP部",
              message: '你比你想象的更强大'
            },
            {
              name: "曾广豪",
              photo: require('@/assets/avatar/2018/app3.webp'),
              department: "18级APP部",
              message: '干就完事了'
            },
            {
              name: "任浩辰",
              photo: require('@/assets/avatar/2018/app4.webp'),
              department: "18级APP部",
              message: 'Talk is cheap, show me the code.'
            },
            {
              name: "李林宇",
              photo: require('@/assets/avatar/2017/app1.webp'),
              department: "17级APP部",
              message: '现在是过去的未来，亦是未来的过去。'
            },
            {
              name: "弋晓洋",
              photo: require('@/assets/avatar/2017/app2.webp'),
              department: "17级APP部",
              message: '带我，发出萌新的声音'
            },
            {
              name: "王湘懿",
              photo: require('@/assets/avatar/2016/app1.webp'),
              department: "16级APP部",
              message: '腐妹子一只 蛇精病一枚'
            },
            {
              name: "邓懿康",
              photo: require('@/assets/avatar/2016/app2.webp'),
              department: "16级APP部",
              message: '梦想是做个技术宅'
            },



          ],
        },
        {
          id: 5,
          name: "UI部",
          members: [
            {
              name: "李瑜玥",
              photo: require('@/assets/avatar/2023/uilyy.webp'),
              department: "23级UI部",
              message: "要smile面对ddl ◝(　ﾟ∀ ﾟ )◟",
            },
            {
              name: "刘雅璇",
              photo: require('@/assets/avatar/2023/uilyx.webp'),
              department: "23级UI部",
              message: "等花盛开",
            },
            {
              name: "潘奕霖",
              photo: require('@/assets/avatar/2023/uipyl.webp'),
              department: "23级UI部",
              message: "Man! What can I say!",
            },
            {
              name: "董芯汝",
              photo: require('@/assets/avatar/2022/dongxinru.webp'),
              department: "22级UI部",
              message: 'This is Mr.White.',
            },
            {
              name: "马琪颖",
              photo: require('@/assets/avatar/2022/maqiying3.webp'),
              department: "22级UI部",
              message: '知足常乐~'
            },
            {
              name: "陈静",
              photo: require('@/assets/avatar/2022/chenjing.webp'),
              department: "22级UI部",
              message: '感情…哈哈哈哈哈哈！感情才是这个世界上最可笑的东西！'
            },
            {
              name: "曹瑜",
              photo: require('@/assets/avatar/2022/caoyu.webp'),
              department: "22级UI部",
              message: '注意看，这个女孩叫小美'
            },
            {
              name: "韦万蓓",
              photo: require('@/assets/avatar/2022/wwb.webp'),
              department: "22级UI部",
              message: '来摆摆手，再嫣然晃个头，无限春光献祖国。'
            },
            {
              name: "吴文楠",
              photo: require('@/assets/avatar/2021/ui1.webp'),
              department: "21级UI部",
              message: '今天也是困困的一天'
            },
            {
              name: "吴慧敏",
              photo: require('@/assets/avatar/2020/ui1.webp'),
              department: "20级UI部",
              message: '我们有一部实际存在的普世之法，其目的正是为了避免完全的功利主义。'
            },
            {
              name: "陈熠欣",
              photo: require('@/assets/avatar/2019/ui1.webp'),
              department: "19级UI部",
              message: '感恩的心 感谢有你'
            },
            {
              name: "林子靖",
              photo: require('@/assets/avatar/2019/ui2.webp'),
              department: "19级UI部",
              message: '“虽千万人吾往矣。”'
            },
            {
              name: "刘思佳",
              photo: require('@/assets/avatar/2019/ui3.webp'),
              department: "19级UI部",
              message: '······'
            },
            {
              name: "许胤韬",
              photo: require('@/assets/avatar/2019/ui44.webp'),
              department: "19级UI部",
              message: '雄鹿粉丝互删一下'
            },
            {
              name: "付翔宇",
              photo: require('@/assets/avatar/2019/ui5.webp'),
              department: "19级UI部",
              message: '宁静致远'
            },
            {
              name: "葛畅",
              photo: require('@/assets/avatar/2019/ui6.webp'),
              department: "19级UI部",
              message: '好好学习不要摸鱼'
            },
            {
              name: "浦绍英",
              photo: require('@/assets/avatar/2019/ui77.webp'),
              department: "19级UI部",
              message: '弃捐勿复道，努力加餐饭。'
            },
            {
              name: "诸彦甫",
              photo: require('@/assets/avatar/2018/ui1.webp'),
              department: "18级UI部",
              message: '······'
            },
            {
              name: "浦泽元",
              photo: require('@/assets/avatar/2017/ui1.webp'),
              department: "17级UI部",
              message: 'less is more 少即是多'
            },
            {
              name: "于聪颖",
              photo: require('@/assets/avatar/2016/ui1.webp'),
              department: "16级UI部",
              message: '性别女，爱好各种adobe家的软件，但不擅长'
            },
            {
              name: "翟书言",
              photo: require('@/assets/avatar/2016/ui2.webp'),
              department: "16级UI部",
              message: '哇这个人为什么这么酷'
            },
            {
              name: "李宜璟",
              photo: require('@/assets/avatar/2016/ui3.webp'),
              department: "16级UI部",
              message: '这个人很懒，神马都没留下…'
            },
            {
              name: "廖舒祺",
              photo: require('@/assets/avatar/2016/ui4.webp'),
              department: "16级UI部",
              message: '额，活泼好动，爱看电影，做运动，旅游，喜欢设计...'
            },
            {
              name: "周尊康",
              photo: require('@/assets/avatar/2015/ui1.webp'),
              department: "15级UI部",
              message: '直到最后一个用户死去，软件才算完成。——佚名'
            },
            {
              name: "成亚男",
              photo: require('@/assets/avatar/2014/ui1.webp'),
              department: "14级UI部",
              message: '设计中最难的部分……是阻止功能。——佚名'
            },
            {
              name: "罗聿聪",
              photo: require('@/assets/avatar/2012/ui1.webp'),
              department: "12级UI部",
              message: '它在我的机器上可以很好运行！——大部分程序员'
            },
            {
              name: "肖宇恬",
              photo: require('@/assets/avatar/2012/ui2.webp'),
              department: "12级UI部",
              message: '复制粘贴是一个设计错误。——David Parnas'
            },
            {
              name: "张兆业",
              photo: require('@/assets/avatar/2011/ui1.webp'),
              department: "11级UI部",
              message: '我不是一个伟大的程序员，我只是一个具有良好习惯的优秀程序员―Kent Beck'
            },
          ],
        },
        {
          id: 6,
          name: "系统维护部",
          members: [
            {
              name: "陈默涵",
              photo: require('@/assets/avatar/2015/xt1.webp'),
              department: "15级系统维护部",
              message: '计算机科学领域的所有问题都可以通过其他方式间接解决。—David Wheeler'
            },
            {
              name: "蒙煜明",
              photo: require('@/assets/avatar/2014/xt1.webp'),
              department: "14级系统维护部",
              message: '如果你是房间里最聪明的人，那么你走错房间了。——佚名'
            },
            {
              name: "刘天峰",
              photo: require('@/assets/avatar/2013/xt1.webp'),
              department: "13级系统维护部",
              message: '软件在能够复用前必须先能用。——Ralph Johnson'
            },
            {
              name: "陶孟旭",
              photo: require('@/assets/avatar/2013/xt2.webp'),
              department: "13级系统维护部",
              message: '最便宜，最快和最可靠的组件是不存在的。——佚名'
            },
            {
              name: "李思源",
              photo: require('@/assets/avatar/2012/xt1.webp'),
              department: "12级系统维护部",
              message: '没有什么代码的执行速度比空代码更快。——Merb 核心原则'
            },
            {
              name: "曹刚",
              photo: require('@/assets/avatar/2011/xt1.webp'),
              department: "11级系统维护部",
              message: '这不是一个 bug，这只是一个未列出来的特性。——匿名'
            },


          ]
        }
      ],
      selectedDepartmentId: 1, // 默认选中程序部
      infoMember: null,
      showingInfo: false,
    };
  },
  computed: {
    selectedDepartment() {
      return this.departments.find(
        (dept) => dept.id === this.selectedDepartmentId
      );
    },
  },
  methods: {
    selectDepartment(department) {
      this.selectedDepartmentId = department.id;
      this.infoMember = null; // 重置详细信息
      this.showingInfo = false;
    },
    showMemberInfo(member) {
      this.infoMember = member;
      this.showingInfo = true;
    },
    closeInfo() {
      this.showingInfo = false;
    },
  },
};
</script>

<style scoped>
.department-container {
  width: 100%;
  height: 100vh;
  position: relative;

  overflow: hidden;
  background-image: url(../assets/bg.webp);

  background-size: 100%;
  padding-top: 70px;
}

::-webkit-scrollbar {
  display: none;
}

.tabs {
  position: absolute;
  width: 31%;
  height: 100%;
  background-color: #04132d;
  /* padding-top: 5%; */
}

.tabs button {
  width: 100%;
  height: 6%;
  background-color: #04132d;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 25px;
  font-weight: 600;
}

.tabs button:hover {
  background-color: #3399ff85;
}

.tabs button.active {
  background-color: #3399ff;
  color: white;
}

.back {
  padding-left: 14px;
  padding-top: 12px;
  position: fixed;
}

.members-list {
  position: relative;
  /* padding-top: 4.8%; */
  margin-left: 31%;
  width: 69%;
  height: 100%;
  background: rgba(217, 217, 217, 0.1);
  backdrop-filter: blur(20px);
  scrollbar-width: none;
  overflow: auto;


}

.member-con {
  margin-left: 6%;
  margin-top: 3%;
}

/* .Memberpart {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  white-space: pre-wrap;
} */
.member {
  /* margin-top: 7%;
  margin-left: 4%;
  /* width: 23%;
  height: 28%;
  background-color: #fff; */
  /* display: flex;
  width: 157px;
  height: 202px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;  */
  margin-top: 3%;
  margin-left: 37px;
  margin-right: 52px;
  display: inline-block;
  width: 87px;
  height: 87px;
  text-align: center;
  cursor: pointer;

}

.photo {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  margin-bottom: 14px;
}

img {
  transition: all 0.6s;
}

img:hover {
  transform: scale(1.1);
}

.photo:hover {
  box-shadow: 10px 10px 20px 1px rgb(67, 54, 56);
}

span {
  color: #fff;
  font-family: "Microsoft New Tai Lue";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.detial {
  position: fixed;
  /* 固定在页面上 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  /* 半透明黑色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 430px) {
  .tabs {
    /* padding-top: 16%; */
    width: 25%;
    font-size: 16px;
    margin-right: 0;
  }

  .tabs button {
    font-size: 20px;
  }

  .members-list {
    /* padding-top: 15%; */
    margin-left: 25%;
    width: 80%;
  }

  .member-con {
    margin-top: 7%;
  }

  .member {
    width: 56px;
    height: 56px;
    margin-left: 10%;
    margin-right: 0;
  }

  span {
    font-size: 16px;
  }
}
</style>