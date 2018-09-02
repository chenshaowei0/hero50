<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="heroName" >英雄名称</label>
            <input type="text" v-model = "formData.name" class="form-control" id="heroName" placeholder="输入英雄">
          </div>
          <div class="form-group">
            <label for="heroGender">性别</label>
            <input type="text" v-model = "formData.gender" class="form-control" id="heroGender" placeholder="输入性别">
          </div>
         
          <button @click.prevent="handle" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                formData:{
                    name:'',
                    gender:''
                }
            }
        },
        methods:{
            handle(){
                axios.post('http://127.0.0.1:3002/heroes', this.formData)
                    .then((response)=>{
                        console.log(response);
                        if(response.status == 201) {
                            console.log('添加成功')
                            this.$router.push('/heroes');
                        } else {
                            alert('添加失败')
                        }
                    })
                    .catch((err)=> {
                        console.log(err);
                    })
            }
        }
    }
</script>

<style>

</style>
