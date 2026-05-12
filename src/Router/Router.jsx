import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AddProduct from "../Pages/AddProduct";
import Bid from "../Pages/Bid";
import MyBids from "../Pages/MyBids";
import Myproduct from "../Pages/Myproduct";
import ProductDetails from "../Pages/ProductDetails";
import Register from "../Pages/Register";
import Allproduct from "../Pages/Allproducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    children:[
      {
        path:'/',
        index:true,
        element:<Home></Home>
      },
      {
        path:'/allproducts',
        index:true,
        element:<Allproduct></Allproduct>
      },
      {
        path:'/login',
        index:true,
        element:<Login></Login>
      },
      {
        path:'/addproduct',
        index:true,
        element:<AddProduct></AddProduct>
      },
      {
        path:'/bid',
        index:true,
        element:<Bid></Bid>
      },
      {
        path:'/mybids',
        index:true,
        element:<MyBids></MyBids>
      },
      {
        path:'/myproducts',
        index:true,
        element:<Myproduct></Myproduct>
      },
      {
        path:'/productdetails',
        index:true,
        element:<ProductDetails></ProductDetails>
      },
      {
        path:'/register',
        index:true,
        element:<Register></Register>
      },
    ]
  },
]);
export default router