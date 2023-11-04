import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import OverlayComponent from './components/OverlayComponent';
import './styles/App.css';

function App() {

  const [ overlayIsOpen, setOverlayIsOpen ] = useState(false);

  const changeOverlay = () => {
    setOverlayIsOpen(!overlayIsOpen);
  }

  return (
    <BrowserRouter>
      <OverlayComponent isOpen={overlayIsOpen}/>
      <Routes>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
