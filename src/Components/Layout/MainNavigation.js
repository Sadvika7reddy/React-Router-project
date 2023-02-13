import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css';
const MainNavigation=()=>{
    return(
        <header className={classes.header}>
        <nav>
          <ul>
            <li>
            <Link to='/'>Login</Link>
             </li>
            <li>
            <Link to='/profile'>Profile</Link>
             </li>
          </ul>
        </nav>
      </header>
    )
}
export default MainNavigation;