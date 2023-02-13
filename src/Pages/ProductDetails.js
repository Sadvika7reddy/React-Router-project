import { useParams } from "react-router-dom";
const ProductDetails=()=>{
    const params=useParams();

    return(
        <div>
            <div>Product Details</div>
            <p>{params.productId}</p>

        </div>
        
        
    )
}
export default ProductDetails;