<template>
<div>
  <ul>
    <li v-for="(items, index) in listData" :key="index">
      <router-link :to="{name: items['link']}" class="tc">
        <i>{{index + 1}}.</i>{{items['name']}}
      </router-link>
    </li>
  </ul>
  <ul class="newul">
    <li v-for="(items, index) in newlistData" :key="index">
      <router-link :to="{name: items['link']}" class="tc">
        <i>{{index + 1}}.</i>{{items['name']}}
      </router-link>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      listData: [
        {
          link: 'Home',
          name: '年级通道'
        }, {
          link: 'UserCenter',
          name: '个人中心'
        }, {
          link: 'UserHonor',
          name: '学分明细'
        }
      ],
      newlistData: [
        {
          link: 'loginwarn',
          name: '登陆提醒'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/functions';
@import '~@/scss/variables';
ul {
  width: 100%;
  margin-top: unit(50px);
  li {
    width: 100%;
    margin: unit(20px) unit(30px);
    font-size: unit(30px);
    text-decoration: underline;
  }
}
.newul {
  width: 100%;
  margin-top: newUnit(200px);
  border: newUnit(1px) solid black
}
</style>
