import axios from "axios";

export const getAllUsers = async()=>{
    return await axios.get("/api/users")
}