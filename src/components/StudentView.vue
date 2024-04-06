<template>
    <div class="mt-3 pb-2">
        <router-link to="/student/add-new" class="btn btn-success">Add Student</router-link>
        <table class="table table-bordered">
            <thead class="text-uppercase font-weight-bold">
                <tr>
                    <th>STT</th>
                    <th>Full name</th>
                    <th>Gender</th>
                    <th>Province</th>
                    <th>Class</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data,index) in students" :key="index" >
                    <td>{{ index+1 }}</td>
                    <td>{{data.full_name }}</td>
                    <td>{{ data.gender }}</td>
                    <td>{{ data.province }}</td>
                    <td>{{ data.student_class.class_name }}</td>
                    <td class="d-flex justify-content-center align-items-center">
                        <router-link :to="`/student/edit/${data.id}`" type="button" class="btn btn-warning mr-1">Edit</router-link>
                        <button type="button" class="btn btn-danger ml-2">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
    import {getStudentApi} from "@/api/getStudent.api"

    export default{
        name:"teacherApi",
        data(){
            return {
                students:[] as Array<any>
            }
        },
        mounted(){
            this.fetchStudent()
        },
        methods:{
            fetchStudent(){
                getStudentApi()
                .then((res)=>{
                    this.students=res
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