import { useEffect, useState } from "react";
import { Link } from "react-router";
import { MoonLoader } from "react-spinners";

 

const Allproduct = () => {
    const [products ,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    
useEffect(()=>{
     fetch('http://localhost:3000/products')
         .then(res => res.json())
             .then(data =>{
              setProducts(data)
              // AFTER LOADING THE DATA THE LOADER BECAME TURN OFF
              setLoading(false)
             })
             .catch(error=>{
              console.error("Error fetching data",error)
              // AFTER REQUEST FAILS THE LOADER BECAME TURN OFF
              setLoading(false)
             })


},[])


    // console.log(products)
    // to={`/productdetails/$(product._id)`}
    // to={`/productdetails/${product._id}`}
    return (
        <div>
                        <h1 className="font-bold text-5xl ml-[40%] my-3"> All <span className="text-violet-600">products</span></h1>

                      {loading ? 
                      <div className="fixed inset-0 flex flex-col justify-center items-center bg-white/50 backdrop-blur-sm z-50">
                                              <MoonLoader></MoonLoader>

                      </div>
                      :
                      ( <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                         {
                            products.map(product =>    <div key={product._id} className="bg-white rounded-xl border border-dashed border-blue-300 p-3 w-72 shadow-sm">
      {/* Product Image */}
      <div className="bg-gray-200 rounded-lg w-full h-48 mb-3 overflow-hidden">
        {product.image ? (
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
 
      {/* On Sale Badge — below image */}
      
        <span className="inline-block bg-violet-100 text-violet-500 text-xs font-medium px-3 py-1 rounded-full mb-2">
          {product.status}
        </span>
      
 
      {/* Title */}
      <h2 className="text-gray-900 font-semibold text-base leading-snug mb-1">
        {product.title || "Yamaha Fz Guitar [ Full Fresh Condition ]"}
      </h2>
 
      {/* Price */}
      <p className="text-violet-600 font-semibold text-sm mb-4">
        $ {product.price_min || "55.99"} - {product.price_max || "75"}
      </p>
 
      {/* View Details Button */}
      <Link to={`/productdetails/${product._id}`}
        className="w-full ml-3   px-[30%] border border-violet-400 text-violet-500 font-semibold text-sm py-2.5 rounded-lg hover:bg-violet-50 transition"
      >
        View Details
      </Link>
    </div>
 )
                        }
                       </div>)}

        </div>
    );
};

export default Allproduct;