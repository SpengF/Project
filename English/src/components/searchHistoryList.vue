<template>
  <div class="searchHistoryList">
    <ul class="serachListUl">
      <li v-for="(item,idNum) in searchHistoryList" :key="idNum" class="serachListLi" @click="seachWord(item)">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import {clearSearchHistoryList} from '../assets/js/utils.js'
export default {
  props:{
    searchHistoryList:{
      type:Array,
    }
  },
  methods:{
    seachWord(item){
      clearSearchHistoryList(this)
      this.$store.dispatch('wordDetails',item)
    }
  }
}
</script>

<style lang='less'>
.searchHistoryList{
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
  position: absolute;
  z-index: 9999;
  .serachListUl{
    background-color: #f7f8fa;
    padding: 0 10px;
    .serachListLi{
      padding: 5px 0;
      color: #949494;
      font-size: 16px;
    }
  }
}
</style>
