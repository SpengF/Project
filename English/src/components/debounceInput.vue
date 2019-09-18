<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="搜索单词"
        @keydown="onSearch"
      />
    </form>
  </div>
</template>

<script>
import {debounceInput} from '../assets/js/utils.js'
export default {
  data(){
    return {
      value:''
    }
  },
  methods:{
    onSearch:debounceInput(()=>{
        console.log(111)
      },500)
    }
  
}
</script>

<style>
.van-search__content{
  border-radius: 20px;
}
</style>
