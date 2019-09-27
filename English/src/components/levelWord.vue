<template>
  <div class="levelword">
    <ul>
      <li v-for="item in getlevelArray" :key="item.id">
        <van-collapse v-model="activeNames">
          <van-collapse-item :title="item.word" :name="item.id">
            <van-button type="danger">删除</van-button>
            <van-button type="info">收藏</van-button>
          </van-collapse-item>
        </van-collapse>
        <div @click="turnToSearch(item.word)">
          <slot :todo='item'></slot>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeNames: ['1']
    }
  },
  props:{
    getlevelArray:{
      type:Array,
    }
  },
  methods:{
    turnToSearch(e){
      this.$store.dispatch('wordDetails',e)
      this.$router.push({name:'levelWordDetail'})
    }
  }
}
</script>

<style lang='less'>
  .levelword{
    ul{
      padding: 10px 20px;
      font-size: 14px;
      li{
        background-color: #f9f9f9;
        border-radius: 7px;
        margin-bottom: 15px;
        padding: 8px;
        box-shadow: 0px 4px 10px -7px;
        position: relative;
      }
      .van-collapse-item {
          border-bottom: 2px solid #fff;
          border-top: 2px solid #fff;
      }
      .van-cell{
        background-color: transparent;
        font-size: 16px;
        padding: 10px 0;
      }
      .van-collapse-item__content{
        background-color: transparent;
        display: flex;
        padding: 5px;
        .van-button{
          flex: 1;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
</style>
