import {React,useState} from "react";
import {Link} from "react-router-dom";
import TopButton from "./TopButton.jsx";
//imports css from layout
import logo from "./../assets/logo.png";


export default function TopMenu(){
    const[selected,setSelected] = useState("");

    const choose = (m)=>{
        setSelected(m);
    }
    return(
        <div className = "topMenu">
            <Link to = "/runway-cafe/" onClick = {()=>choose("Home")}>
                <img src = {logo} className="photo"/>  
            </Link>
            <div className = "navBar">
                <TopButton target = "Menu/none" text = "Menu" hl= {selected == "Menu"} cb = {()=>choose("Menu")}/>
                <TopButton target = "Catering" text = "Catering" hl= {selected == "Catering"} cb = {()=>choose("Catering")}/>
                <TopButton target = "OrderOnline" text = "Order Online" hl= {selected == "Order Online"} cb = {()=>choose("Order Online")}/>
                <TopButton target = "Contact" text = "Contact Us" hl= {selected == "Contact Us"} cb = {()=>choose("Contact Us")}/>
            </div>
        </div>
    )
}