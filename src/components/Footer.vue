<template>
  <section class="footer-container-warp">
    <div class="footer-container">
      <div class="footer-item" v-for="(item, index) in listdata" :key="index">
        <router-link :to="{name: item['routerName']}">
          <p class="item-icon-warp">
            <i class="icon" :class="`icon-`+item['icon']"></i>
          </p>
          <p class="item-type">{{item['text']}}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      listdata: [
        {
          'icon': 'home',
          'routerName': 'Home',
          'text': '主页'
        }, {
          'icon': 'radio',
          'routerName': 'Home',
          'text': '校电台'
        }, {
          'icon': 'course',
          'routerName': 'Home',
          'text': '公开课'
        }, {
          'icon': 'sport',
          'routerName': 'Home',
          'text': '体育馆'
        }, {
          'icon': 'library',
          'routerName': 'Home',
          'text': '图书馆'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/functions';
.footer-container-warp {
  width: 100%;
  height: 1px;
  margin-bottom: oldUnit(251px);
}
.footer-container {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: oldUnit(251px);
  border-top: oldUnit(1px) solid #d0d2d1;
  font-size: oldUnit(60px);
  background-color: #efeeec;
  box-shadow: unit(1px) 0px unit(4px) #c8c8c8;
  .footer-item {
    text-align: center;
    .item-icon-warp {
      display: flex;
      justify-content: center;
      align-items: center;
      height: oldUnit(90px);
      overflow: hidden;
    }
    .item-type {
      padding-top: oldUnit(10px);
    }
  }
}
</style>
