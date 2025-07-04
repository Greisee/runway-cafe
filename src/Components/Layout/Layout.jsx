import React from 'react';
import { Outlet,Link} from "react-router-dom";//must use link to change pages
import TopMenu from './TopMenu';
import "./layout.css";

export default function Layout(){
    return(
        <div className="veryTop">
            <TopMenu/>
            <div className = "mainContent">
                <Outlet/>
            </div>
            <div>
                <footer>
                    footer
                </footer>
            </div>
        </div>
    );
}