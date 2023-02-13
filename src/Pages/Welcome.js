import { Route } from "react-router-dom";
const Welcome=()=>{
    return(
        <div>
            <h1>ThevWelcome Page</h1>
            <Route path="/welcome/newuser">
                <p>welcome new user</p>
            </Route>
        </div>
    )
}
export default Welcome;