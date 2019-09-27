<template>
  <div class="wordDetails">
    <ul>
      <li class="word">
        {{wordDetailList.wordDetail.word}}
      </li>
      <li class="soundmark">
        <span>英</span>{{wordDetailList.wordDetail.wordSound.englishSentence.soundmark}}<van-icon name="volume-o" @click="lisetnWord(wordDetailList.wordDetail.wordSound.englishSentence.pronunciation)"/>
      </li>
      <li class="wordIdea">
        <p v-for="item in wordDetailList.wordDetail.wordIdea" :key="item.length">
          <span class="wordIdeaNature">{{item.nature}}</span>
          {{item.mean}}
        </p>
      </li>
      <li class="sentence">
        <div v-for="item in wordDetailList.wordDetail.sentence" :key="item.length">
          <p class="chineseSentence">{{item.chineseSentence}}</p>
          <p class="englishSentence">{{item.englishSentence}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    wordDetailList:{
      type:Object,
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
  ul li{
    padding-top: 10px;
    p{ 
      margin: 0;
    }
  }
  .word{
    font-weight: 700;
    color: #565656;
    padding-top: 10px;
  }
  .soundmark{
    display: flex;
    align-items: center;
    span{
      padding-right: 10px;
    }
    i{
      padding-left: 10px;
    }
  }
  .wordIdea{
    color: #929292cc;
    .wordIdeaNature{
      padding-right: 10px;
      color: #565656;
    }
  }
  .sentence{
    div{
      padding-top: 10px;
    }
    .chineseSentence{
      color: #736363;
    }
    .englishSentence{
      padding: 5px 0 10px;
      border-bottom: 1px solid #ccc;
      color: #afadad;
    }
  }
}
.van-skeleton-loading{
  margin-top: 50px;
}
</style>
