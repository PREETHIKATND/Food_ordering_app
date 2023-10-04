import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section2 from "./pages/Home/Section2";
import Section3 from "./pages/Home/Section3";
import Section4 from "./pages/Home/Section4";
import Section5 from "./pages/Home/Section5";


import HomeContent from '../src/Routings/Home/Home.jsx';
import Login from "./Routings/Login/Login.jsx";
import About from "./Routings/About/About";
import Restaurant from "./Routings/Restaurant/Restaurant";


import Home from "./pages/Home/Home"
import Restaur1 from "./Routings/Restaurant/Restaur1/Restaur1.jsx";
import Restaur2 from "./Routings/Restaurant/Restaur2/Restaur2.jsx";
import Restaur3 from "./Routings/Restaurant/Restaur3/Restaur3.jsx";
import Restaur4 from "./Routings/Restaurant/Restaur4/Restaur4.jsx";
import Cart from "./Routings/Restaurant/Cart";
import Draft from './Routings/Restaurant/Draft.jsx';
import Contact from "./Routings/Contact/Contact";


import Homes from './components/1002 - Redux Concepts/Home.jsx'; 
import Create from "./components/1002 - Redux Concepts/Create";
import Update from "./components/1002 - Redux Concepts/Update";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<Section2 />} />
        <Route path="/menu" element={<Section3 />} />
        <Route path="/shop" element={<Section4 />} />
        <Route path="/blog" element={<Section5 />} /> */}
        {/* <Route path="/contact" element={<Section6 />} />  */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SignUp /> } />  */}

        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        
        <Route path="/Restaurant1" element={<Restaur1 />} />
        <Route path="/Restaurant2" element={<Restaur2 />} />
        <Route path="/Restaurant3" element={<Restaur3 />} />
        <Route path="/Restaurant4" element={<Restaur4 />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/items" element={<Draft/> } />
        <Route path="/LoginPage" element={<Login />} />

        <Route path="/redux" element={<Homes />} />
        <Route path="/createAxios" element={<Create />} />
        <Route path="/editAxios/:id" element={<Update />} />

        
      </Routes>
    </Router>
  );
}

export default App;
