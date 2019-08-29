<template>
  <div class="level">
    <Header headerTitle='主页' :backshow='false' ref='headers'>
      <template v-slot:icon>
        <van-icon name="apps-o" slot="right" class="header-icon-serach my-icon-left" @click="showPopup"/>
      </template>
    </Header>
    {{getlevelArray}}
    <Left-pop ref="leftpop"></Left-pop>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LeftPop from '../components/leftPop'
export default {
  components:{
    LeftPop
  },
  data(){
    return {
      
    }
  },
  computed:{
    ...mapGetters([
      'getlevelArray'
    ])
  },
  mounted(){
    
  },
  methods:{
    showPopup(){
      this.$refs.leftpop.showPopup()
    },
  },
}
</script>

<style>

</style>
