import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from './components/About';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import SkipToContent from "./components/SkipToContent";
import StructuredData from "./components/StructuredData";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <div className="App">
          <StructuredData />
          <SkipToContent />
          <ScrollProgress />
          <NavBar />
          <SocialLinks />
          <main id="main">
            <Home />
            <About />
            <Education />
            <Portfolio />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
