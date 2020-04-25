import * as axios from "axios"

let instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "006b2188-eaae-4c23-a8db-8a54963062c6"
    }
});

export let Api = {
    getUsers(page, count) {
        return instance.get(`users?page=${page}&count=${count}`)
    },
    unFollowed(id) {
        return instance.delete(`follow/${id}`)
    },
    upFollowed(id) {
        return instance.post(`follow/${id}`)
    },
    profilePage(userId){
        return instance.get(`profile/${userId}`)
    },
    authMe(){
        return instance.get(`auth/me`)
    }
};





/*
export const getUsers = (page,count) =>{
    return instance.get(`/users?page=${page}&count=${count}`)
};
export const getPageUsers = (page,count) =>{
    return instance.get(`/users?page=${page}&count=${count}`)
};*/


/*   axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,{
                                   withCredentials:true,
                                   headers:{
                                       "API-KEY" : "006b2188-eaae-4c23-a8db-8a54963062c6"}
                               })*/