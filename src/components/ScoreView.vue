<script lang="ts">
import { getSubjectApi } from '@/api/getSubject.api';
import {getScoreBySubjectApi} from "@/api/getScoreBySubject.api"
export default {
    name:"viewScore",
    data(){
        return{
            subject:[] as Array<any>,
            showTable:false,
            model:{
                parameter:{
                    student_id:null,
                    subject_id:null
                },
                subject_score:{
                    student_id:{
                        full_name:""
                    },
                    subject_id:{
                        subject:""
                    },
                    oral_test:0,
                    fifteen_min_test:0,
                    mid_term_test:0,
                    semester_exam:0,
                    id:""
                }
            }
        }
    },
    mounted() {
        this.fetchGetSubject()
        // this.fetchGetScoreBySubject()
        this.showTable
        this.averageScore()
        this.Classification()
    },
    methods:{
        fetchGetSubject(){
            getSubjectApi()
            .then((res)=>{
                this.subject=res
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        fetchGetScoreBySubject(){
            getScoreBySubjectApi(this.model.parameter.student_id,this.model.parameter.subject_id)
            .then((res)=>{
                this.showTable=true
                this.model.subject_score=res
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        averageScore(){
            const score=this.model.subject_score
            const totalScore=score.oral_test+score.fifteen_min_test+(score.mid_term_test*2)+(score.semester_exam*3)
            const averageScore=Math.floor(totalScore/7*10)/10 
            return parseFloat(averageScore.toFixed(1)) 
        },
        Classification(){
            const score=this.averageScore()
            console.log(score);
            
            let classification=""
           if (score>=0 && score<=4.5) {
                classification="Yếu"
           }else if(score>=4.6 && score<=6.5){
                classification="Trung Bình"
           }else if(score>=6.6 && score<=7.9){
                classification="Khá"
           }else if(score>=8.0 && score<=10){
                classification="Giỏi"
           }
           return classification
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
               <h5 class="text-uppercase">Welcome to view score</h5>
               <div class="find-id-student">
                <div class="form-group">
                    <label for="" class=" text-white">Id student</label>
                    <input type="number" class="input-id form-control" placeholder="Enter id student" v-model="model.parameter.student_id">
                </div>
                   <div class="form-group">
                     <label for="" class=" text-white">Subject</label>
                     <select class="form-control" v-model="model.parameter.subject_id" name="" id="">
                       <option v-for="data in subject" :key="data.id" :value="data.id">{{ data.subject }}</option>
                     </select>
                   </div>
                   <div class="form-group mt-2">
                       <br>
                       <button class="btn btn-secondary" v-if="model.parameter.student_id==0||model.parameter.student_id==null || model.parameter.subject_id==0||model.parameter.subject_id==null">Watch</button>
                       <button class="btn btn-info" @click="fetchGetScoreBySubject" v-else>Watch</button>
                   </div>
               </div>
            </div>
            <div class="card-body" v-if="showTable!=false">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Student name</th>
                            <th>Subject</th>
                            <th>Oral test</th>
                            <th>Fifteen min test</th>
                            <th>Mid term test</th>
                            <th>Semester test</th>
                            <th>Total Score</th>
                            <th>Classification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ model.subject_score.student_id.full_name }}</td>
                            <td>{{ model.subject_score.subject_id.subject }}</td>
                            <td>{{ model.subject_score.oral_test }}</td>
                            <td>{{ model.subject_score.fifteen_min_test }}</td>
                            <td>{{ model.subject_score.mid_term_test }}</td>
                            <td>{{ model.subject_score.semester_exam }}</td>
                            <td>{{ averageScore() }}</td>
                            <td>{{ Classification() }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card-header{
        background: orange;
    }
    .input-id{
        border: none;
        outline: none;
        border-radius: 6px;
        width: 250px;
        padding-left: 9px;
    }
    .find-id-student{
        display: flex;
        gap: 8px;
    }
</style>