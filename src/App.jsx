import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from "./Components/Home"
import About from './Components/About';
import Services from './Components/Services';
import Work from './Components/Work';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
    <>
    <NavBar/>
    <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/about' element = {<About/>}/>
       <Route path='/services' element = {<Services/>}/>
       <Route path='/work' element = {<Work/>}/>
       <Route path='/contact' element = {<Contact/>}/>
    </Routes>
    </>
    
    </div>
  );
}

export default App;
