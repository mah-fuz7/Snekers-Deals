import { Outlet, useNavigation } from "react-router"; // or 'react-router-dom' depending on your package version
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Rootlayout = () => {
    const navigation = useNavigation();
    
    // Check if React Router is actively fetching data for a new route
    const isLoading = navigation.state === "loading";

    return (
        <div className="flex flex-col min-h-screen max-w-6xl mx-auto relative"> 
            <Navbar />
            
            <main className="flex-1 relative">

                {/* 1. The Loader Overlay */}
              {isLoading && (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-3">
            {/* Tailwind/DaisyUI Loading Spinner */}
            <span className="loading loading-dots text-primary h-16 w-16"></span>
            <p className="text-base font-semibold text-white tracking-wide drop-shadow-md">
                Fetching details...
            </p>
        </div>
    </div>
)}

                {/* 2. Your actual page contents */}
                {/* We optionally fade out the content slightly while loading for a nice visual cue */}
                <div className={isLoading ? "opacity-100 pointer-events-none transition-opacity duration-300" : "transition-opacity duration-300"}>
                    <Outlet />
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default Rootlayout;