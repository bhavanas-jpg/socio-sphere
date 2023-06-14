import axios from "axios";

export const getAllPosts = async() =>{
    return await axios.get("/api/posts")
}