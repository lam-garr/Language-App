import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import OverlayComponent from './components/OverlayComponent';
import NavComponent from "./components/NavComponent";
import CoursesPage from "./pages/CoursesPage";
import LessonsPage from "./pages/LessonsPage";
import SidebarComponent from "./components/SidebarComponent";
import './styles/App.css';

function App() {

  //handle overlay change
  const [ overlayIsOpen, setOverlayIsOpen ] = useState(false);

  const changeOverlay = () => {
    setOverlayIsOpen(!overlayIsOpen);
  }

  //handle sidebar change
  const [ sidebarIsOpen, setSidebarIsOpen ] = useState(false);

  const handleSidebarChange = () => {
    setSidebarIsOpen(true);
    setOverlayIsOpen(!overlayIsOpen);
  }

  return (
    <BrowserRouter>
      <NavComponent sidebarHandler={handleSidebarChange}/>
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
