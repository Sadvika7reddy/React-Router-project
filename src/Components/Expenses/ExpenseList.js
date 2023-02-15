import classes from './ExpenseList.module.css'
const ExpenseList=(props)=>{
    return(
        <div>
            <ul className={classes.list}>
            {props.users.map((user)=>(
                <li key={user.id} className={classes.p}>
                    {user.money} {user.description} {user.category}
                </li>
            ))}
            </ul>
        </div>
    )
}
export default ExpenseList;