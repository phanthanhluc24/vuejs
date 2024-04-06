<template>
    <div class="mt-3 pb-2">
        <router-link to="/teacher/add-new" class="btn btn-success">Add Teacher</router-link>
        <table class="table table-bordered">
            <thead class="text-uppercase font-weight-bold">
                <tr>
                    <th>STT</th>
                    <th>Full name</th>
                    <th>Gender</th>
                    <th>Province</th>
                    <th>Subject</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data,index) in teacher" :key="index" >
                    <td>{{ index+1 }}</td>
                    <td>{{data.full_name }}</td>
                    <td>{{ data.gender }}</td>
                    <td>{{ data.province }}</td>
                    <td>{{ data.subject_id.subject }}</td>
                    <td class="d-flex justify-content-center align-items-center">
                        <router-link :to="`/teacher/edit/${data.id}`" type="button" class="btn btn-warning mr-1">Edit</router-link>
                        <button type="button" class="btn btn-danger ml-2">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
    import {getTeacherApi} from "@/api/getTeacher.api"

    export default{
        name:"teacherApi",
        data(){
            return {
                teacher:[] as Array<any>
            }
        },
        mounted(){
            this.fetchTeacher()
        },
        methods:{
            fetchTeacher(){
                getTeacherApi()
                .then((res)=>{
                    this.teacher=res
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>
<style scoped>
</style>