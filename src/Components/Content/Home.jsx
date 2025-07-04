import React from "react";
import "./content.css";
import image from "./../assets/testBG2.webp" ;

export default function Home(){
    return(
        <div className="homeBG" style = {{backgroundImage:`url(${image})`}}>
            <div className="homeContent">
                Welcome to Runway Cafe!
            </div>
        </div>
    )
}