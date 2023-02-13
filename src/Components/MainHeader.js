import { Link } from "react-router-dom"
const MainHeader=()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/welcome'>Welcome</Link>
                </li>
                <li>
                    <Link to='/Products'>Products</Link>
                </li>
            </ul>
        </nav>
    )
}
export default MainHeader;