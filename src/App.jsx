import { React, useEffect } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Error404 from "./Components/Utility/Error404.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Page from "./Components/Layout/Page.jsx";
import Home from "./Components/Content/Home.jsx";
import Menu from "./Components/Content/Menu.jsx";
import OrderOnline from "./Components/Content/OrderOnline.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="Page/" element={<Page/>}>
              <Route path="OrderOnline" element={<OrderOnline/>}/>
              <Route path="Menu" element={<Menu/>}/>
            </Route>
            <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App
