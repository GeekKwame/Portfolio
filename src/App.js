import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="App">
     <ScrollProgress/>
     <NavBar/>
     <Home/>
     <SocialLinks/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contact/>
     <Footer/>
     <ScrollToTop/>
    </div>
  );
}

export default App;
