<template>
  <div class="wordDetails">
    <van-skeleton :title="false" :row="5" class="van-skeleton-loading" v-show="vanSkeletonLoading"/>
    <ul>
      <li>
        {{wordDetailList.wordDetail.word}}
        <van-icon name="volume-o" @click="lisetnWord(wordDetailList.wordDetail.pronunciation)"/>
      </li>
      <li>
        <p>词义：</p>
        <p v-for="item in wordDetailList.wordDetail.wordIdea" :key="item.length">
          {{item.nature}}
          {{item.mean}}
        </p>
      </li>
      <li>
        <p>例句：</p>
        <p v-for="item in wordDetailList.wordDetail.sentence" :key="item.length">
          {{item.chineseSentence}}<br/>
          {{item.englishSentence}}
        </p>
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    wordDetailList:{
      type:Object
    }
  },
  computed:{
    vanSkeletonLoading:function(){
      return this.$store.getters.vanSkeletonLoading
    }
  },
  methods:{
    lisetnWord(e){
      let lisetnWord = new Audio(e);
      lisetnWord.play();
    }
  }
}
</script>

<style lang='less'>
.wordDetails{
  padding: 0 12px;
}
.van-skeleton-loading{
  margin-top: 50px;
}
</style>
