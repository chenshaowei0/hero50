import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

import axios from 'axios';
import heroes from './views/heroes/list.vue';
import weapons from './views/weapons/list.vue';
import equips from './views/equips/list.vue';
import heroadd from './views/heroes/heroadd.vue'
Vue.use(VueRouter); //注册
//创建router对象
// axios.defaluts.baseURL='http://127.0.0.1:3000/';
const router = new VueRouter({

  //创建路由规则
  routes:[
    {path:'/',component:heroes},
    {path:'/heroes',component: heroes},
    {path:'/weapons',component: weapons},
    {path:'/equips',component: equips},
    {path:'/heroes/add',component:heroadd}
  
  ]
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
