import axios from "axios";

//create axios function
const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
})

//cretaing a get function

export const getdata=()=>{
    return api.get('users')
}

export const getdata2=()=>{
    return api.get('comments')
}