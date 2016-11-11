<style>
  h3:before {
    content: "#";
    color: #42b983;
    font-weight: bold;
  }
</style>
<template>
  <div class="content">
    <h3>{{message.desTitle}}</h3>
    <ul>
      <li><p><strong>类型：</strong> <code>{{message.desType}}</code></p>
      </li>
      <li><p><strong>默认值：</strong> <code>{{message.desVal}}</code></p>
      </li>
      <li><p><strong>用法：</strong></p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        xx:"sadfasdf"
      }
    },
    props:{
      message: {
        type: Object,
        default () {
          return {desTitle: "" ,desType:"",desVal:""}
        }
      }
    },
    components: {},
    methods: {},
    created:function () {
      console.log(this.message.desTitle);
    }
  }
</script>
