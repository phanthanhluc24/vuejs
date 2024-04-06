<script lang="ts">
import {useRoute } from 'vue-router';
import { computed } from 'vue';
export default{
  setup(){
        const router=useRoute()
        const currentUrl=computed(()=>router.path)
        return {currentUrl,router}
      },
}
</script>

<template>
  <main>
    <div class="containers">
      <div class="container-navbar">
        <div class="navbar">
          <ul class="navbar-ul">
            <router-link to="/" :class="[`navbar-li`, currentUrl==='/'?'background-color':'']"> Dashboard</router-link>
            <router-link to="/teacher" :class="[`navbar-li`, currentUrl==='/teacher'||currentUrl==='/teacher/add-new'|| currentUrl===`/teacher/edit/${router.params.id}`?'background-color':'']">Teachers</router-link>
            <router-link to="/student" :class="[`navbar-li`, currentUrl==='/student'||currentUrl==='/student/add-new'|| currentUrl===`/student/edit/${router.params.id}`?'background-color':'']">Students</router-link>
            <router-link to="/course" :class="[`navbar-li`, currentUrl==='/course'?'background-color':'']">Checkpoint</router-link>
          </ul>
        </div>
      </div>
      <div class="container-main-view">
        <RouterView></RouterView>
      </div>
    </div>
  </main>
</template>

<style scoped>
.containers{
  display: grid;
  grid-template-columns: 10% 90%;
}
.container-navbar {
  height: 100vh;
  width: 145px;
  background-color: rgb(19, 29, 29);
  padding: 0; /* Thêm padding: 0 để loại bỏ padding mặc định */
  margin: 0; /* Thêm margin: 0 để loại bỏ margin mặc định */
}

.navbar-ul {
  list-style: none;
  padding: 0;
}
.navbar-ul .navbar-li{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.navbar-li {
  line-height: 20px;
  height: 40px;
  width: 100%;
  color: orange;
  text-transform: uppercase;
}

.navbar-li:hover {
  cursor: pointer;
  border-radius:4px;
  border: 1px solid rgb(255, 81, 0);
  color: #fff;
}

a{
  text-decoration: none;
}

.background-color{
  border-radius: 4px;
  background-color: rgb(248, 82, 6);
  color: white;
}

.container-main-view{
  margin-left: 10px;
}
</style>
