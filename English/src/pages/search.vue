<template>
  <div class="search">
    <Header headerTitle='搜索' :backshow='false' ref='headers'>
    </Header>
    <debounce-input></debounce-input>
    <search-history-list :search-history-list='inputArray.arr'></search-history-list>
    <van-skeleton :title="false" :row="5" class="van-skeleton-loading" v-show="vanSkeletonLoading"/>
    <word-detail :wordDetailList='wordDetailList'></word-detail>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import debounceInput from '../components/debounceInput'
import searchHistoryList from '../components/searchHistoryList'
import wordDetail from '../components/wordDetail'
export default {
  components:{
    debounceInput,
    searchHistoryList,
    wordDetail
  },
  data(){
    return {
    }
  },
  created(){
  },
  computed:{
    ...mapGetters({
      inputArray:'inputSelect',
      wordDetailList:'wordDetails',
      vanSkeletonLoading:'vanSkeletonLoading'
    })
  },
  methods:{
    
  },
  beforeRouteEnter(to,from,next){
    next(()=>{
      document.documentElement.scrollTop=0
      document.body.scrollTop=0
    })
  }
}
</script>

<style>
  
</style>
