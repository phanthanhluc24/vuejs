import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardVue from '@/components/DashBoard.vue'
import TeacherViewVue from '@/components/TeacherView.vue'
import StudentViewVue from '@/components/StudentView.vue'
import ScoreViewVue from '@/components/ScoreView.vue'
import AddTeacherVue from '@/components/AddTeacher.vue'
import AddStudentVue from '@/components/AddStudent.vue'
import EditTeacherVue from '@/components/EditTeacher.vue'
import EditStudentVue from '@/components/EditStudent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path:"/",
          component:DashboardVue
        },{
          path:"teacher",
          name:"teacher",
          component:TeacherViewVue
        },{
          path:"student",
          name:"student",
          component:StudentViewVue
        },
        {
          path:"course",
          component:ScoreViewVue
        },
        {
          path:"teacher/add-new",
          component:AddTeacherVue
        }
        ,
        {
          path:"teacher/edit/:id",
          component:EditTeacherVue
        }
        ,
        {
          path:"student/add-new",
          component:AddStudentVue
        }
        ,
        {
          path:"student/edit/:id",
          component:EditStudentVue
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
