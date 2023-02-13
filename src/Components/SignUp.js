import { Fragment,useRef } from "react";
import classes from './SignUp.module.css'
const SignUp=()=>{
    
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const EventHandler=(event)=>{
        event.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;
      
      
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCewUWbgztJYjhsb5UEmf3Ni6T_ehpNmXQ',{
            method:'POST',
            body:JSON.stringify(
              {
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
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
                let errorMessage='Authentication Failed';
                throw new Error(errormessage);
              })
            }
        }).then((data)=>{
            console.log("user has succesfully sign up");
          })
          .catch((err)=>{
            alert(err.message)
          })
    } 
   
   
    
    return(
        <Fragment>
            <form className={classes.auth} onSubmit={EventHandler}>
                <div>
                    <label>Email</label>
                    <input type='email' required ref={emailInputRef}/>
                    <br/>
                    &nbsp;
                    </div>
                    <div>
                    <label>Password</label>
                    <input type='password' required ref={passwordInputRef}/><br/>
                    <input type='password' required ref={passwordInputRef}/><br/>
                    &nbsp;
                    </div>
                    <button type='submit'>Sign Up</button>
                    
            </form> 
        </Fragment>
    )

}
export default SignUp;