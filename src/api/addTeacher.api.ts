import { URL } from "@/helper/URL"

export const addTeacherApi =async (data:any) => {
    const response=await fetch(URL+"teacher",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })

    return response.json()
}
