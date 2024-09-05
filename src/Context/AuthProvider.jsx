import { createContext } from "react";
import app from "../FireBase/Firebase.init";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext=createContext(null);
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    
   const CreateUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
   }

   const Login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
   }

    const AuthInfo={CreateUser,Login}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;