
import './App.css';
// import Projects from './components/Projects';
// import Skillset from './components/Skillset';
import Home from './pages/Home'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
     
      <BrowserRouter basename='/portfolio'>
      <Routes>
        <Route path="/" element={ <Home/>} />
        {/* <Route path="/contact" element={ <Footer/>} />
        <Route path="/skills" element={ <Skillset/>} />
        <Route path="/projects" element={ <Projects/>} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
