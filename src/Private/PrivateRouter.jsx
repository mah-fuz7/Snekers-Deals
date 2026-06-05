import {  useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { MoonLoader } from "react-spinners";

const PrivateRouter = ({children}) => {
    const{user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return <MoonLoader></MoonLoader>
    }
    if(!user){
        return(
            <Navigate
  to="/login"
  state={location}
  replace
/>
        )
    }
    return children
};

export default PrivateRouter;