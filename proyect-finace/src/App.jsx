//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Banco from './components/Banco';
import BalanceG from './components/BalanceG';
import Contacto from './components/contacto';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/proyecto_finanzas" element={<div><BalanceG /></div>} />
          
          <Route path="/taza-banco" element={<Banco />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
