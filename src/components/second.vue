<template>
  <div class="hello">
    <router-link to="/">
      <h3>去商品列表页</h3>
    </router-link>
  <ul>
 <list-item :parentList='count'> </list-item>
  </ul>
    <!-- <div>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="$store.commit('reduce',5)">-</button>
    </div>
    <div>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </div> -->
  </div>
</template>
<script>
import ListItem from './collectionItem.vue'
import { mapState,mapMutations ,mapActions} from 'vuex';
export default {
  name: "item",
  components:{
     ListItem
  },
  data() {
    return {
      list: []
    };
  },

   computed:{
       
        count(){
            return this.$store.state.collection;
        }
    },
  methods: {
     
    //    ...mapMutations([
    //         'add','addAction'
    // ]),
    ...mapActions([
      'addAction','addAction'
    ])
  },
  mounted() {}
};
</script>