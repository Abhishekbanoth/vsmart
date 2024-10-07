import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Testhome from './Components/testhome';

// Import react-dnd context and HTML5 backend
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/testhome" element={<Testhome />} />
        </Routes>
      </Router>
    </DndProvider>
  );
}

export default App;
