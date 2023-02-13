import { Redirect, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import SignUp from "./Components/SignUp";
import Layout from './Components/Layout/Layout';
import { Switch } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <SignUp/>
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route> 
      </Switch>
    </Layout>
  );
}

export default App;
 