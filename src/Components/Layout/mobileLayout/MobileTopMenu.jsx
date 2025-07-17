import React from "react";
import MobileButton from "./MobileButton.jsx";
import "./mobile.css";

export default function MobileTopMenu(){
    return(
        <div className = "mTopMenu">
            <table className="mTopMenuTable">
                <tbody>
                    <tr>
                        <td>
                            <MobileButton title="Order Now" target="OrderOnline"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <MobileButton title="Menu" target="Menu/none"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <MobileButton title="Catering" target="Catering"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <MobileButton title="Contact Us" target="Contact"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}