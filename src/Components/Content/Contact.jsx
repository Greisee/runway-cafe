import React from "react";
import "./content.css";
import socials from "./../assets/SocialLogos.png";

export default function Contact(){
    return(
        <div className="contact">
            <p>Runway Cafe by Runway Gourmet</p>
            <p>2488 Winchester Rd Memphis, TN 38126</p>
            <p>(901) 123-4567</p>
            <div className="contactSocials">
                <img src = {socials} style = {{height:"3vh", marginRight:"2vw"}}/>
                <p> @runwaycafe901</p>
            </div>
        </div>
    )
}