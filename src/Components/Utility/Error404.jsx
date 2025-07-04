import React from "react";
import {Link} from "react-router-dom";

export default function Error404(){
    return(
        <div>
            Error 404: Page Not Found
            <Link to="/">
                Return Home
            </Link>
        </div>
    )
}