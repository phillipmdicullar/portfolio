import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; 
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="app">
      <div className="snow-container">
  {[...Array(30)].map((_, i) => (
    <div
      key={i}
      className="snowflake"
      style={{
        "--random-x": Math.random(),
        "--random-delay": Math.random()
      }}
    ></div>
  ))}
</div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
