import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Error404 from "./Components/Utility/Error404.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Page from "./Components/Layout/Page.jsx";
import MobilePage from "./Components/Layout/mobileLayout/MobilePage.jsx";
import Home from "./Components/Content/Home.jsx";
import Menu from "./Components/Content/Menu.jsx";
import Catering from "./Components/Content/Catering.jsx";
import Contact from "./Components/Content/Contact.jsx";
import OrderOnline from "./Components/Content/OrderOnline.jsx";


export default function App() {
  return (
    <div style = {{backgroundColor:"#00000000"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="*" element={<Error404/>}/>

              <Route path="Page/" element={<Page/>}>
                <Route path="OrderOnline" element={<OrderOnline/>}/>
                <Route path="Menu/:menu" element={<Menu/>}/>
                <Route path="Catering" element={<Catering/>}/>
                <Route path="Contact" element={<Contact/>}/>
              </Route>

              <Route path="MobilePage/" element={<MobilePage/>}>
                <Route path="OrderOnline" element={<OrderOnline/>}/>
                <Route path="Menu/:menu" element={<Menu/>}/>
                <Route path="Catering" element={<Catering/>}/>
                <Route path="Contact" element={<Contact/>}/>
              </Route>
              
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
    )
}