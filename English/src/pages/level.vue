<template>
  <div class="level">
    {{id}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  mounted(){
    // console.log(this.$route.params.id)
  },
  computed:{
    id(){
      this.$store.dispatch('assignmentLevel',this.$route.params.id)
      return this.$store.getters.getlevelArray;
    }
  }
}
</script>

<style>

</style>
