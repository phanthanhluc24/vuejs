<script lang="ts">
import {getTeacherByIdApi} from "@/api/getTeacherById.api"
import { getSubjectApi } from '@/api/getSubject.api';
import {editTeacherApi} from "@/api/editTeacher.api";
import router from '@/router';
import { useRoute } from "vue-router";
 export default{
        name:"addTeacher",
        setup(){
            const router=useRoute();
            return {router}
        },
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
                    subject_id:{
                        id:"",
                        subject:""
                    }
                }
            }
           }
        },
        mounted() {
            this.fetchTeacherSpecific(this.$route.params.id)
            this.fetchSubject()
        },
        methods:{
            fetchTeacherSpecific(teacherId:any){
                getTeacherByIdApi(teacherId)
                .then((res)=>{
                    this.model.teacher=res
                })
                .catch((error)=>{
                    console.log(error);
                })
            },
            fetchSubject(){
                getSubjectApi()
                .then((res)=>{
                    this.subject=res
                })
                .catch((error)=>{
                    error
                })
            },
            handleGoBack(){
                router.go(-1)
            },
            handleEditTeacher(idTeacher:any){
                const {id:subjectId}=this.model.teacher.subject_id
                editTeacherApi(idTeacher,{...this.model.teacher,subject_id:subjectId})
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
                <h5 class="text-uppercase">Edit Teacher</h5>
            </div>
            <form action="" method="post" v-on:submit.prevent="handleEditTeacher(router.params.id)">
                    <div class="card-body">
                    <div class="form-group">
                      <label for="" class="text-color">Full name</label>
                      <input type="text" v-model="model.teacher.full_name" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Gander</label>
                      <select class="form-control" v-model="model.teacher.gender" name="" id="" >
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Province</label>
                      <input type="text" v-model="model.teacher.province"  name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Year Of Birthday</label>
                      <input type="number" v-model="model.teacher.year_of_birth"  name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                      <label for="" class="text-color">Salary</label>
                      <input type="number" v-model="model.teacher.salary" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                    <div class="form-group">
                        <label for="" class="text-color">Subject</label>
                        <select class="form-control" v-model="model.teacher.subject_id.id" name="" id="" >
                            <option v-for="data in subject" :key="data.id" :value="data.id" :selected="data.id==model.teacher.subject_id.id">{{ data.subject }}</option>
                        </select>
                    </div>
                    <div class="form-group hidden">
                      <!-- <label for="" class="text-color">Password</label> -->
                      <input type="hidden" v-model="model.teacher.password" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
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