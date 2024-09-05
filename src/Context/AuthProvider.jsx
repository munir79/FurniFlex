import { createContext, useEffect, useState } from "react";
import app from "../FireBase/Firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext=createContext(null);
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);

   const CreateUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
   }

   const Login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
   }

   const Logout=()=>{
    
    return signOut(auth);
}

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser);
         
         
      } )

      return()=>{
     unsubscribe();
      }
  },[] )



    const AuthInfo={CreateUser,Login,user,Logout}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;