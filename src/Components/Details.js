import { Fragment ,useRef} from "react";
import classes from './Details.module.css';
const Details=()=>{
    const nameRef=useRef();
    const photoUrlRef=useRef();
    const EventHandler=(event)=>{
        event.preventDefault();
        const enteredName=nameRef.current.value;
        const enteredURL=photoUrlRef.current.value;
        const token=localStorage.getItem('token');
        console.log(token);
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCewUWbgztJYjhsb5UEmf3Ni6T_ehpNmXQ',{
            method:'POST',
            body:JSON.stringify(
              {
                idToken:token,
                displayName:enteredName,
                photoUrl:enteredURL,
                returnSecureToken:true
              }
            ),
            headers :{
              'Content-Type':'application/json'
            }
          }
          ).then(res=>{
            
            if(res.ok){
    
            }
            else{
              return res.json().then((data)=>{
                let errorMessage='Authenticated Failed';
                alert(errorMessage);
              })
            }
        })
    } 
    return(
        <form className={classes.auth} >
            <h2>Contact details</h2>
            <div>
            <label>Full Name</label>
            <input type='text' ref={nameRef}/><br/>
            &nbsp;
            </div>
            <div>
            <label>Profile photo Url</label>
            <input type='url' ref={photoUrlRef}/><br/>
            &nbsp;
            </div>
            <button type='submit' onClick={EventHandler}>Update</button>
        </form>

    )
}
export default Details;