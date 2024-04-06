import { URL } from "../helper/URL"
export const editTeacherApi = async(id:any,data:any) => {
    const response=await fetch(URL+`teacher/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })

    return response.json();
}