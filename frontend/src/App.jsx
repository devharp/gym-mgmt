import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import PageNotFound from "./pages/PageNotFound";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getacoach" element={<Home />} />
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
