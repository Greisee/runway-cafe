import {React, useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { Outlet} from "react-router-dom";//must use link to change pages
import TopMenu from './TopMenu';
import MobileTop from "./mobileLayout/MobileTop.jsx";
import MobilePage from "./mobileLayout/MobilePage.jsx";
import "./layout.css";
import "./mobileLayout/mobile.css";

export default function Layout(){

    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsPhone(window.innerWidth <= 768);
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    if(isPhone){
        return(
            <div className="mobileTop">
                <Helmet>
                    Runway Cafe
                </Helmet>
                <div className = "mobileContent">
                    <MobileTop/>
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
    else{
        return(
            <div className="veryTop">
                <Helmet>
                    Runway Cafe
                </Helmet>
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
    
}

export function isMobile(){

}