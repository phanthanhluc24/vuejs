import { URL } from "../helper/URL"
export const editStudentApi = async(id:any,data:any) => {
    const response=await fetch(URL+`student/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })

    return response.json();
}