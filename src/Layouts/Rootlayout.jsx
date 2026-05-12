import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

;

const Rootlayout = () => {
    return (
        <div className="flex flex-col min-h-screen"> 
            <Navbar></Navbar>
            <main className="flex-1">
<Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Rootlayout;