import {React,useEffect,useState} from "react";
import {Link, useParams} from "react-router-dom";


export default function MenuSelection(){
    const[selected,setSelected] = useState("");

    const choose=(m)=>{
        setSelected(m);
    }

    return(
         <div>
            <table className = "menuTable">
                <thead>
                    <tr>
                        <td id="menuTableHead" colSpan="3">
                            Menus
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={selected == "Cafe"? "selected":""} onClick={()=>choose("Cafe")}>
                            <Link to={"/Page/Menu/Cafe"} >
                                <h4>
                                  Cafe Menu
                                </h4>
                            </Link>
                        </td>
                        <td className={selected == "Inflight"? "selected":""} onClick={()=>choose("Inflight")}>
                            <Link to={"/Page/Menu/Inflight"}>
                                <h4>
                                    Inflight Procurements
                                </h4>
                            </Link>
                        </td>
                        <td className={selected == "Catering"? "selected":""} onClick={()=>choose("Catering")}>
                            <Link to={"/Page/Menu/Catering"}>
                                <h4>
                                    Catering Menu
                                </h4>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
         </div>
    )
}