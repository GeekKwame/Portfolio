import React, { Suspense, lazy } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
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
          <Home />
          <SocialLinks />
          <Suspense fallback={
            <div className='flex items-center justify-center min-h-[50vh] bg-gradient-to-b from-gray-800 to-stone-900'>
              <div className='w-10 h-10 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin'></div>
            </div>
          }>
            <About />
            <Education />
            <Portfolio />
            <Experience />
            <Contact />
          </Suspense>
          <Footer />
          <ScrollToTop />
        </div>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
