<template>
    <div class="page-user-centers">
      <div class="title">
        <div class="titleimg"></div>
      </div>
      <!-- <div class="tishi1">{{msg}}</div> -->
      <div class="tishi1">有课积分在线加入贵宾客户须知</div>
      <div class="tishi2">有课积分在线加入贵宾客户须知</div>
      <div class="tishi3">有课积分在线加入贵宾客户须知</div>
      <div class="tishi">更多内容即将开放</div>
      <div class="back" @click="$router.go(-1)"> < </div>
    </div>
</template>
<script>
import UserInfoModel from '@/model/user/userInfo'
const userInfoModel = new UserInfoModel()
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.getmsg()
    },
    getmsg () {
      userInfoModel.getmsg({}, (data) => {
        if (data && data.Code === 1) {
            this.msg = data.Value.msg
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/scss/functions';
.page-user-centers {
    width: 100%;
    height: newUnit(2000px);
    background: #3f4261;
    .title {
        width: 100%;
        height: newUnit(146px);
        background: #4a4f6f;
        position: relative;
        .titleimg {
            width: newUnit(167px);
            height: newUnit(145px);
            position: absolute;
            left: 0;
            top: 0;
            background-size: 100% 100%;
            background-image: url('../../assets/images/loginwarn/title.png');
        };
    }
    .tishi1 {
            width: 100%;
            height: newUnit(231px);
            margin-top:newUnit(27px);
            background:#4a4f6f;
            position: absolute;
            left: 0;
            top: newUnit(145px);
            font-size: newUnit(40px);
            line-height: newUnit(231px);
            text-align: center;
            color: #ffffff
    }
    .tishi2 {
            width: 100%;
            height: newUnit(231px);
            margin-top:newUnit(27px);
            background:#4a4f6f;
            position: absolute;
            left: 0;
            top: newUnit(403px);
            font-size: newUnit(40px);
            line-height: newUnit(231px);
            text-align: center;
            color: #ffffff
    }
    .tishi3 {
            width: 100%;
            height: newUnit(231px);
            margin-top:newUnit(27px);
            background:#4a4f6f;
            position: absolute;
            left: 0;
            top: newUnit(659px);
            font-size: newUnit(40px);
            line-height: newUnit(231px);
            text-align: center;
            color: #ffffff
    }
    .tishi {
        width: 100%;
        height: newUnit(50px);
        font-size: newUnit(40px);
        line-height: newUnit(50px);
        text-align: center;
        color: #aeb56f;
        position: absolute;
        left: 0;
        top: newUnit(1000px);
    }
    .back {
        width: 100%;
        height: newUnit(177px);
        font-size: newUnit(80px);
        background: #4a4f6f;
        line-height: newUnit(177px);
        text-align: center;
        color: #ffffff;
        position: absolute;
        left: 0;
        bottom: 0;
    }
    
}
</style>
