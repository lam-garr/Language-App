import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import OverlayComponent from './components/OverlayComponent';
import NavComponent from "./components/NavComponent";
import CoursesPage from "./pages/CoursesPage";
import './styles/App.css';

function App() {

  const [ overlayIsOpen, setOverlayIsOpen ] = useState(false);

  const changeOverlay = () => {
    setOverlayIsOpen(!overlayIsOpen);
  }

  return (
    <BrowserRouter>
      <NavComponent/>
      <OverlayComponent isOpen={overlayIsOpen}/>
      <Routes>
        <Route path="/:username" element={<LandingPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
