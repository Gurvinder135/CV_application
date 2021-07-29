import React from "react";
import image from "./logo.png"
const Header=()=>{
 const editCv=(e)=>{
    e.preventDefault();
     
     e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[0].classList.remove("hide");
     e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].classList.add("hide");
 }
    return(
    <div className="container">
        <div id="flexCont">
            <div id="leftHead">
                <div id="img"><img src={image} alt="not found"/></div>
                <div>CV Builder</div>
            </div>
            <div id="rightHead"><button onClick={editCv}>Edit CV</button></div>
        </div>
    </div>
    )}
export default Header;