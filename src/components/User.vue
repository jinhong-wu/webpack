<template>
  <div>
    <span>User：</span>
    <span>{{userId}}</span>
    <!-- 也可以直接在页面写 -->
    <span>{{$route.params.userId}}</span>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
  },
  computed: {
    userId() {
      // 这里是$route不是$router，route表示当前路由
      return this.$route.params.userId;
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
</style>