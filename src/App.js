import logo from './logo.svg';
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Topbanner from './Components/Topbanner/Topbanner';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <div className='container-fluid bg-custom siteMargin'>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
          <Navbar></Navbar>
        </div>
        <div className="col-12 col-md-12 col-lg-12">
          <Topbanner></Topbanner>

        </div>
        <div className="col-12 col-md-12 col-lg-12">
          <About></About>

        </div>
        <div className="col-12 col-md-12 col-lg-12">
          <Skills></Skills>

        </div>
        <div className="col-12 col-md-12 col-lg-12">
          <Projects></Projects>

        </div>
        <div className="col-12 col-md-12 col-lg-12">
          <Contact></Contact>

        </div>
        <div className="col-12 col-md-12 col-lg-12">
          <Footer></Footer>

        </div>
      </div>
    </div>
  );
}

export default App;
