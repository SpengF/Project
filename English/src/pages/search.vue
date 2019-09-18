<template>
  <div class="search">
    <Header headerTitle='搜索' :backshow='false' ref='headers'>
    </Header>
    <debounce-input></debounce-input>
  </div>
</template>

<script>
import debounceInput from '../components/debounceInput'
export default {
  components:{
    debounceInput
  }
}
</script>

<style>

</style>
