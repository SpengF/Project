<template>
  <div class="search">
    <Header headerTitle='搜索' :backshow='false' ref='headers'>
    </Header>
    <debounce-input></debounce-input>
    <search-history-list :search-history-list='inputArray.arr'></search-history-list>
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
  computed:{
    ...mapGetters({
      inputArray:'inputSelect',
      wordDetailList:'wordDetails'
    })
  },
  methods:{
    
  }
}
</script>

<style>

</style>
