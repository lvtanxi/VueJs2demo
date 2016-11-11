import Vue from 'vue'
import Home from './vues/Home.vue'
import Login from './vues/Login.vue'
import DeBug from './vues/DeBug.vue'
import Data from './vues/Data.vue'
import VueRouter from 'vue-router'
import VueResource  from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)


Vue.http.interceptors.push((request, next) => {
  request.headers.append("apikey", "8f6daecf84cbae393f48b080ae899728")
  next((response) => {
    response.body = eval("'" + response.body + "'");
  });
});


const router = new VueRouter({
  routes: [
    {path: '/data/:title', component: Data},
    {path: '/debug/:title', component: DeBug},
    {path: '/home', component: Home},
    {path: '/login', component: Login}
  ]
})

const app = new Vue({
  el: '#app',
  router
}).$mount('#app')

// 注册
Vue.filter('my-filter', function (value) {
  return `my-filter ${value} my-filter`
})


router.push("/login")


