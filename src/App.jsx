import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import SkipToContent from "./components/SkipToContent";
import StructuredData from "./components/StructuredData";
import ErrorBoundary from "./components/ErrorBoundary";
import CursorDot from "./components/CursorDot";
import Marquee from "./components/Marquee";
import ResumeBanner from "./components/ResumeBanner";
import { ToastProvider } from "./context/ToastContext";
import useReveal from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <ErrorBoundary>
      <ToastProvider>
        <StructuredData />
        <SkipToContent />
        <ScrollProgress />
        <CursorDot />
        <NavBar />
        <main id="main" tabIndex={-1} className="outline-none">
          <Home />
          <Marquee />
          <Portfolio />
          <Experience />
          <About />
          <Skills />
          <Education />
          <ResumeBanner />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
