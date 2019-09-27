<template>
  <div class="level">
    <Header :headerTitle='this.getLevelName' :backshow='false' ref='headers'>
      <template v-slot:icon>
        <van-icon name="apps-o" slot="right" class="header-icon-serach my-icon-left" @click="showPopup"/>
      </template>
    </Header>
      <LevelWord :getlevelArray='this.getlevelArray.data' v-slot="{todo}">
          <p>音标:{{todo.soundMark}}</p>
          <p>解释:{{todo.content}}</p>
      </LevelWord>
    <Left-pop ref="leftpop"></Left-pop>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LeftPop from '../components/leftPop'
import recordingDestroyed from '../components/Destroyed'
import LevelWord from '../components/levelWord'
export default {
  components:{
    LeftPop,
    LevelWord
  },
  mixins:[recordingDestroyed],
  data(){
    return {
    }
  },
  computed:{
    ...mapGetters([
      'getlevelArray',
      'recordingScrool',
      'getLevelName'
    ])
  },
  mounted(){
  },
  methods:{
    showPopup(){
      this.$refs.leftpop.showPopup()
    },
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('recordingScrool',document.documentElement.scrollTop || document.body.scrollTop);
    next()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      document.documentElement.scrollTop=vm.$store.getters.recordingScrool
      document.body.scrollTop=vm.$store.getters.recordingScrool
    })
  },
}
</script>

<style lang='less'>
  .level{
    ul{
      .levelword{
        border-bottom: 2px solid #fff;
        height: 30px;
        color: black;
        font-size: 16px;
      }
      p{
        margin: 5px 0;
        color: #afadad;
      }
    }
  }
</style>
