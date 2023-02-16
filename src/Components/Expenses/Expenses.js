import classes from './Expenses.module.css';
import {useState} from 'react';
import axios from 'axios';
const Expenses=(props)=>{
    const [money,setMoney]=useState('');
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState('');
    const ExecuteMoney=(event)=>{
        setMoney(event.target.value)
    }
    const ExecuteDescription=(event)=>{
        setDescription(event.target.value)
    }
    const ExecuteCategory=(event)=>{
        setCategory(event.target.value);
    }
    const EventHandler=async (event)=>{
        event.preventDefault();
        const expenceData={
            money:money,
            description:description,
            category:category
        }
        props.onAdd(money,description,category);
        axios.post("https://add-movies-c908f-default-rtdb.firebaseio.com/expences.json",expenceData)
        .then((res)=>{
            
        })
        
        setMoney("");
        setDescription('');
        setCategory('');
    }
    return(
        <form className={classes.auth} onSubmit={EventHandler}>
            <div>
            <label>Money</label>
            <input type='number' value={money} onChange={ExecuteMoney}/><br/>
            &nbsp;
            </div>
            <div>
                <label>Description</label>
                <input type='text' value={description} onChange={ExecuteDescription}/><br/>
                &nbsp;
            </div>
            <div>
                <label>Category</label>
                <input type='text' value={category} onChange={ExecuteCategory}/><br/>
                &nbsp;
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}
export default Expenses;