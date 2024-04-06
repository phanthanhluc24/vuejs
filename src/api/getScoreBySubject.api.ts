import { URL } from "../helper/URL"
export const getScoreBySubjectApi = async(student_id:any,subject_id:any) => {
    const response=await fetch(URL+`score/${student_id}/${subject_id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    return response.json();
}