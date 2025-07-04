import React from "react";
import {Link} from "react-router-dom";


export default function TopButton(props){

    return(
         <Link to = {"/Page" + props.target} className = "topButton">
            <div>
                <h3>{props.text}</h3>
            </div>
        </Link>
    )
}