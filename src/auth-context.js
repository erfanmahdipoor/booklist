import React from "react";
const AuthContext =React.createContext({
    auth:true,
    login:()=>{}
})
export default AuthContext