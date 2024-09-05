import { createContext } from "react";
import app from "../FireBase/Firebase.init";
import { getAuth } from "firebase/auth";
export const AuthContext=createContext(null);
const auth=getAuth(app);
const AuthProvider = ({children}) => {

    const AuthInfo={}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;