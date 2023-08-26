import "./index.css";
import { Routes ,Route } from 'react-router-dom'
import { Index } from './components/Index';
import Logreg from "./components/LoginPage/Logreg";
import FullHomepage from "./components/HomePage/FullHomepage";
import Register from "./components/LandingPage/Register";
import React from 'react';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" Component={Logreg} />
        <Route path="/fullhomepage" Component={FullHomepage} />
        <Route path="/Register" Component={Register} />
      </Routes>
    </>
  );
}

export default App;
