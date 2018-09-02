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
                  <!-- <a href="edit.html" >编辑</a> -->
                  <router-link :to="'/heroes/edit/' + item.id">编辑</router-link>
                  &nbsp;&nbsp;
                  <a href="javascript:;" @click="handleDel(item.id)" >删除</a>
                </td>
              </tr>
              <tr v-if="list.length == 0">
                <td colspan="4">暂无数据</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  // console.dir(axios);
  export default {
    data(){
      return {
        list:[]
      }
    },
    mounted() {
      this.loadData();
    },
    methods:{
      loadData(){
        axios.get('http://127.0.0.1:3002/heroes')
          .then((response)=>{
            this.list = response.data;
            console.log(response);
          })
          .catch((err)=>{
            console.log(err)
          })
      },
      handleDel(id){
        axios.delete(`http://127.0.0.1:3002/heroes/${id}`)
          .then((response)=>{
            console.log(response);
            if(response.status == 200) {
              this.loadData();
            } else {
              alert('删除错误');
            }
          })
          .catch((err)=>{
            console.log(err);
          })
      }
    }
  }
</script>

<style>

</style>
