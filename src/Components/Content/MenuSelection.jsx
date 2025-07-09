import React from "react";
import {Link} from "react-router-dom";


export default function MenuSelection(){

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
                        <td>
                            <Link to={"/Page/Menu/Cafe"}>
                                <h4>
                                  Cafe Menu
                                </h4>
                            </Link>
                        </td>
                        <td>
                            <Link to={"/Page/Menu/Inflight"}>
                                <h4>
                                    Inflight Procurements
                                </h4>
                            </Link>
                        </td>
                        <td>
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