import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import UpdateProduct from "../components/UpdateProduct";
import ErrorPage from "../components/ErrorPage";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import Users from "../components/Users";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement:<ErrorPage/>,
      children:[
         {
            index:true,
            element:<Home/>
         },
         {
            path:'/addProduct',
            element:<PrivateRoute><AddProduct/></PrivateRoute>
         },
         {
            path:'/signIn',
            element:<SignIn/>
         },
         {
            path:'/signUp',
            element:<SignUp/>
         },
         {
            path:'/users',
            element:<PrivateRoute><Users/></PrivateRoute>,
            loader:() => fetch('https://coffee-server-nine-sand.vercel.app/users')
         }
      ]
   },
   {
      path:"/updateProduct/:id",
      element:<PrivateRoute><UpdateProduct/></PrivateRoute>,
      loader:({params}) => fetch(`https://coffee-server-nine-sand.vercel.app/coffee/${params.id}`)
   }
]);