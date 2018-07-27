<template>
  <section class="page-honor">
    <div class="user-intro">
      <img :src="userInfoData.image" class="img-portrait" />
      <div class="intro-warp">
        <h4 class="user-name">{{userInfoData.name}}</h4>
        <h5 class="user-title">初||级服务提供商</h5>
      </div>
    </div>
    <div class="user-honor-list">
      <div class="top-list">
        <h4>荣誉值<i class="icon icon-grade-3"></i></h4>
        <h5 class="user-honor-grade">2300</h5>
        <p class="border-line"></p>
      </div>
      <div class="step-list">
        <div class="item-step" v-for="(items, index) in stepListData" :key="index">
          <div class="timer-shaft">
            <p class="step-circle"></p>
            <p class="step-line"></p>
          </div>
          <div class="timer-intro">
            <p class="grade"><i>+</i><span>{{items['grade']}}</span></p>
            <p class="intro">{{items['type']}}</p>
            <p class="time">{{items['time']}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {Footer} from '@/components/index'
import UserInfoModel from '@/model/user/userInfo'
const userInfoModel = new UserInfoModel()
export default {
  components: {
    Footer
  },
  data () {
    return {
      userInfoData: {},
      stepListData: [
        {
          type: '学习奖励学习奖励',
          time: '2018.05.03',
          grade: '3'
        }, {
          type: '学习奖励学习奖励',
          time: '2018.05.03',
          grade: '6'
        }, {
          type: '学习奖励学习奖励',
          time: '2018.05.03',
          grade: '4'
        }, {
          type: '学习奖励学习奖励',
          time: '2018.05.03',
          grade: '10'
        }, {
          type: '学习奖励学习奖励',
          time: '2018.05.03',
          grade: '30'
        }
      ]
    }
  },
  created () {
    document.body.setAttribute('class', 'bg-body-honor')
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.getUserInfo()
    },
    getUserInfo () {
      userInfoModel.getUserInfo().then(({data}) => {
        if (data && data.Code === 1) {
          let userInfoData = this.data
          userInfoData = {
            name: data.Value.Name,
            image: data.Value.HeadImageUrl,
            gender: data.Value.Sex
          }
          this.userInfoData = userInfoData
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/scss/functions';
@import '~@/scss/variables';
.page-honor {
  width: 100%;
  height: 100%;
  .user-intro {
    display: flex;
    align-items: center;
    padding: oldUnit(124px) oldUnit(95px) oldUnit(50px) oldUnit(95px);
    color: #fff;
    .img-portrait {
      width: oldUnit(250px);
      height: oldUnit(250px);
      border-radius: 100%;
    }
    .intro-warp {
      margin-top: oldUnit(30px);
      margin-left: oldUnit(30px);
      font-size: unit(30px);
      .user-name {
        font-size: unit(38px);
        font-weight: bold;
      }
      .user-title {
        margin-top: oldUnit(40px);
      }
    }
  }
  .user-honor-list {
    margin: 0 oldUnit(95px);
    padding: oldUnit(120px) oldUnit(10px) oldUnit(5px) oldUnit(10px);
    border-radius: oldUnit(50px);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    background-color: #fff;
    .top-list {
      font-size: unit(30px);
      text-align: center;
      .user-honor-grade {
        margin: oldUnit(66px) 0 oldUnit(30px) 0px;
        font-size: unit(90px);
        color: $font-color-honor;
      }
      .border-line {
        width: unit(240px);
        height: 1px;
        margin: auto;
        background-image: url('~@/assets/images/user-center/user-honor/line.png');
      }
    }
    .step-list {
      text-align: center;
      margin-top: oldUnit(150px);
      .item-step {
        position: relative;
        .timer-shaft {
          .step-circle {
            width: unit(32px);
            height: unit(32px);
            margin: auto;
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('~@/assets/images/user-center/user-honor/icon-step-circle.png');
          }
          .step-line {
            width: unit(6px);
            height: unit(130px);
            margin: 1px auto;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('~@/assets/images/user-center/user-honor/icon-step-line.png');
          }
        }
        &:nth-child(2n) {
          .timer-intro {
            left: 5%;
            text-align: right;
          }
        }
        .timer-intro {
          position: absolute;
          top: - oldUnit(35px);
          left: 55%;
          width: oldUnit(560px);
          text-align: left;
          .grade {
            font-size: unit(48px);
            color: $font-color-honor;
            i {
              font-style: normal;
              vertical-align: top;
            }
          }
          .intro, .time {
            margin: unit(10px) 0px;
            font-size: unit(25px);
          }
        }
      }
    }
  }
}
</style>
