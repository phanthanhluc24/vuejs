import { URL } from "@/helper/URL"

export const addStudentApi =async (data:any) => {
    const response=await fetch(URL+"student",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })

    return response.json()
}
