<template>
  <section class="page-user-center">
    <div class="user-info">
      <div class="top-info">
        <div class="left-info">
          <img :src="userInfoData.image" class="img-portrait" />
        </div>
        <div class="right-info">
          <h4 class="user-name">{{userInfoData.name}}</h4>
          <h5 class="user-title-warp">
            <i class="icon icon-grade-gray"></i>
            <span class="user-title">初||级服务提供商</span>
            <span class="fb">CN110987</span></h5>
        </div>
      </div>
      <div class="bottom-info">
        <ul v-for="(items, index) in userIntroData" :key="index">
          <li class="item-title">{{items['name']}}
            <span v-if="items['gradeType']" :class="`icon icon-grade-`+items['gradeType']"></span>
          </li>
          <li class="item-grade fb" :class="`item-grade-`+items['gradeColor']">{{items['grade']}}</li>
          <li v-if="items['number']" class="item-number">{{items['number']}}</li>
          <li v-else class="item-number">
             <router-link :to="{name: items['linkName']}">
               {{items['linkText']}}
             </router-link>
          </li>
        </ul>
      </div>
      <div class="pa-sign-in-warp">
        <router-link :to="{name:'Home'}" class="tc">
          <p class="icon-warp">
            <i class="icon icon-sign-in-green"></i>
          </p>
          <p class="type">签到</p>
        </router-link>
      </div>
    </div>
    <ul class="user-menu-list">
      <li v-for="(items, index) in userMenuData"
      :key="index"
      class="items">
        <router-link :to="{name:items['link']}">
          <span class="icon-warp">
            <i class="icon" :class="`icon-`+items['icon']"></i>
          </span>
          <span class="item-type">{{items['type']}}</span>
        </router-link>
      </li>
    </ul>
    <Footer/>
  </section>
</template>
<script>
import UserInfoModel from '@/model/user/userInfo'
import {Footer} from '@/components/index'
const userInfoModel = new UserInfoModel()
export default {
  components: {
    Footer
  },
  data () {
    return {
      userInfoData: {},
      userIntroData: [
        {
          name: '荣誉值',
          gradeType: 3,
          grade: 2300,
          gradeColor: 'red',
          number: 'No.120'
        }, {
          name: '培训学分',
          grade: 1779,
          gradeColor: 'blue',
          linkText: '查看明细',
          linkName: 'Home'
        }
      ],
      userMenuData: [
        {
          icon: 'course',
          type: '我的课程',
          link: 'Home'
        }, {
          icon: 'collect',
          type: '我的收藏',
          link: 'Home'
        }, {
          icon: 'title',
          type: '我的头衔',
          link: 'Home'
        }, {
          icon: 'step',
          type: 'S.T.E.P',
          link: 'Home'
        }, {
          icon: 'assess',
          type: '能力评估',
          link: 'Home'
        }, {
          icon: 'list',
          type: '我的榜单',
          link: 'Home'
        }
      ]
    }
  },
  created () {
    document.body.setAttribute('class', 'bg-body-user-center')
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
  .page-user-center {
    width: 100%;
    height: 100%;
    .user-info {
      position: relative;
      height: oldUnit(800px);
      margin: oldUnit(126px) oldUnit(95px) oldUnit(50px) oldUnit(95px);
      background-color: #fff;
      border-radius: oldUnit(50px);
      box-shadow: 2px 2px #7ab769;
      .top-info {
        display: flex;
        padding: oldUnit(90px) oldUnit(30px) oldUnit(53px) oldUnit(94px);
        align-items: center;
        border-bottom: 1px dashed rgba(68, 67, 68, .4);
        .left-info {
          .img-portrait {
            width: oldUnit(250px);
            height: oldUnit(250px);
            border-radius: 100%;
          }
        }
        .right-info {
          margin-left: oldUnit(50px);
          .user-name {
            font-size: unit(38px);
            font-weight: bold;
          }
          .user-title-warp {
            margin-top: oldUnit(40px);
            font-size: unit(30px);
            .user-title {
              margin: 0px unit(5px);
            }
          }
        }
      }
      .bottom-info {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: oldUnit(50px) 0px;
        .item-title {
          font-size: unit(30px);
        }
        .item-grade {
          margin: unit(5px) 0px;
          font-size: unit(64px);
          &.item-grade-red {
            color: $font-color-honor;
          }
          &.item-grade-blue {
            color: #40bcf2;
          }
        }
        .item-number {
          font-size: unit(30px);
        }
      }
      .pa-sign-in-warp {
        position: absolute;
        right: unit(20px);
        top: unit(-5px);
        .type {
          font-size: unit(30px);
        }
      }
    }
    .user-menu-list {
      .items {
        display: flex;
        align-items: center;
        height: oldUnit(200px);
        margin: 0px oldUnit(95px);
        border-bottom: 1px solid #fff;
        font-size: unit(32px);
        color: #fff;
        a {
          color: #fff;
        }
        .icon-warp {
          padding: 0 oldUnit(120px) 0 oldUnit(77px);
          .icon {
            vertical-align: middle;
          }
        }
      }
    }
    .icon {
      &.icon-course {
        width: unit(42px);
        height: unit(36px);
        background-image: url('~@/assets/images/user-center/icon/icon-course.png');
      }
      &.icon-collect {
        width: unit(44px);
        height: unit(42px);
        background-image: url('~@/assets/images/user-center/icon/icon-collect.png');
      }
      &.icon-title {
        width: unit(41px);
        height: unit(54px);
        background-image: url('~@/assets/images/user-center/icon/icon-title.png');
      }
      &.icon-step {
        width: unit(40px);
        height: unit(52px);
        background-image: url('~@/assets/images/user-center/icon/icon-step.png');
      }
      &.icon-assess {
        width: unit(40px);
        height: unit(43px);
        background-image: url('~@/assets/images/user-center/icon/icon-assess.png');
      }
      &.icon-list {
        width: unit(46px);
        height: unit(46px);
        background-image: url('~@/assets/images/user-center/icon/icon-list.png');
      }
    }
  }
</style>
