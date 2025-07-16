import React from "react";
import {Link} from "react-router-dom";


export default function TopButton(props){

    return(
         <Link to = {"/Page" + props.target} onClick={props.cb}>
            <div className = "topButton" id={(props.hl? "selected":"")}>
                <h3>{props.text}</h3>
            </div>
        </Link>
    )
}