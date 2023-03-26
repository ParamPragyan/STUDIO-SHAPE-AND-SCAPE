import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ScrollRestoration } from "react-router-dom";


import NavBar from './Components/NavBar';
import Home from "./Components/Home"
import About from './Components/About';
import Services from './Components/Services';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

// import Slider2 from './Components/Slider-second/Slider2';

function App() {
  return (
    <div className="App">
    <ScrollToTop/>
    <NavBar/>
    <div className='Hero'>
    <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/about' element = {<About/>}/>
       <Route path='/services' element = {<Services/>}/>
       <Route path='/work' element = {<Work/>}/>
       <Route path='/contact' element = {<Contact/>}/>
    </Routes>
    </div>
    {/* <Slider2/> */}
    
    <Footer /> 
 

    
    </div>
  );
}

export default App;
