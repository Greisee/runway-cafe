import {React,useEffect} from "react";
import {useOutletContext} from "react-router-dom";
import image2 from "./../assets/testBG2.webp" ;
import MenuSelection from "./MenuSelection";
import MenuDisplay from "./MenuDisplay";

export default function Menu(){
    //use outlet context to change image if needed

    return(
        <div className = "menu">
            <MenuSelection/>
            <MenuDisplay/>
        </div>
    )
}