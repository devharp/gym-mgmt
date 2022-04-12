import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import GetACoach from './pages/GetACoach'
import PageNotFound from "./pages/PageNotFound";
import Tools from "./pages/Tools";
import BecomeACoach from "./pages/BecomeACoach";
import Trainers from "./pages/Trainers";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BasicPlans from "./pages/BasicPlans";
import IntermediatePlans from "./pages/IntermediatePlans";
import AdvancedPlans from "./pages/AdvancedPlans";

function App() {
  const [bheight, setBHeight] = useState('100vh')
  const minheight = 500;
  function handleResize() {
    if (window.screen.height > minheight) {
      setBHeight('100vh');
      // console.log('100vh');
    }
    else {
      setBHeight(`${minheight}px`);
      // console.log(`${minheight}px`);
    }

  }
  useEffect(() => {

    window.addEventListener('resize', handleResize);
    console.log('once')
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home bheight={bheight} />} />
          <Route path="/getacoach" element={<GetACoach bheight={bheight} />} />
          <Route path="/trainers" element={<Trainers bheight={bheight} />} />
          <Route path="/tools" element={<Tools bheight={bheight} />} />
          <Route path="/becomeacoach" element={<BecomeACoach bheight={bheight} />} />
          
          <Route path="/register" element={<Register bheight={bheight} />} />
          {/* <Route path="/register" element={<PageNotFound />} />} /> */}


          <Route path="/basicplans" element={<BasicPlans bheight={bheight} />} />
          <Route path="/intermediateplans" element={<IntermediatePlans bheight={bheight} />} />
          <Route path="/advancedplans" element={<AdvancedPlans bheight={bheight} />} />
          
          <Route path="/aboutus" element={<AboutUs bheight={bheight} />} />
          <Route path="/contactus" element={<ContactUs bheight={bheight} />} />
          <Route path="/joinus" element={<PageNotFound />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
