import { URL } from "../helper/URL"
export const getClassApi = async() => {
    const response=await fetch(URL+"class",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    return response.json();
}
