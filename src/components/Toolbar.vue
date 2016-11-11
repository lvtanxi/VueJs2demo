<style>
  .center-block{
        margin-bottom: 10px;
    }
  .center-block{
    border-bottom: 1px solid #9d9d9d;
  }
</style>
<template>
  <div class="center-block">
    <nav>
      <ul class="pager">
        <li class="previous">
          <router-link to="/home"><a href="#">&larr; 返回</a></router-link>
        </li>
        <li class="center">
            <span >{{title}}事例</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        title: this.$route.params.title
      }
    }
  }
</script>
