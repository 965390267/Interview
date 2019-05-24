<template>
  <div class="hello">
    <h2>这儿是商品列表首页</h2>
 <router-link to='/second'> <h3>去收藏页</h3></router-link> 
   <!-- <div><button @click="$store.commit('add',1)">+</button><button @click="$store.commit('reduce',1)">-</button></div> -->
    <!-- <div><button @click="addAction">+</button><button @click="reduceAction">-</button></div> -->
    <ul>
      <list-item :parentList='count' > 
      
        </list-item>
      <!-- <li v-for="(item,index) in list" :key='index'>
        <div>商品名称:{{item.name}}</div>
        <div>商品价格:{{item.price}}</div>
      </li> -->
    </ul>
  </div>
</template>

<script>
// import store from '../store'
import ListItem from './shopItem'

import { mapState,mapMutations ,mapActions} from 'vuex';
export default {
  name: "Home",
  components:{
     ListItem
  },
  data() {
    return {
    
      list:[]
    };
  },
   computed:{
        // ...mapState(["count"]),
        count(){
            return this.$store.state.list;
        }
    },
  methods:{
//  ...mapMutations([
//             'add','reduce'
//     ]),
//     ...mapActions([
//       'addAction','reduceAction'
//     ])
  },
  mounted(){
//  this.$fetch.then(res=>{
//   this.list=res.list;

   
//  });
 
    
    // fetch('../../static/data/shop.json').then(res=>res.json()
    // )
    // .then(res=>{
    //   console.log(res);
    //   this.list=res.list;
    // })
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
