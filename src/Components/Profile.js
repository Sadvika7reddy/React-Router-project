import classes from './Profile.module.css';
import {Link,useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {AuthAction} from './store/Context';
const Profile=()=>{
  
  const history=useHistory();
  const dispatch=useDispatch();
  const EventHandler=()=>{
    const token=localStorage.getItem('token');
    console.log(token);
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCewUWbgztJYjhsb5UEmf3Ni6T_ehpNmXQ',{
            method:'POST',
            body:JSON.stringify(
              {
                requestType:"VERIFY_EMAIL",
                idToken:token
              }
            ),
            headers :{
              'Content-Type':'application/json'
            }
          }
          ).then(res=>{
            if(res.ok){
              return res.json();
    
            }
            else{
              return res.json().then((data)=>{
                let errorMessage='Authenticated Failed';
                throw new Error(errorMessage);
              })
            }
          }).then((data)=>{
            
            history.replace('/profile')
          })
          .catch((err)=>{
            alert(err.message)
          })
  }
    return( 
    <section >
      <h1>Expence Tracker</h1>
      <Link to='/details'>
        <button>your profile is incomplete!complete Now</button><br/>
        &nbsp;
      </Link>
      <button type='submit' onClick={EventHandler}>Verify EmailId</button>
    </section>
    )
}
export default Profile;