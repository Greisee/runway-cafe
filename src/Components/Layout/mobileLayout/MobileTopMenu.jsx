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
                            <MobileButton title="Order Now" target="/MobilePage/OrderOnline"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <MobileButton title="Menu" target="/MobilePage/Menu/none"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <MobileButton title="Catering" target="/MobilePage/Catering"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <MobileButton title="Contact Us" target="/MobilePage/Contact"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}