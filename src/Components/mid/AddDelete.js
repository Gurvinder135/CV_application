
const Add=({add})=>{
    return(
        <div id="add">
            <button onClick={add}>Add</button>
        </div>
    )
}
const Delete=({del})=>{
    return(
        <div id="delete">
            <button onClick={del}>Delete</button>
        </div>
    )
}

const Submit=({submit,hide})=>{
    return(
        <div id="submit" >
            <button className={hide} onClick={submit}>Submit</button>
        </div>
    )
}
export {Add,Delete,Submit};