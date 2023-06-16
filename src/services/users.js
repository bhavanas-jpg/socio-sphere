import axios from "axios";

export const getAllUsers = async()=>{
    return await axios.get("/api/users")
}

export const followUser = async(followUserId, token) =>{
    return await axios.post(`/api/users/follow/${followUserId}`,
    {},
    {headers: {authorization: token}}
    );
};

export const unfollowUser = async(followUserId, token)=>{
    return await axios.post(`/api/users/unfollow/${followUserId}`,
    {},
    {headers: {authorization: token}}
    )
}

export const updateUser = async(userData, token)=>{
   return await axios.post("/api/users/edit",
    {userData},
    {
        headers:{
            authorization: token
        }
    })
}