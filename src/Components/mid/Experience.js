import React  from "react";
import { Delete,Submit} from "./AddDelete";

const Experience=({expchange,submit,a,hide,del})=>{

    return(
        <div> <form id="form" onChange={expchange}>
            <input className={"hide"} value={a.id}/>
            <div>
            <label htmlFor="position">Position</label>
            <input id="position" required value={a.position}/>
            </div>
            <div>
            <label htmlFor="location">Location</label>
            <input id="location" required value={a.location}/>
            </div>
            <div>
            <label htmlFor="company">Company</label>
            <input id="company" required value={a.company}/>
            </div>
            <div className="short">
                <label htmlFor="from">From</label>
                <input id="from" type="date" value={a.from} required/>
                </div>
                <div className="short">
                <label htmlFor="to">To</label>
                <input id="to" type="date" value={a.to} required/>
                </div> 
           
            </form>
            <Submit hide={hide} submit={submit}/><Delete del={del}/>
        </div>

    )
};

export default Experience;