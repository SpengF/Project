<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="搜索单词"
        @keyup="onSearch"
        @search='clearSearchHistoryList'
      />
    </form>
  </div>
</template>

<script>
import {debounceInput,clearSearchHistoryList} from '../assets/js/utils.js'
export default {
  data(){
    return {
      value:'',
      flag:false
    }
  },
  created(){
    clearSearchHistoryList(this)
  },
  watch:{
    value:function(newVal){
      if(newVal===''){
        clearSearchHistoryList(this) //搜索框为空则清空搜索下拉框。
      }
    }
  },
  methods:{
    onSearch:debounceInput(function(){
      if(this.flag)return;
      if(this.value===''){
        return;
      }else{
        this.$store.dispatch('inputSelect',this.value)
      }
    },300),
    clearSearchHistoryList(){
      this.flag=true
      if(this.value===''){
        return;
      }else{
        this.$store.dispatch('wordDetails',this.value)
        setTimeout(()=>{
          this.flag=false
        },300)
      }
      clearSearchHistoryList(this)
    }
  }
}
</script>

<style>
.van-search__content{
  border-radius: 5px;
}
.van-search{
  padding-bottom: 5px;
}
</style>
