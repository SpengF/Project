<template>
  <div class="levelword">
    <ul>
      <li v-for="item in getlevelArray" :key="item.id">
        <van-collapse v-model="activeNames">
          <van-collapse-item :title="item.word" :name="item.id">
            <van-button type="primary">主要按钮</van-button>
            <van-button type="info">信息按钮</van-button>
          </van-collapse-item>
        </van-collapse>
        <slot :todo='item'></slot>
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
      }
    }
  }
</style>
