import classes from './ExpenseList.module.css';
import {usestate,useEffect, useState} from 'react';
import axios from 'axios';
const ExpenseList=(props)=>{
    const[value,setValue]=useState([]);
    axios.get("https://add-movies-c908f-default-rtdb.firebaseio.com/expences.json")
    .then((res)=>{
         const fetch=[];
         for(let key in res.data){
            fetch.unshift({
                ...res.data[key],
                id:key
            })
         }
         setValue(fetch)
    })
    return(
        <div>
            <ul className={classes.list}>
            {value.map((user)=>(
                <li key={user.id} className={classes.p}>
                    <h3>${user.money}</h3> <h2>{user.description}</h2> <h3>{user.category}</h3>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default ExpenseList; 