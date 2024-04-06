<script lang="ts">
import {getStudentByIdApi} from "@/api/getStudentById.api"
import { getClassApi } from '@/api/getClass.api';
import {editStudentApi} from "@/api/editStudent.api"
import router from '@/router';
import { useRoute } from "vue-router";
 export default{
        name:"editStudent",
        setup(){
           const router=useRoute()
           return {router}
        },
        data(){
           return{
            classs:[] as Array<any>,
            model:{
                student:{
                    full_name:"",
                    gender:"",
                    province:"",
                    year_of_birth:"",
                    student_class:{
                        id:"",
                        class_name:""
                    },
                    password:"",
                }
            },
           }
        },
        mounted() {
            this.fetchStudentSpecific(this.$route.params.id)
            this.fetchClass()
        },
        methods:{
            fetchStudentSpecific(studentId:any){
                getStudentByIdApi(studentId)
                .then((res)=>{
                    console.log(res);
                    
                    this.model.student=res
                })
                .catch((error)=>{
                    console.log(error);
                })
            },
            fetchClass(){
                getClassApi()
                .then((res)=>{
                    this.classs=res
                })
                .catch((error)=>{
                    error
                })
            },
            handleGoBack(){
                router.go(-1)
            },
            handleEditStudent(studentId:any){
                const {id:studentClassId}=this.model.student.student_class
                editStudentApi(studentId,{...this.model.student,student_class:studentClassId})
                .then((res)=>{
                    console.log(res);
                    router.go(-1)                  
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>
<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h5 class="text-uppercase">Edit Student</h5>
            </div>
            <form action="" method="post" v-on:submit.prevent="handleEditStudent(router.params.id)">
                    <div class="card-body">
                    <div class="form-group">
                      <label for="" class="text-color">Full name</label>
                      <input type="text" v-model="model.student.full_name" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Gander</label>
                      <select class="form-control" v-model="model.student.gender" name="" id="" >
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Province</label>
                      <input type="text" v-model="model.student.province"  name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Year Of Birthday</label>
                      <input type="number" v-model="model.student.year_of_birth"  name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                        <label for="" class="text-color">Class</label>
                        <select class="form-control" v-model="model.student.student_class.id" name="" id="" >
                            <option v-for="data in classs" :key="data.id" :value="data.id" :selected="data.id==model.student.student_class.id">{{ data.class_name }}</option>
                        </select>
                    </div>
                    <div class="form-group hidden">
                      <!-- <label for="" class="text-color">Password</label> -->
                      <input type="hidden" v-model="model.student.password" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
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