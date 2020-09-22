<template>
  <div>
    <!-- 使用路由：router-link、router-view -->
    <router-link to="/home" tag="button">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link :to="'/user/'+userId">User</router-link>
    <router-link :to="{path: '/profile', query: {name: 'wjh', age: 22}}">Profile</router-link>
    <router-view></router-view>
    <!-- 使用代码方式修改router -->
    <!-- <button @click="routerClick('/home')">Home</button>
    <button @click="routerClick('/about')">About</button>
    <router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "wjh",
    };
  },
  methods: {
    routerClick(hash) {
      this.$router.push(hash); // 产生浏览记录
      // this.$router.replace(hash);  // 不产生浏览记录
      // 两种传值方法
      // this.$router.push(hash + "/" + userId);
      // this.$router.push({
      //   path: hash,
      //   query: {
      //     name: "wjh",
      //     age: 22,
      //   },
      // });
    },
  },
};
</script>

<style scoped>
</style>
