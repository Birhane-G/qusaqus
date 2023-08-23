import "./index.css";
import { Routes ,Route } from 'react-router-dom'
import { Index } from './components/Index';
import Logreg from "./components/LoginPage/Logreg";
import FullHomepage from "./components/HomePage/FullHomepage";
import React from 'react';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" Component={Logreg} />
        <Route path="/fullhomepage" Component={FullHomepage} />
      </Routes>
    </>
  );
}

export default App;
