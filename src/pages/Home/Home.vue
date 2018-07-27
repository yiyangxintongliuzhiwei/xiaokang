<template>
  <div class="page-home">
    <header class="page-head">
      <i class="icon icon-header-menu"></i>
      <div class="search-warp">
        <Search></Search>
      </div>
    </header>
    <div class="user-info-warp">
      <div class="user-intro">
        <img :src="userInfoData.image" class="img-portrait" />
        <div class="intro-warp">
          <h4 class="user-name">{{userInfoData.name}}</h4>
          <h5 class="user-title">初||级服务提供商</h5>
        </div>
      </div>
      <div class="user-item-warp">
        <div class="sign-in-warp item-warp">
          <router-link :to="{name:'Home'}" class="tc">
            <p class="icon-warp">
              <i class="icon icon-sign-in"></i>
            </p>
            <p class="type">签到</p>
          </router-link>
        </div>
        <div class="news-warp item-warp">
          <router-link :to="{name:'Home'}" class="tc">
            <p class="icon-warp">
              <i class="icon icon-news"></i>
              <i class="icon icon-num"><label>1</label></i>
            </p>
            <p class="type">消息</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="user-type-list clearfix">
      <div
        v-for="(item, index) in userTypeData"
        :key="index"
        class="item-type"
        :class="`item-`+item['icon']">
        <router-link :to="{name: 'Home'}">
          <p class="item-intro">{{item['type']}}</p>
        </router-link>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import {Footer} from '@/components/index'
import UserInfoModel from '@/model/user/userInfo'
import {Search} from 'vux'
const userInfoModel = new UserInfoModel()
export default {
  components: {
    Footer,
    Search
  },
  data () {
    return {
      userTypeData: [
        {
          type: '研究生二年级（特级）',
          icon: 'graduate2'
        }, {
          type: '研究生一年级（高级）',
          icon: 'graduate1'
        }, {
          type: '大学生三年级（中级）',
          icon: 'undergraduate3'
        }, {
          type: '大学三年级（初一级&初二级）',
          icon: 'undergraduate3-primary'
        }, {
          type: '大学二年级（业务代表）',
          icon: 'undergraduate2'
        }, {
          type: '大学一年级（贵宾客户）',
          icon: 'undergraduate1'
        }, {
          type: '博士（辅导员）',
          icon: 'instructor'
        }
      ],
      userInfoData: {}
    }
  },
  created () {
    document.body.setAttribute('class', 'bg-body-home')
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.getUserInfo()
      this.getCourseInfo()
      this.getClassInfo()
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
    },
    getCourseInfo () {
      userInfoModel.getCourseInfo({}, (data) => {
      })
    },
    getClassInfo () {
      userInfoModel.getClassInfo({}, (data) => {
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/functions';

.page-home {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/home/bg-home.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  .page-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: oldUnit(70px) oldUnit(136px) 0 oldUnit(136px);
  }
  .user-info-warp {
    display: flex;
    height: oldUnit(300px);
    align-items: flex-start;
    justify-content: space-between;
    margin: oldUnit(115px) oldUnit(140px) oldUnit(220px) oldUnit(120px);
    font-size: oldUnit(60px);
    color: #fff;
    .user-intro {
      display: flex;
      align-items: center;
      .img-portrait {
        width: oldUnit(230px);
        height: oldUnit(230px);
        border-radius: 100%;
      }
      .intro-warp {
        margin-left: oldUnit(45px);
        .user-name {
          font-size: oldUnit(80px);
          font-weight: bold;
        }
        .user-title {
          margin-top: oldUnit(20px);
        }
      }
    }
    .user-item-warp {
      display: flex;
      .item-warp {
        &.sign-in-warp {
          margin-right: oldUnit(100px);
        }
        .icon-warp {
          position: relative;
          display: flex;
          align-items: center;
          height: unit(65px);
          .icon-num {
            position: absolute;
            top: - unit(8px);
            left: 75%;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: unit(46px);
            min-height: unit(46px);
            padding: 0 unit(10px);
            border-radius: 100%;
            font-size: 14px;
            text-align: center;
            color: #fff;
            background-color: #d91940;
          }
        }
        .type {
          margin-top: oldUnit(5px);
          color: #fff;
        }
      }
    }
  }
  .user-type-list {
    width: unit(631px);
    margin-left: oldUnit(80px);
    margin-bottom: oldUnit(40px);
    text-align: center;
    .item-type {
      float: right;
      width: unit(600px);
      height: unit(192px);
      margin-top: - oldUnit(185px);
      font-size: oldUnit(66px);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      &:first-child {
        margin-top: 0px;
        .item-intro {
          margin-top: oldUnit(71px);
        }
      }
      &:last-child {
        float: left;
        margin-left: unit(31px);
      }
      &.item-graduate2 {
        width: unit(631px);
        height: unit(192px);
        background-image: url('~@/assets/images/home/graduate2.png')
      }
      &.item-graduate1 {
        width: unit(599px);
        background-image: url('~@/assets/images/home/graduate1.png')
      }
      &.item-undergraduate3 {
        background-image: url('~@/assets/images/home/undergraduate3.png')
      }
      &.item-undergraduate3-primary {
        background-image: url('~@/assets/images/home/undergraduate3-primary.png')
      }
      &.item-undergraduate2 {
        background-image: url('~@/assets/images/home/undergraduate2.png')
      }
      &.item-undergraduate1 {
        background-image: url('~@/assets/images/home/undergraduate1.png')
      }
      &.item-instructor {
        width: unit(633px);
        height: unit(99px);
        background-image: url('~@/assets/images/home/instructor.png')
      }
      .item-intro {
        color: #fff;
        margin-top: oldUnit(75.5px);
        line-height: oldUnit(60px);
      }
    }
  }
  // 搜索框覆盖原有样式
  .search-warp /deep/ {
    width: oldUnit(1019px);
    .vux-search-box {
      .weui-search-bar {
        padding: 0;
        background-color: transparent;
      }
      .weui-search-bar__label {
        display: none;
      }
      .weui-search-bar:before {
        border-top: none;
      }
      .weui-search-bar:after {
        border-bottom: none;
      }
      .weui-search-bar__form {
        background: transparent;
      }
      .weui-search-bar__form:after {
        border-radius: 40px;
        border-color: #ffffff;
        background: transparent;
      }
      .weui-icon-search {
        left: auto;
        right: 10px;
        color: #fff;
      }
      &.vux-search-fixed {
        .weui-search-bar {
          padding: 8px 10px;
          background-color: #EFEFF4;
        }
        .weui-search-bar__form:after {
          background: #fff;
        }
        .weui-icon-search {
          right: auto;
          left: 10px;
          color: #B2B2B2;
        }
      }
    }
  }
}
</style>
