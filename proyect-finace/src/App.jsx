import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {
  Hero,
  Navbar,
  Banco,
  BalanceG
} from "./components";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Barra de navegación */}
        <Hero />
        <Routes>
          <Route path="/" element={<BalanceG />} />
          <Route path="/taza-banco" element={<Banco />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
