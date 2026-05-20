import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import {  createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from "firebase/auth";

const AuthProvider = ({children}) => {
    
    
    // USER STATE
    const [user,setUser]=useState(null)
    // LOADING STATE
    const [loading,setLoading]=useState(true)
// GOOGLE PROVIDER
const Provider= new GoogleAuthProvider()

    // GOOGLE SIGN IN FUNC
   const SignInWithGoogleFunc = () =>{
    setLoading(true)
    return signInWithPopup(auth,Provider)
   }
    // EMAIL-PASSWORD SIGN IN
    const signInWithEmailPasswordFunc = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // UPDATE USER PROFILE FUNC
    const updateProfileFunc = (name,url) => {
        updateProfile(auth.currentUser ,{
            displayName:name,
            photoURL:url,
        })
       
      
    }

    // LOG IN FUNC

const loginFunc = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)

};
// FORGOT PASSWORD
const forgotPasswordFunc =(email)=>{
    return sendPasswordResetEmail(auth,email)
}
// DELETE USER
const deleteUserFunc = () =>{
    setLoading(true)
    const currentUser=auth.currentUser
    return deleteUser(currentUser)
}
// SIGN OUT FUNC
const signOutFunc = () =>{
setLoading(true)
return signOut(auth)
}
    const Authinfo ={
SignInWithGoogleFunc,
loading,
setLoading,
user,
setUser,
signInWithEmailPasswordFunc,
updateProfileFunc,
loginFunc,
forgotPasswordFunc,
deleteUserFunc,
signOutFunc
    }

    // USER STATE CHANGE
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
   setUser(currentUser)
   setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    
    return <AuthContext value={Authinfo}>
        {children}
    </AuthContext>;

};

export default AuthProvider;