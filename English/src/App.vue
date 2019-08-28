<template>
  <div id="app" >
    <Header headerTitle='主页' :backshow='false' ref='headers'>
      <template v-slot:icon>
        <van-icon name="apps-o" slot="right" class="header-icon-serach my-icon-left" @click="showPopup"/>
      </template>
    </Header>
    <router-view id="main"/>
    <Footer></Footer>
    <van-popup v-model="show" position="left" :style="{height:'100%',width:'35%'}">
      <ul class="sliderContent">
        <li>asd</li>
        <li>asd</li>
        <li>sss</li>
        <li>ssss</li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      show:false,
    }
  },
  methods:{
    showPopup(){
      this.show=!this.show;
    },
  }
}
</script>

<style lang='less'>
  #main{
    margin: 50px 0;
  }
  .sliderContent{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    li{
      padding: 10px;
    }
  }
</style>
