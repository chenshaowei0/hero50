<template>
    <div>
        <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="editName">英雄名称</label>
            <input type="text" v-model="formData.name" class="form-control" id="editName" placeholder="修改名称" >
          </div>
          <div class="form-group">
            <label for="editGender">性别</label>
            <input type="text" v-model="formData.gender" class="form-control" id="editGender" placeholder="修改性别" >
          </div>
         
          <button type="submit" @click.prevent="handleEdit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props:['id'],
    data(){
        return {
            formData:{
                name:'',
                gender:''
            }
        }
    },
    mounted() {
        this.loadData();
    },
    methods:{
        loadData(){
            axios.get(`http://127.0.0.1:3002/heroes/${this.id}`)
                .then(response=> {
                    this.formData = response.data;
                })
                .catch(err=> {
                    console.log(err);
                    
                })
        },
        handleEdit(){
            axios.put(`http://127.0.0.1:3002/heroes/${this.id}`,this.formData)
                .then((response)=> {
                    // this.formData = response.data;
                    if(response.status == 200) {
                        this.$router.push('/heroes');
                    } else {
                        alert('修改失败')
                    }
                })
                .catch((err)=> {
                    console.log(err);
                })
        },
        

    }

}
</script>

<style>

</style>
