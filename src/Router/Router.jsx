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
        
        element:<Allproduct></Allproduct>
      },
      {
        path:'/login',
        
        element:<Login></Login>
      },
      {
        path:'/addproduct',
        
        element:<AddProduct></AddProduct>
      },
      {
        path:'/bid',
        
        element:<Bid></Bid>
      },
      {
        path:'/mybids',
        
        element:<MyBids></MyBids>
      },
      {
        path:'/myproducts',
        
        element:<Myproduct></Myproduct>
      },
      {
        path:'/productdetails/:id',
        loader:async({params})=> {
          const res=await fetch(`http://localhost:3000/products/${params.id}`);
          return res.json()
        },
        element:<ProductDetails></ProductDetails>
      },
      {
        path:'/signin',
        element:<Register></Register>
      },
    ]
  },
]);
export default router