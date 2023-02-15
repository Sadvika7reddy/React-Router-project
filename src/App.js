import { Redirect, Route } from "react-router-dom";
import {useState} from 'react';
import Profile from "./Components/Profile";
import SignUp from "./Components/SignUp";
import Layout from './Components/Layout/Layout';
import { Switch } from "react-router-dom";
import Details from "./Components/Details";
import Forgot from "./Components/Forgot";
import Expenses from './Components/Expenses/Expenses'
import ExpenseList from "./Components/Expenses/ExpenseList";

function App() {
  const [AppUsers,setAppUsers]=useState([]);
  const AddHandler=(Money,Description,Category)=>{
    setAppUsers((prevstate)=>{
      return[...prevstate,{money:Money,description:Description,category:Category,id:Math.random().toString()}]
    }

  )}
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <SignUp/>
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route> 
        <Route path='/details'>
          <Details/>
        </Route>
        <Route path='/expenses' exact>
          <Expenses onAdd={AddHandler}/>
          <ExpenseList users={AppUsers}/>
        </Route>
        <Route path='/forgot' exact>
          <Forgot/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
 