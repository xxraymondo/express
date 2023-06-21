import fetch from "node-fetch";

const _fetch = (url, method = "GET", { body, headers } = {}) =>
  fetch(url, {
    method,
    body,
    headers,
  }).then((res) => res.json());


export const CreateProduct =async(product)=>{
return _fetch("https://api.escuelajs.co/api/v1/products/","POST",{
    body:JSON.stringify(product),
    headers:{
        "Content-type":"application/json",
    },
})
}
export const SearchForProduct =async(id)=>{
    return _fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
}
export const DeleteProduct =async(id)=>{ 
   return _fetch(`https://api.escuelajs.co/api/v1/products/${id}`,"DELETE")
}
export const GetProducts= async()=>{
    return _fetch(`https://api.escuelajs.co/api/v1/products/`)
}
export const UpdateProduct= async(id,product)=>{
    return _fetch(`https://api.escuelajs.co/api/v1/products/${id}`,"PUT",{
        body:JSON.stringify(product),
        headers:{
            "Content-Type":"application/json"
        }
    })
}