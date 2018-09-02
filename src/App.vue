<template>
  <div id="myApp">
      <!-- 头部 -->
      <app-header></app-header>
  <div class="container-fluid">
    <div class="row">
        <!-- 侧边栏 -->
        <app-sidebar></app-sidebar>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <!-- 主内容区域 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader';
import AppSidebar from './components/AppSidebar'

export default {
  linkActiveClass:'active',
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    AppHeader,
    AppSidebar
  }
}
</script>

<style>
/* #myApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
