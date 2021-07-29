import React from "react";

const PersonalInfo=({infochange})=>{

    return(
        <div> <form id="form" onChange={infochange}>
            
            <div className="short"> 
                <label htmlFor="fn">First Name</label>
                <input id="fn" required/>
                </div> 
                <div className="short"> 
                <label htmlFor="ln">Last Name</label>
                <input id="ln" required/>
                </div> 
                <div> 
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" required/>
            </div> 
            <div> 
            <label htmlFor="email">Email</label>
            <input id="email" required/>
            </div> 
            <div> 
            <label htmlFor="address">Address</label>
            <input id="address" required/>
            </div> 
            <div> 
            <label htmlFor="desc">Description</label>
            <input id="desc"/>
            </div> 
            </form>
        </div>

    )
};

export default PersonalInfo;