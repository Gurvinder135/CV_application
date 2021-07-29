import React from "react";
import { Delete,Submit } from "./AddDelete";
const Education=({educhange,submit,a,hide,del})=>{

    return(
        <div> 
            <form id="form" onChange={educhange}>
            <input className={"hide"} value={a.id}/>
            <div>
            <label htmlFor="institute">Institute Name</label>
            <input id="institute" value={a.institute
            }/>
            </div>
            <div>
            <label htmlFor="location">Location</label>
            <input id="location"value={a.location}/>
            </div>
            <div>
            <label htmlFor="degree">Degree</label>
            <input id="degree" value={a.degree}/>
            </div>
            <div>
            <label htmlFor="subject">Subject</label>
            <input id="subject"value={a.subject}/>
            </div> 
            <div className="short"> 
                <label htmlFor="from">From</label>
                <input id="from" type="date" value={a.from}/>
                </div>
                <div className="short">
                <label htmlFor="to">To</label>
                <input id="to" type="date" value={a.to}/>
                </div>
            </form>
            <Submit hide={hide} submit={submit}/><Delete del={del}/>
            

        </div>

            )
};

export default Education;