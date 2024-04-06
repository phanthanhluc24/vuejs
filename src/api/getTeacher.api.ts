import { URL } from "../helper/URL"
export const getTeacherApi = async() => {
    const response=await fetch(URL+"teacher",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    return response.json();
}
