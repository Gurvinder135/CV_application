import React from "react";

const GenerateCv=({infor,exp,edu})=>{
    return(
        <div className="generate hide" >
            
            <div className="infotable">
                    <div>{infor.fn}, {infor.ln}</div>
                    <div>{infor.phone}</div>
                    <div>{infor.email}</div>
                    <div>{infor.address}</div>
                    <div>{infor.desc}</div>

               </div>
               
               
               <h1>Education</h1>
               <hr></hr>
               {edu.map((a)=>{ return(
                   <div className="edutable">
                   <div className="flex"><div>{a.institute}</div>
                   <div>{a.from} to {a.to}</div>
                   </div>
                   <div className="flex"><div>{a.degree}</div>
                   <div>{a.location}</div>
                   </div>
                    <div>{a.subject}</div>
               </div>
               )})}
               
               <h1>Experience</h1>
               <hr></hr>
               {exp.map((a)=>{return(
                   <div className="exptable">
                   <div className="flex"><div>{a.position}</div>
                   <div>{a.from} to {a.to}</div>
                   </div>
                   <div className="flex"><div>{a.company}</div>
                   <div>{a.location}</div>
                   </div>
                    
               </div>
                ) })}
               
        </div>
    )
}
export default GenerateCv;