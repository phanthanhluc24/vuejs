import { URL } from "../helper/URL"
export const getStudentByIdApi = async(id:any) => {
    const response=await fetch(URL+`student/${id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    return response.json();
}