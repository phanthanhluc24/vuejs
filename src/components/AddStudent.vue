<script lang="ts">
    import {getClassApi} from "@/api/getClass.api"
    import {addStudentApi} from "@/api/addStudent.api"
    import router from "@/router"
    export default{
        name:"addStudent",
        data(){
           return{
            classs:[] as Array<any>,
            model:{
                student:{
                    full_name:"",
                    gender:"",
                    province:"",
                    year_of_birth:"",
                    password:"",
                    student_class:""
                }
            }
           }
        },
        mounted() {
            this.fetchClass()
        },
        methods:{
            fetchClass(){
                getClassApi()
                .then((res)=>{
                    this.classs=res
                })
                .catch((error)=>{
                    console.log(error);
                })
            },
            handleAddStudent(e:any){
                e.preventDefault();
                addStudentApi(this.model.student)
                .then((res)=>{
                    router.push({name:"student"})
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
                <h5 class="text-uppercase">Add new student</h5>
            </div>
            <form action="" method="post" @submit="handleAddStudent">
                    <div class="card-body">
                    <div class="form-group">
                      <label for="" class="text-color">Full name</label>
                      <input type="text" v-model="model.student.full_name" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Gander</label>
                      <select class="form-control" name="" id="" v-model="model.student.gender">
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Province</label>
                      <input type="text"  v-model="model.student.province" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Year Of Birthday</label>
                      <input type="number"  v-model="model.student.year_of_birth" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                        <label for="" class="text-color">Subject</label>
                        <select class="form-control" name="" id="" v-model="model.student.student_class">
                            <option v-for="(data,index) in classs" :key='index' :value="data.id">{{ data.class_name }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Password</label>
                      <input type="password"  v-model="model.student.password" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
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