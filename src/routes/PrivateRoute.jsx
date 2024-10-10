import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { RingLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {

   const {user, loading} = useContext(AuthContext)

   if(loading){
      return <div className="w-full h-screen flex items-center justify-center">
         <RingLoader color="#7f25b6" />
      </div>
   }

   if(user){
      return children
   }

   return <Navigate to='/signIn'></Navigate>
};

export default PrivateRoute;