import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

 

const AddProduct = () => {
const {user}=useContext(AuthContext)
    const hadleCreateProduct =(e) =>{
        e.preventDefault()
        const newProduct={
        
  
  "title": e.target.title.value, 
  "price_min": e.target.price_min.value,
  "price_max": e.target.price_max.value,
  "email": user.email,
  "category": "High Neck",
  "created_at": "2026-04-20T12:00:00Z",
  "image": e.target.image.value,
  "status": "pending",
  "location": e.target.location.value,
  "seller_image": e.target.seller_image.value,
  "seller_name": e.target.seller_name.value,
  "condition": e.target.condition.value,
  "usage": e.target.usage.value,
  "description": e.target.description.value,
  "seller_contact": e.target.seller_contact.value

        }
        // send the product Data to BackEnd
        fetch('http://localhost:3000/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.success("YOUR PRODUCT ADDED ")
        })

        console.log("product submit",newProduct)
    }
    return (
        <div>
           <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-xl p-8">
        <form onSubmit={hadleCreateProduct}>
          {/* Title & Category */}
          <div className="flex gap-4 mb-5">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
              name="title"
                type="text"
                placeholder="samba OG"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <div className="relative">
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white">
                  <option name="category" value="" disabled selected>Select a Category</option>
                  <option>High Neck</option>
                  <option>Low Neck</option>
                  <option>Sport Show</option>
                  <option>Running Show</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
 
          {/* Min & Max Price */}
          <div className="flex gap-4 mb-5">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Price You want to Sale ($)</label>
              <input
              name="price_min"
                type="text"
                placeholder="e.g. 18.5"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Price You want to Sale ($)</label>
              <input
              name="price_max"
                type="text"
                placeholder="Optional (default = Min Price)"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              />
            </div>
          </div>
 
          {/* Product Condition & Usage Time */}
          <div className="flex gap-4 mb-5">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Condition</label>
              <div className="flex gap-5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="condition"
                    defaultChecked
                    className="accent-violet-600 w-4 h-4"
                  />
                  <span className="text-sm text-gray-600">Brand New</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="condition"
                    className="accent-violet-600 w-4 h-4"
                  />
                  <span className="text-sm text-gray-600">Used</span>
                </label>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Usage time</label>
              <input
              
              name="usage"
                type="text"
                placeholder="e.g. 1 year 3 month"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              />
            </div>
          </div>
 
          {/* Product Image URL */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Product Image URL</label>
            <input
            name="image"
              type="url"
              placeholder="https://..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
            />
          </div>
 
          {/* Seller Name & Email */}
          <div className="flex gap-4 mb-5">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Seller/ Name</label>
              <input
              name="seller_name"
                type="text"
                placeholder="e.g. Artisan Roasters"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Seller Email</label>
              <input
                type="email"
                placeholder="leli31955@nrlord.com"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              />
            </div>
          </div>
 
          {/* Seller Contact & Seller Image URL */}
          <div className="flex gap-4 mb-5">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Seller Contact</label>
              <input
              name="seller_contact"
                type="tel"
                placeholder="e.g. +1-555-1234"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Seller Image URL</label>
              <input
              name="seller_image"
                type="url"
                placeholder="https://..."
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              />
            </div>
          </div>
 
          {/* Location */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
            name="location"
              type="text"
              placeholder="City, Country"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
            />
          </div>
 
          {/* Description */}
          <div className="mb-7">
            <label className="block text-sm font-medium text-gray-700 mb-1">Simple Description about your Product</label>
            <textarea
            name="description"
              rows={4}
              placeholder="e.g. I bought this product 3 month ago, did not used more than 1/2 time, actually learning guitar is so tough...."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent resize-none"
            />
          </div>
 
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl text-sm tracking-wide transition-colors duration-200"
          >
            Create A Product
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default AddProduct;