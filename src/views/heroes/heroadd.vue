<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="heroName" >英雄名称</label>
            <input type="text" class="form-control" id="heroName" placeholder="输入英雄">
          </div>
          <div class="form-group">
            <label for="heroGender">性别</label>
            <input type="text" class="form-control" id="heroGender" placeholder="输入性别">
          </div>
         
          <button @click.prevent="handle" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios form 'axios';
    export default {
        methods:{
            handle(){

            }
        }
    }
</script>

<style>

</style>
