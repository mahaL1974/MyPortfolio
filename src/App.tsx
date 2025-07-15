import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollPipe from "./components/ScrollPipe";
import ThreeBackground from "./components/ThreeBackground";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThreeBackground />
        <ScrollPipe />

        {/* Animated Background Elements */}
        <div>
          <div className="fixed inset-0 pointer-events-none z-50">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-50 delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-30 delay-500"></div>

            {/* Neural Network Lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              viewBox="0 0 1920 1080"
            >
              <defs>
                <linearGradient
                  id="pipeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#1E40AF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                d="M0,200 Q400,100 800,300 T1600,200 L1920,250 L1920,270 L1600,220 Q1200,320 800,320 Q400,120 0,220 Z"
                fill="url(#pipeGradient)"
                className="animate-pulse"
              />
              <path
                d="M0,600 Q600,500 1200,700 T1920,600 L1920,620 L1200,720 Q600,520 0,620 Z"
                fill="url(#pipeGradient)"
                className="animate-pulse delay-1000"
              />
            </svg>
          </div>

          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Leadership />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
