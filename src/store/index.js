import Vue from 'vue'
import Vuex from 'vuex'

// 通过Vue.use(插件)，安装插件（第三方插件都需要Vue.use导入）
// 一旦安装插件，内部就会进行Vue.install
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
  // 保存状态
  state: {
    // 一开始就初始化的数据才能被响应
    // 但是后面新增/删除的数据必须这样写：
    // Vue.set(state.info, 'address', '成都')、Vue.delete(state.info, 'address')
    counter: 0,
    info: {}
  },
  // 计算属性，默认有个state参数，参数：(state, getters)
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    // getters默认是不能传递参数的，如果需要，只能让getters本身返回一个函数
    byId(state, getters) {
      return function (id) {
        return id;
      }
    }
  },
  // 方法（同步），默认有个state参数
  // 调用：store.commit('updateInfo')
  mutations: {
    increment(state, num) {
      num = num || 1;
      state.counter += num;
    },
    updateInfo(state) {

    }
  },
  // 方法（异步），默认有个context（上下文）参数，payLoad传递参数
  actions: {
    aupdateInfo(context, payLoad) {  // 这的 context相当于store
      // 回调方法一:调用：store.dispatch('aupdateInfo'. {success: ()=>{}})
      setTimeout(() => {
        context.commit('updateInfo');  //异步成功后调用mutations方法
        // payLoad传参，还可以里面设置回调函数
        // payLoad.success();
      }, 1000);
      // 回调方法一:调用：store.dispatch('aupdateInfo'. payLoad).then()
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          resolve();
        }, 1000);
      })
    }
  },
  // 模块细分
  modules: {}
});

export default store