import { Link ,useHistory} from "react-router-dom"
import classes from './MainNavigation.module.css';
import { useContext } from "react";
import AuthContext from "../store/Context";
const MainNavigation=()=>{
  const Authcntx=useContext(AuthContext);
  const userLoggin=Authcntx.isLoggedIn;
  const history=useHistory();
  const logoutHandler=()=>{
    Authcntx.logOut();
    history.replace('/')

  }
    return(
        <header className={classes.header}>
        <nav>
          <ul>
            {!userLoggin&&(<li>
            <Link to='/'>Login</Link>
             </li>
    )}
            {userLoggin&&(<li>
            <Link to='/profile'>Profile</Link>
             </li>
            )}
             <li>
             {userLoggin&&(
            <li>
            <button onClick={logoutHandler}>Logout</button>
            </li>
            )}
             </li>
          </ul>
        </nav>
      </header>
    )
}
export default MainNavigation;