import classes from './ExpenseList.module.css';
import {usestate,useEffect, useState} from 'react';
import axios from 'axios';
const ExpenseList=(props)=>{
    const[value,setValue]=useState([]);
    
    let totalAmount=0;
    value.forEach(item=>{
        totalAmount=totalAmount+Number(item.money);
        
  })

 
 
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
    const deleteHandler=async (id)=>{
        
      let res=await axios.delete(`https://add-movies-c908f-default-rtdb.firebaseio.com/expences/${id}.json`) 
    }
    const editHandler=async (id,money,description,category)=>{
                document.getElementById('mon').value =money;
                document.getElementById('cat').value = category;
                document.getElementById('des').value =description;
        deleteHandler(id);

    }
    
 function exportUserInfo(userInfo) {
    const fileData = JSON.stringify(userInfo);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "user-info";
    link.href = url;
    link.click();
  }
  
  
    return(
        <div>
            {totalAmount>1000&&<button style={{background: "green"}} onClick={()=>exportUserInfo(value)}>Extract files</button>}
            <ul className={classes.list}>
            {value.map((user)=>(
                <li key={user.id} className={classes.p}>
                    <h3>${user.money}</h3> <h2>{user.description}</h2> <h3>{user.category}</h3>
                    <button type='submit' style={{background: "Tomato"}} onClick={()=>{deleteHandler(user.id)}}>Delete</button>
                    <button type='submit'style={{background: "yellow"}} onClick={()=>{editHandler(user.id,user.money,user.description,user.category)}}>Edit</button>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default ExpenseList;  