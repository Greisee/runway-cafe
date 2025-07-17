import {React,useEffect} from "react";
import {useOutletContext} from "react-router-dom";
//import image2 from "./../assets/testBG2.webp" ;

export default function OrderOnline(){
    const setBGImg = useOutletContext();
    
    useEffect(()=>{
        //setBGImg(image2);
    },[])

    return(
        <div>
            Order Online
        </div>
    )
}