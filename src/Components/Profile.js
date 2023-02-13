import classes from './Profile.module.css';
import {Link} from 'react-router-dom'
const Profile=()=>{
    return(
    <section >
      <h1>Expence Tracker</h1>
      <Link to='/details'>
        <button>your profile is incomplete!complete Now</button>
      </Link>
    </section>
    )
}
export default Profile;