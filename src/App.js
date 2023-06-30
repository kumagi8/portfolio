
import './App.css';
import Home from './pages/Home'
import { BrowserRouter, Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter basename={document.baseURI.substring(document.baseURI.indexOf(window.location.origin) + window.location.origin.length, document.baseURI.lastIndexOf('/'))}>
      <Routes>
        <Route path="/" element={ <Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
