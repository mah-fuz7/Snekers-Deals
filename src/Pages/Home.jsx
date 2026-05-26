import Banner from "../Components/Banner";
import LatestProduct from "../Components/LatestProduct";

 
const latestProductsPromise=fetch('http://localhost:3000/latestproducts')
.then(res=>res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className=" ml-[40%] mb-4 text-4xl font-bold mt-2" >Recent <span className="text-violet-600">Products</span></h1>
           <LatestProduct latestProductsPromise={latestProductsPromise}></LatestProduct>

        </div>
    );
};

export default Home;