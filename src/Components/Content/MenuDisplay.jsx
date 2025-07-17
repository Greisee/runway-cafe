import {React,useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import cafe from "./../assets/menu.png"


export default function MenuDisplay(){
    const {menu}= useParams();
    let m = menu;

    useEffect(()=>{
        m = menu;
    },[{menu}])

    if(m == "Cafe"){
        return(
            <div className = "menuDisplay">
                <img src={cafe}/>
            </div>
        )
    }
    else if(m == "Inflight"){
        return(
            <div className = "menuDisplay">
                inflight
            </div>
        )
    }
    else if(m == "Catering"){
        return(
            <div className = "menuDisplay">
                catering
            </div>
        )   
    }
    else{
        return(
            <div>
                
            </div>
        )
    }
}