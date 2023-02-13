import { Link } from "react-router-dom";
const Products=()=>{
    return(
        <div>
            <h1>The Products Page</h1>
            <u>
                <li><Link to='/products/p1'>A book</Link></li>
                <li><Link to='/products/p2'>A pen</Link></li>
                <li><Link to='/products/p3'>sharpener</Link></li>
            </u>
        </div>
    )
}
export default Products;