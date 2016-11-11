<style>
</style>
<template>
  <div>
    <toolbar></toolbar>
    <h3 v-text="message"></h3>
    <hr>
    <h4>示例:</h4>
    <pre>
        export default{
          data(){
            return {
              message:"this message is from data"
            }
          },
        }
      </pre>
    <h4>详情:</h4>
    <p class="text-primary">
      Vue 实例的数据对象。
      Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data
      的属性能够响应数据变化。<strong>对象必须是纯粹的对象(含有零个或多个的key/value对)</strong>
      ：浏览器 API 创建的原生对象，原型上的属性会被忽略。大概来说，data 应该只能是数据 -
      不推荐观察拥有状态行为的对象。
    </p>
  </div>
</template>
<script>
  import Toolbar from '../components/Toolbar.vue'
  export default{
    data(){
      return {
        message: "this message is from data"
      }
    },
    methods: {},
    components: {Toolbar},
  }
</script>
