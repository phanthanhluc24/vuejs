import { URL } from "../helper/URL"
export const getStudentApi = async() => {
    const response=await fetch(URL+"student",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    return response.json();
}
