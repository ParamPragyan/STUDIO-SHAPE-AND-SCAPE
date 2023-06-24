import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
// import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Commercial from "./Components/Work/WorkSub/Commercial";
import Residential from "./Components/Work/WorkSub/Residential";
import Interior from "./Components/Work/WorkSub/Interior";
import HotelResort from "./Components/Work/WorkSub/HotelResort";
import Person1 from "./Components/Work/WorkSub/Person1";

// import Slider2 from './Components/Slider-second/Slider2';

function App() {
  return (
    <div className="App bg-black">
      <ScrollToTop />
      <NavBar />
      <div className="Hero">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/work" element={<Work />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/hotelresort" element={<HotelResort />} />
          <Route path="/person1" element={<Person1/>}/>
        </Routes>
      </div>
      {/* <Slider2/> */}

      <Footer />
    </div>
  );
}

export default App;
