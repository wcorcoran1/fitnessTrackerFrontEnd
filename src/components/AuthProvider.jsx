import AuthContext from "../AuthContext";
import { useState, useEffect } from "react";

const AuthProvider = ({children})=>{
    const [user, setUser] = useState({})
    const [token, setToken] = useState(null)
}

// useEffect(()=>{
//     async function getUser(){
//         if(localStorage.getItem("token")){
            
//         }
//     }
// },[token]);

export default AuthProvider
