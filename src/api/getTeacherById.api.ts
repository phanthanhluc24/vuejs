import { URL } from "../helper/URL"
export const getTeacherByIdApi = async(id:any) => {
    const response=await fetch(URL+`teacher/${id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    return response.json();
}