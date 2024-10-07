import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Testhome from './Components/testhome'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/testhome" element={<Testhome />} />
      </Routes>
    </Router>
  );
}

export default App;
