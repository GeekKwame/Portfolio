import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TechTicker from "./components/TechTicker";
import TelemetryMetrics from "./components/TelemetryMetrics";
import SocialLinks from "./components/SocialLinks";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Education from './components/Education';
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
        <div className="App bg-canvas min-h-screen text-slate-100 selection:bg-accent selection:text-canvas">
          <StructuredData />
          <SkipToContent />
          <ScrollProgress />
          <NavBar />
          <SocialLinks />
          <main id="main">
            <Home />
            <TechTicker />
            <TelemetryMetrics />
            <About />
            <Portfolio />
            <Experience />
            <Education />
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
