import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import UpdateProduct from "../components/UpdateProduct";
import ErrorPage from "../components/ErrorPage";

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
            element:<AddProduct/>
         }
      ]
   },
   {
      path:"/updateProduct/:id",
      element:<UpdateProduct/>,
      loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
   }
]);