import React,{useState}from "react";
import "../Style/NavBar.css"

export function NavBar(){
    const [isActive , setIsActive] = useState(true);
    return(
        <div className="container">
            <ul className="navbar">
                <li className={!isActive?"active":""} onClick={()=>setIsActive(false)}>Home</li>
                <li className={!isActive?"active":""}>about me</li>
                <li className={!isActive?"active":""}>Logo</li>
                <li className={!isActive?"active":""}>portfolio</li>
                <li className={!isActive?"active":""}>Theme</li>
            </ul>
        </div>
    )
}