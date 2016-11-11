<template>
  <div id="app">
    <form class="form-horizontal" role="form">

      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">邮箱：</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" placeholder="请填写邮箱" v-model="user.email">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">密码：</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="user.pwd">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox" v-model="remember">记住密码
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <input type="button" class="btn btn-default center-block" @click="doLogin" value="登录试一试">
        </div>
      </div>
    </form>
    <loading v-show="show"></loading>
    <p class="text-primary" v-for="item in doFilter(numbers)" v-text="item"></p>
  </div>

  </div>
</template>

<script>
  import Store from '../js/Store'
  import Loading from '../components/Loading.vue'
  export default {
    data(){
      return {
        user: Store.fetch('{}'),
        remember: true,
        show: false,
        numbers: [ 1, 2, 3, 4, 5 ]
      }
    },
    methods: {
      doLogin (){
        if (this.remember) {
          Store.save(this.user)
        } else {
          Store.delete(Store.STORAGE_KEY)
        }
        this.show = !this.show
        let that = this;
        this.$http.get('http://apis.baidu.com/apistore/weatherservice/citylist?cityname=朝阳').then((response) => {
          that.show = !that.show
          that.$router.push("/home")
        }, (error) => {
          console.log("error");
        });
      },
      doFilter(array){
        return array.filter(item => item%2===0)
      }
    },
    components: {
      Loading
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  form {
    margin: 60px;
  }


</style>
