import { base_url } from "./BaseUrl"
import { commonRequest } from "./CommonStructure"



export const addImageApi=async(bodyData)=>{
    return await commonRequest('POST',`${base_url}/images`,bodyData)
  }
  
  
  export const accessImageApi=async()=>{
     return await commonRequest('GET',`${base_url}/images`,{}) 
  }

  export const deleteImageApi=async(id)=>{
   return await commonRequest('DELETE',`${base_url}/images/${id}`,{})
}
  