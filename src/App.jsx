import './App.css'
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
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
