<template>
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
</template>

<script>
import MemberInfo from "./MemberInfo.vue";
import navHead from "./nav-head.vue";
//import img from "../assets/introTry_0.webp";
//程序
import cxcqx from "../assets/cxcqx.webp";
import cxsaq from "../assets/cxsaq.webp";
import cxpcx from "../assets/cxpcx.webp";
import cxyj from "../assets/cxyj.webp";
import cxrcf from "../assets/cxrcf.webp";
import cxlrj from "../assets/cxlrj.webp";
import cxlcm from "../assets/cxlcm.webp";
//web
import webldr from "../assets/webldr.webp";
import webljt from "../assets/webljt.webp";
import webhmy from "../assets/webhmy.webp";
import webhy from "../assets/webhy.webp";
import webyjy from "../assets/webyjy.webp";
//游戏
//游戏
import yxyqk from "../assets/yxyqk.webp";
import yxlx from "../assets/yxlx.webp";
import yxzky from "../assets/yxzky.webp";
import yxhlx from "../assets/yxhlx.webp";
//APP
import appxqr from "../assets/appxqr.webp";
import appljt from "../assets/appljt.webp";
//UI
import uilyy from "../assets/uilyy.webp";
import uipyl from "../assets/uipyl.webp";
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
              photo: cxcqx,
              department: "23级程序部",
              message: "你好",
            },
            {
              name: "孙安琪",
              photo: cxsaq,
              department: "23级程序部",
              message: "∀ε＞0，|me-fw|＜ε",
            },
            {
              name: "彭传喜",
              photo: cxpcx,
              department: "23级程序部",
              message: "逸一时，误一世，忆旧亦疚罢己龄。",
            },
            {
              name: "任程枫",
              photo: cxrcf,
              department: "23级程序部",
              message: "I am iron man",
            },
            {
              name: "    袁  健",
              photo: cxyj,
              department: "23级程序部",
              message: "...",
            },
            {
              name: "李仁杰",
              photo: cxlrj,
              department: "23级程序部",
              message: "技术立身",
            },
            {
              name: "蔺春名",
              photo: cxlcm,
              department: "23级程序部",
              message:
                "It is better to be Socrates dissatisfied than a fool satisfied.",
            },
          ],
        },
        {
          id: 2,
          name: "web部",
          members: [
            {
              name: "李德儒",
              photo: webldr,
              department: "23级web部",
              message: "什么比七个工作日更不爽？第八个（debug）",
            },
            {
              name: "李佳潼",
              photo: webljt,
              department: "23级web部",
              message: "web人很好的捏",
            },
            {
              name: "    何  瑶",
              photo: webhy,
              department: "23级web部",
              message: "小小世界开心至上！",
            },
            {
              name: "姚佳瑜",
              photo: webyjy,
              department: "23级web部",
              message: "好好学习，天天向上",
            },
            {
              name: "黄明宇",
              photo: webhmy,
              department: "23级web部",
              message: "长期素食导致的",
            },
          ],
        },
        {
          id: 3,
          name: "游戏部",
          members: [
            {
              name: "袁庆康",
              photo: yxyqk,
              department: "23级游戏部",
              message: "究极缝补匠",
            },
            {
              name: "    赖 欣",
              photo: yxlx,
              department: "23级游戏部",
              message: "拯救世界!",
            },
            {
              name: "张开元",
              photo: yxzky,
              department: "23级游戏部",
              message: "无",
            },
            {
              name: "黄乐煊",
              photo: yxhlx,
              department: "23级游戏部",
              message: "DONE AND DUSTED.",
            },
          ],
        },
        {
          id: 4,
          name: "APP部",
          members: [
            {
              name: "徐启睿",
              photo: appxqr,
              department: "23级APP部",
              message: "尽力而为，随遇而安",
            },
            {
              name: "李佳潼",
              photo: appljt,
              department: "23级APP部",
              message: "app人很好的捏",
            },
          ],
        },
        {
          id: 5,
          name: "UI部",
          members: [
            {
              name: "李瑜玥",
              photo: uilyy,
              department: "23级UI部",
              message: "要smile面对ddl ◝(　ﾟ∀ ﾟ )◟",
            },
            {
              name: "潘奕霖",
              photo: uipyl,
              department: "23级UI部",
              message: "Man! What can I say!",
            },
          ],
        },
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
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-image: url(../assets/bg.webp);
  background-size: 100%;
  padding-top: 70px;
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
  width: 90px;
  height: 90px;
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
    font-size: 15px;
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
    width: 60px;
    height: 60px;
    margin-left: 10%;
    margin-right: 0;
  }

  span {
    font-size: 15px;
  }
}
</style>