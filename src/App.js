import React from "react";
import Home from './components/Home';
import Faq from './components/Faq';
import About from './components/About';
import Contact from './components/Contact';

import '/home/uki-jaffna/Documents/client4/src/components/assets/css/animate.css'
import '/home/uki-jaffna/Documents/client4/src/components/assets/css/flex-slider.css'
import '/home/uki-jaffna/Documents/client4/src/components/assets/css/fontawesome.css'
import '/home/uki-jaffna/Documents/client4/src/components/assets/css/owl.css'
import '/home/uki-jaffna/Documents/client4/src/components/assets/css/templatemo-tale-seo-agency.css'
import { BrowserRouter, Routes ,Route} from 'react-router-dom';


function App() {
  return (
  
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/faq" element={<Faq/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  
   
  );
}

export default App;
