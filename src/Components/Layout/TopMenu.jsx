import React from "react";
import {Link} from "react-router-dom";
import TopButton from "./TopButton.jsx";
//imports css from layout
import logo from "./../assets/logo.png";


export default function TopMenu(){
    return(
        <div className = "topMenu">
            <Link to = "/">
                <img src = {logo} className="photo"/>  
            </Link>
            <div className = "navBar">
                <TopButton target = "/Menu/none" text = "Menu"/>
                <TopButton target = "/Catering" text = "Catering"/>
                <TopButton target = "/OrderOnline" text = "Order Online"/>
                <TopButton target = "/Contact" text = "Contact Us"/>
            </div>
        </div>
    )
}