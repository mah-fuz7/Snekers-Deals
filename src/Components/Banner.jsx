import { Link } from "react-router";


const Banner = () => {
    return (
        <div>
            <div className="relative min-h-[280px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-6 py-14">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(-30deg, transparent, transparent 28px, #a78bfa 28px, #a78bfa 30px)`,
        }}
      />
 
      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl w-full">
        {/* Heading */}
        <h1 className="font-extrabold text-4xl md:text-5xl leading-tight tracking-tight text-gray-900 mb-3">
          Deal Your{" "}
          <span className="text-violet-600">Products</span>
          <br />
          In A{" "}
          <span className="text-violet-600">Smart</span> Way !
        </h1>
 
        {/* Subtext */}
        <p className="text-gray-500 text-sm md:text-base mb-7">
          SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
        </p>
 
        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full shadow-md px-5 py-2 max-w-md mx-auto mb-6 border border-violet-100 focus-within:ring-2 focus-within:ring-violet-300 transition">
          <input
            type="text"
            placeholder="search For Products, Categories..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-300"
          />
          <button className="bg-violet-600 hover:bg-violet-700 transition text-white rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0">
            <svg href="../assets/banner bg patten.jpg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </button>
        </div>
 
        {/* Buttons */}
        <div className="flex items-center justify-center gap-3">
          <Link to={'/allproducts'} className="bg-violet-600 hover:bg-violet-700 transition text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow">
            Watch All Products
          </Link>
          <Link to={'/addproduct'} className="bg-white hover:bg-gray-50 transition text-violet-600 border border-violet-300 text-sm font-semibold px-5 py-2.5 rounded-md shadow-sm">
            Post an Product
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;