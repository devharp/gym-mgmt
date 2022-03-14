import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import GetACoach from './pages/GetACoach'
import PageNotFound from "./pages/PageNotFound";
import Tools from "./pages/Tools";

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
          <Route path="/tools" element={<Tools bheight={bheight} />} />
          <Route path="/becomeacoach" element={<PageNotFound />} />
          <Route path="/aboutus" element={<PageNotFound />} />
          <Route path="/contactus" element={<PageNotFound />} />
          <Route path="/joinus" element={<PageNotFound />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
