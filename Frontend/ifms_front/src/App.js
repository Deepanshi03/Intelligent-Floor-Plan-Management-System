import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
