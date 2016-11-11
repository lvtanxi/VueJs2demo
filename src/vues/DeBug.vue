<style>
</style>
<template>
  <div>
    <toolbar></toolbar>
    <config-describe  v-bind:message="{desTitle:'测试',desType:'测试',desVal:'ce'}"></config-describe>
  </div>
</template>
<script>

  import Toolbar from '../components/Toolbar.vue'
  import ConfigDescribe from '../components/ConfigDescribe.vue'
  export default{
    data(){
      return {}
    },
    components: {Toolbar,ConfigDescribe},
    methods: {}
  }
</script>
