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
import PrivateRouter from "../Private/PrivateRouter";

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
        
        element:<PrivateRouter>
          <Allproduct></Allproduct>
        </PrivateRouter>
      },
      {
        path:'/login',
        
        element:<Login></Login>
      },
      {
        path:'/addproduct',
        
        element:<PrivateRouter>
          <AddProduct></AddProduct>
        </PrivateRouter>
      },
      {
        path:'/bid',
        
        element:<PrivateRouter>
          <Bid></Bid>
        </PrivateRouter>
      },
      {
        path:'/mybids',
        
        element:<PrivateRouter>
          <MyBids></MyBids>
        </PrivateRouter>
      },
      {
        path:'/myproducts',
        
        element:<PrivateRouter>
          <Myproduct></Myproduct>
        </PrivateRouter>
      },
      {
        path:'/productdetails/:id',
        loader:async({params})=> {
          const res=await fetch(`http://localhost:3000/products/${params.id}`);
          return res.json()
        },
        element:<PrivateRouter>
          <ProductDetails></ProductDetails>
        </PrivateRouter>
      },
      {
        path:'/signin',
        element:<Register></Register>
      },
    ]
  },
]);
export default router