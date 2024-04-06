<script lang="ts">
    import {getSubjectApi} from "@/api/getSubject.api"
    import {addTeacherApi} from "@/api/addTeacher.api"
    import router from "@/router"
    export default{
        name:"addTeacher",
        data(){
           return{
            subject:[] as Array<any>,
            model:{
                teacher:{
                    full_name:"",
                    gender:"",
                    province:"",
                    year_of_birth:"",
                    salary:"",
                    password:"",
                    subject_id:""
                }
            }
           }
        },
        mounted() {
            this.fetchSubject()
        },
        methods:{
            fetchSubject(){
                getSubjectApi()
                .then((res)=>{
                    this.subject=res
                })
                .catch((error)=>{
                    console.log(error);
                })
            },
            handleAddTeacher(e:any){
                e.preventDefault();
                addTeacherApi(this.model.teacher)
                .then((res)=>{
                    router.push({name:"teacher"})
                    console.log(res);
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
            ,
            handleGoBack(){
                router.go(-1)
            }
        }
    }
</script>
<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h5 class="text-uppercase">Add new Teacher</h5>
            </div>
            <form action="" method="post" @submit="handleAddTeacher">
                    <div class="card-body">
                    <div class="form-group">
                      <label for="" class="text-color">Full name</label>
                      <input type="text" v-model="model.teacher.full_name" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Gander</label>
                      <select class="form-control" name="" id="" v-model="model.teacher.gender">
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Province</label>
                      <input type="text"  v-model="model.teacher.province" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Year Of Birthday</label>
                      <input type="number"  v-model="model.teacher.year_of_birth" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Salary</label>
                      <input type="number"  v-model="model.teacher.salary" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                        <label for="" class="text-color">Subject</label>
                        <select class="form-control" name="" id="" v-model="model.teacher.subject_id">
                            <option v-for="(data,index) in subject" :key='index' :value="data.id">{{ data.subject }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Password</label>
                      <input type="password"  v-model="model.teacher.password" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-center align-items-center form-group">
                        <button type="button" @click="handleGoBack" class="btn btn-danger mr-1">Cancel</button>
                        <button type="submit" class="btn btn-success ml-2">Ok</button>
                    </div>
                </div>
                </form>
        </div>
    </div>
</template>

<style scoped>
.container{
    width: 750px;
}
.text-color{
    color: orangered;
    font-weight: 600;
}
</style>