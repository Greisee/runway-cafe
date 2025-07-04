import React from "react";
import {Link} from "react-router-dom";
import TopButton from "./TopButton.jsx";
//imports css from layout


export default function TopMenu(){
    return(
        <div className = "topMenu">
            <Link to = "/">
                <h2> Runway Cafe </h2>  
            </Link>
            <div className = "navBar">
                <TopButton target = "/Menu" text = "Menu"/>
                <TopButton target = "/Catering" text = "Catering"/>
                <TopButton target = "/OrderOnline" text = "Order Online"/>
                <TopButton target = "/Contact" text = "Contact Us"/>
            </div>
        </div>
    )
}