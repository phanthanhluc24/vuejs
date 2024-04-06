import { URL } from "@/helper/URL"
export const getSubjectApi =async () => {
    const response=await fetch(URL+"subject",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    return response.json()
}
