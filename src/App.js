
import "./App.css";
import {Routes, Route} from "react-router-dom"
import Home from './containers/Home';
import About from './containers/About';

import Projects from './containers/Projects';
import Contact from './containers/Contact';
import Navbar from './components/Navbar';


function App() {


  return (
    <div className="App">



      {/* navbar */}
      <Navbar />




      {/* mainpage content */}
      <div className="App_main_page_content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>



    </div>
  );
}

export default App;
