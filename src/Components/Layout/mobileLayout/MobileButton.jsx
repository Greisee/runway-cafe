import React from "react";
import {Link} from "react-router-dom";
import "./mobile.css"

export default function MobileButton(props){
    return(
        <div className="mButton">
            <Link to={"/runway-cafe/MobilePage/" + props.target}>
                {props.title}
            </Link>
        </div>
    )
}