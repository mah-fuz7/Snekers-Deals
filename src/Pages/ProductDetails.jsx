import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import BidTable from "../Components/BidTable";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  console.log (user)

  // PRODUCT DETAILS DATA 
   const {
    title,
    price_min,
    price_max,
    email,
    category,
    created_at,
    image,
    status,
    seller_image,
    seller_name,
    condition,
    usage,
    description,
    seller_contact,
    _id,
  } = useLoaderData();
  
// LOAD BID DATA BY PRODUCT
const [Bids,setBids]=useState([])
useEffect(()=>{
  fetch(`http://localhost:3000/bids/${_id}`)
  .then(res => res.json())
  .then(data => setBids(data))
},[_id])
console.log(Bids)

  // handle Bidding
  const handleBid = (e) => {
    e.preventDefault(); // Fixed typo method cleanly

    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = Number(e.target.bid.value);
    const contact = e.target.contact.value;



    
    // BackEnd Post the data
    const newBid ={
      product:_id,
      buyer_image:user?.photoURL,
      buyer_name:name,
      buyer_contact:contact,
      buyer_email:email,
      bid_price:bid,
      status:"pending"
    }

console.log(newBid)
setBids(prev => [...prev,newBid].sort((a,b)=>b.bid_price-a.bid_price))
fetch('http://localhost:3000/bids',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(newBid)
})
.then(res => res.json())
.then(data => {
  if(data.insertedId){
    toast.success("Bid successfully Submited")
    console.log(data)
  }
})







    console.log("Form Submitted Successfully:", { name, email, bid, contact });

    // Programmatically uncheck DaisyUI checkbox to dismiss modal on click
    const modalCheckbox = document.getElementById("bid_modal");
    if (modalCheckbox) modalCheckbox.checked = false;
  };




 


  return (
  <>

  <div>
      <div className="min-h-screen bg-[#ffff] font-['Georgia',serif]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          {/* Back link */}
          <button className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-violet-600 transition-colors mb-6 group">
            Back To Products
          </button>

          {/* TOP SECTION: Image (left) + Product Info (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* LEFT: Main Image */}
            <div>
              <div className="relative bg-white rounded-2xl overflow-hidden aspect-square border border-slate-100 shadow-sm">
                {image ? (
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100" />
                )}
                <div className="absolute top-3 left-3">
                  <span className="bg-emerald-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    {status || "On Sale"}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: Product Info */}
            <div className="space-y-4">
              <div>
                <span className="inline-block bg-violet-100 text-violet-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {category}
                </span>
                <h1 className="text-3xl font-bold text-slate-900 leading-tight tracking-tight">
                  {title}
                </h1>
              </div>

              {/* Price */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-violet-600">${price_min}</span>
                  <span className="text-xl text-slate-400 font-medium">— ${price_max}</span>
                </div>
                <p className="text-slate-400 text-sm mt-0.5">Price starts from</p>
              </div>

              {/* Product Details */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <h3 className="font-semibold text-slate-800 text-base mb-3">Product Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Product ID</span>
                    <span className="text-slate-700 font-mono text-xs bg-slate-50 px-2 py-0.5 rounded">
                      {_id}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Posted</span>
                    <span className="text-slate-700">{created_at}</span>
                  </div>
                </div>
              </div>

              {/* Seller Info */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <h3 className="font-semibold text-slate-800 text-base mb-4">Seller Information</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-200">
                    {seller_image && <img src={seller_image} alt={seller_name} className="w-full h-full object-cover" />}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{seller_name}</p>
                    <p className="text-slate-400 text-xs">{email}</p>
                  </div>
                </div>
              </div>

              {/* CTA Trigger */}
              <div className="flex gap-3">
                <label 
                  htmlFor="bid_modal" 
                  className="flex-1 py-4 rounded-2xl font-semibold text-white bg-violet-600 hover:bg-violet-700 text-center cursor-pointer transition-colors"
                >
                  Bid for the product
                </label>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: Product Description */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-slate-800 text-base mb-3">Product Description</h3>
            <div className="flex gap-4 mb-3 text-sm">
              <div>
                <span className="text-slate-400">Condition: </span>
                <span className="text-violet-600 font-medium">{condition}</span>
              </div>
              <div>
                <span className="text-slate-400">Usage Time: </span>
                <span className="text-violet-600 font-medium">{usage}</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
<BidTable Bids={Bids}></BidTable>
      {/* --- DAISYUI CSS MODAL OVERLAY --- */}
      <input type="checkbox" id="bid_modal" className="modal-toggle" />
      
      <div className="modal" role="dialog">
        <div className="modal-box bg-white max-w-md p-6 rounded-2xl border border-slate-100 shadow-xl">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Place Your Bid!</h3>
          <p className="text-sm text-slate-500 mb-4">
            You are bidding on <span className="font-semibold text-slate-800">{title}</span>.
          </p>
          
          <form onSubmit={handleBid} className="space-y-4">
            <div>
              <label className="block font-bold text-sm text-slate-700 mb-1">Buyer Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block font-bold text-sm text-slate-700 mb-1">Buyer Email</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block font-bold text-sm text-slate-700 mb-1">Bid Price</label>
              <input
                type="number"
                name="bid"
                placeholder="Enter Your Bid Price"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block font-bold text-sm text-slate-700 mb-1">Buyer Contact</label>
              <input
                type="text"
                name="contact"
                defaultValue={seller_contact}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <div className="modal-action flex gap-3 pt-2">
              <label 
                htmlFor="bid_modal" 
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold text-center rounded-xl cursor-pointer transition-colors"
              >
                Cancel
              </label>
              <button 
                type="submit" 
                className="flex-1 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold text-center rounded-xl transition-colors"
              >
                Submit Bid
              </button>
            </div>
          </form>

        </div>
        
        <label className="modal-backdrop bg-slate-900/40 backdrop-blur-xs" htmlFor="bid_modal">Close</label>
      </div>
    </div>

  </>
  );
};

export default ProductDetails;