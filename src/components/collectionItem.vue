<template>
  <div>
      <template v-if="parentList.length>0">
        <li v-for="(item,index) in parentList" :key="index">
       <div class='collection' >已收藏</div>
        
      <div>商品名称:{{item.name}}</div>
      <div>商品价格:{{item.price}}</div>
      <!-- <div class="add"   @click="sub(item)" >+</div> -->
    
     <div class='reduce' @click="reduce(index)" :item='item.id'>- </div>
      <!-- -->
    </li>
      </template>
       <template v-else>
        你还没有加收藏的商品哦~
      </template>
    
  </div>
</template>
<script>
import { mapState,mapMutations ,mapActions} from 'vuex';
export default {
  name: "collection",
  data() {
    return {
      list: []
    };
  },
  props: {
    parentList: Array
  },
  computed: {},
  methods: {
     sub(item){
        this.$store.dispatch('addAction',item);
     },
     reduce(itemIndex){
         console.log(itemIndex);
         
          this.$store.dispatch('reduceAction',itemIndex);
     }
    //    ...mapMutations([
    //         'add','addAction'
    // ]),
    // ...mapActions([
    //   'addAction',item
    // ])
  },
  mounted() {

  }
};
</script>
<style scoped>
ul {
  padding: 0;
}
li {
    position: relative;
  /* display: inline-block; */
  list-style-type: none;
  float: left;
  width: 33%;
  margin: 10px 10px;
  padding: 10px 0;
  box-shadow: 0 8px 18px #ccc;
  cursor: pointer;
}
li > div {
  color: #777;
}
.reduce{
    position: absolute;
    right:5px;
    bottom: 5px;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 100%;
    font-size: 18px;
    background-color: #ccc;
}
.collection{
    position: absolute;
    left: 5px;
    top: 5px;
    color: orange;
    font-size: 12px;
}
</style>

