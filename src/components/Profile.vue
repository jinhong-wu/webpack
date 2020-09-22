<template>
  <div>
    <span>Profile：</span>
    <span>{{params}}</span>
    <!-- 也可以直接在页面写 -->
    <span>{{$route.query}}</span>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
  },
  computed: {
    params() {
      // 这里是$route不是$router，route表示活跃的路由
      return this.$route.query;
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
</style>