<template>
  <div>
    <div>Home</div>
    <router-link to="/home/news">HomeNews</router-link>
    <router-link to="/home/msgs">HomeMsgs</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news",
    };
  },
  // 这两函数，只有改组件被keep-alive保存状态时，才是有效的
  // activated：进入路由，deactivated：离开路由，beforeRouteLeave：离开路由前
  activated() {
    this.$router.push(this.path);
  },
  deactivated() {},
  beforeRouteLeave(to, from, next) {
    // 这个操作是保持二级路由的状态（但是这个好像后面有什么currentIndex记录）
    this.path = this.$route.path;
    next();
  },
};
</script>

<style scoped>
</style>