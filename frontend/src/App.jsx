import {Routes, Route, Router} from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {

  return (
    <div>
     <NavBar/> 
     <Home />
     <About/>
     <Experience/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default App
