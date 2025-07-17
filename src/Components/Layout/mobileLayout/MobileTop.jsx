import {React} from "react";
import {Link} from "react-router-dom";
import "./mobile.css";
import logo from "./../../assets/logo.png";

export default function MobileTop(){
    return(
        <div className="mTop">
            <Link to={"/runway-cafe/"}>
                <img src = {logo} id="topLogo"/>
            </Link>
        </div>
    )
}