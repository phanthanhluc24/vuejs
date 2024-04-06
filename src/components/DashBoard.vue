<script lang="ts">
    import {getTeacherApi} from "@/api/getTeacher.api"
    import {getStudentApi} from "@/api/getStudent.api"
    import {getSubjectApi} from "@/api/getSubject.api"
export default {
  name:"dashBoard",
  data(){
    return{
      numberStudent:0,
      numberTeacher:0,
      numberCourse:0
    }
  },
  mounted() {
      this.fetchCourse()
      this.fetchStudent()
      this.fetchTeacher()
  },
  methods:{
    fetchStudent(){
      getStudentApi()
      .then((res)=>{
        this.numberStudent=res.length
      })
      .catch((error)=>{
        console.log(error);
        
      })
    },
    fetchTeacher(){
      getTeacherApi()
      .then((res)=>{
        this.numberTeacher=res.length
      })
      .catch((error)=>{
        console.log(error);
        
      })
    },
    fetchCourse(){
      getSubjectApi()
      .then((res)=>{
        this.numberCourse=res.length
      })
      .catch((error)=>{
        console.log(error);
        
      })
    }

  }
}
</script>

<template>
  <div class="container-dashboard">
    <div class="block-quantity student">
      <h3>Student</h3>
      <h4>{{ numberStudent}}</h4>
    </div>
    <div class="block-quantity teacher">
      <h3>Teacher</h3>
      <h4>{{numberTeacher}}</h4>
    </div>
    <div class="block-quantity course">
      <h3>Course</h3>
      <h4>{{ numberCourse }}</h4>
    </div>
  </div>
</template>

<style scoped>
  .container-dashboard{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin-top: 10px;
  }
  .block-quantity{
    width: 250px;
    height: 120px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .student{
    background: olive;
  }
  .teacher{
    background: olivedrab;
  }
  .course{
    background: orange;
  }
</style>
