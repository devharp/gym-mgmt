import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import GetACoach from './pages/GetACoach'
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [bheight, setBHeight] = useState('100vh')
    const minheight = 500;
    function handleResize() {
        if(window.screen.height > minheight){
            setBHeight('100vh');
            // console.log('100vh');
        }
        else{
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
          <Route path="/tools" element={<Home />} />
          <Route path="/becomeacoach" element={<Home />} />
          <Route path="/aboutus" element={<Home />} />
          <Route path="/contactus" element={<Home />} />
          <Route path="/joinus" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
