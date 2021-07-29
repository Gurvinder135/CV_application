import React, {useState} from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import { Add} from "./AddDelete"
import uniqid from "uniqid";
import GenerateCv from "../Generatecv";
const Main=()=>{
    
    const [edu,setEdu]=useState([]);
    const [exp,setExp]=useState([]);
    const [tempinfo,setTempinfo]=useState({id:uniqid(),
    fn:"",
    ln:"",
    phone:"",
    email:"",
    adress:"",
    desc:"",});
    const [tempedu,setTempedu]=useState({id:uniqid(),
    institute:"",
    location:"",
    degree:"",
    subject:"",
    from:"",
    to:"",});
    const [tempexp,setTempexp]=useState({id:uniqid(),
        position:"",
        location:"",
        company:"",
        from:"",
        to:"",});

    const[addedu, setAddedu]=useState(null);
const empty={id:uniqid(),
    fn:"",
    ln:"",
    phone:"",
    email:"",
    adress:"",
    desc:"",};
    const emptyexp={id:uniqid(),
        fn:"",
        ln:"",
        phone:"",
        email:"",
        adress:"",
        desc:"",};

 const infochange=(e)=>{
     e.preventDefault();
     const a={...tempinfo};
     a[e.target.id]=e.target.value;
     setTempinfo(a);
 }
 const addEdu=(e)=>{
    e.preventDefault();
    setAddedu("1");
 }
 const submitEdu=(e)=>{
     e.preventDefault();
    
     const temparr=[...edu,tempedu];
     setEdu(temparr);
     setTempedu(empty)
     setAddedu(null);
 }
 const submitExp=(e)=>{
    e.preventDefault();
   
    const temparr=[...exp,tempexp];
    setExp(temparr);
    setTempexp(emptyexp)
    setAddedu(null);
}
 const educhange=(e)=>{
     e.preventDefault();
     const a={...tempedu};
     a[e.target.id]=e.target.value;
     setTempedu(a);
 }
 const expchange=(e)=>{
    e.preventDefault();
    const a={...tempexp};
    a[e.target.id]=e.target.value;
    setTempexp(a);
}
 const addExp=(e)=>{
    e.preventDefault();
    setAddedu("2");
 }
 const del=(e)=>{
     e.preventDefault();
    //  console.log(e.target.parentElement.parentElement.firstChild[0].value);
     const temp=[...edu];
     for (let x in temp){
         if(temp[x].id===e.target.parentElement.parentElement.firstChild[0].value){
             temp.splice(x,1)
         }
     }
     setEdu(temp);
 }
 const delexp=(e)=>{
    e.preventDefault();
  
    const temp=[...exp];
    for (let x in temp){
        if(temp[x].id===e.target.parentElement.parentElement.childNodes[1][0].value){
            temp.splice(x,1)
        }
    }
    setExp(temp);
}
 const del1=(e)=>{
     e.preventDefault();
     setAddedu(null);
     setTempedu(empty);
 }
 const del2=(e)=>{
    e.preventDefault();
    setAddedu(null);
    setTempexp(emptyexp);
}

const submitcv=(e)=>{
    e.preventDefault();
    
    e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].classList.remove("hide");

    e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].firstChild.classList.add("hide");
}
    
return(<div>
<div className="mid"> <form id="mainform">
<h1>Personal Information</h1>
    <PersonalInfo infochange={infochange}/>
    <h1>Education</h1>
    <Add add={addEdu}/>
    {addedu==="1"?(<Education educhange={educhange} submit={submitEdu} a={tempedu} hide={""} del={del1}/> ):<div></div>}
    {edu.map((a)=>(
    
         <Education key={a.id} a={a} hide={"hide"} del={del}/>)
    )}
    <h1>Experience</h1>
    <Add add={addExp}/>
    {addedu==="2"?(<Experience expchange={expchange} submit={submitExp} a={tempexp} hide={""} del={del2}/> ):<div></div>}
    {exp.map((a)=>(
    
    <Experience key={a.id} a={a} hide={"hide"} del={delexp}/>)
)}
    
    <button onClick={submitcv} id="submitcv">Generate CV</button>
    </form>
    </div>
    <GenerateCv infor={tempinfo} edu={edu} exp={exp}/>
    </div>
)}
export default Main;