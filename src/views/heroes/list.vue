<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in list" :key="item.id"> 
                <td>{{index + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                  <a href="edit.html">编辑</a>
                  &nbsp;&nbsp;
                  <a href="javascript:window.confirm('Are you sure?')">删除</a>
                </td>
              </tr>
              <tr>
                <td colspan="4">暂无数据</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data(){
      return {

      }
    },
    mounted() {
      this.loadData();
    },
    methods:{
      loadData(){
        axios.get('heroes')
          .then((response)=>{
            console.log(response);
          })
          .catch((err)=>{
            console.log(err)
          })
      }
    }
  }
</script>

<style>

</style>
