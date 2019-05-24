import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

export default new vuex.Store({
  state: {
    list:[{
      "id":1,
      "name":"裤子",
      "price":"122"
      
      },{
          "id":2,
          "name":"衣服",
          "price":"15"
      },{
          "id":3,
          "name":"苹果",
          "price":"5"
      },{
          "id":4,
          "name":"橘子",
          "price":"6"
      },{
          "id":5,
          "name":"梨",
          "price":"4"
      }],
      collection:[],

  },
  mutations: {
    add(state, item) {
     state.collection.push(item);
     
    },
    reduce(state,index) {
    
      state.collection.splice(index,1);
    }
  },
  getters: {
    count: (state) => {
      return state.count++;
    }
  },
  actions: {
    addAction(context,data) {
        setTimeout(()=>{context.commit('add',data);  alert(data.name+'已收藏')},1000);
        console.log('已收藏');
      
    },
    reduceAction(context,data) {
      setTimeout(()=>{context.commit('reduce',data); alert('已取消收藏')},1000);
      console.log('我比reduce提前执行');
  },
    // reduceAction({
    //   commit
    // }) {
    //   commit('reduce')
    // }

  }

})
