import { Link } from "react-router";

const Card1 = ({product}) => {
    const {image,price_max,price_min,title}=product
    console.log( image)
    return (
        <div>
             <div className="bg-white rounded-xl border border-dashed border-blue-300 p-3 w-72 shadow-sm">
      {/* Product Image */}
      <div className="bg-gray-200 rounded-lg w-full h-48 mb-4 overflow-hidden">
        {image ? (
          <img src={image} alt={title}  className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
 
      {/* Title */}
      <h2 className="text-gray-900 font-semibold text-base mb-1">
        {title || "Hero Splender Ev - [ 2 Year Used ]"}
      </h2>
 
      {/* Price */}
      <p className="text-violet-600 font-semibold text-sm mb-4">
        $ {price_min || "55.99"} - {price_max || "75"}
      </p>
 
      {/* View Details Button */}
      <Link to={`/productdetails/${product._id}`}
        className="w-full ml-3   px-[30%] border border-violet-400 text-violet-500 font-semibold text-sm py-2.5 rounded-lg hover:bg-violet-50 transition"
      >
        View Details
      </Link>
    </div>
        </div>
    );
};

export default Card1;