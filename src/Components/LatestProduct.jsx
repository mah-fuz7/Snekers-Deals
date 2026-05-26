import { use } from "react";
import Card1 from "./Card1";


const LatestProduct = ({latestProductsPromise}) => {
const products=use(latestProductsPromise)
console.log(products)
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
               products.map(product =><Card1 key={product._id} product={product}></Card1>)
            }
        </div>
    );
};

export default LatestProduct;