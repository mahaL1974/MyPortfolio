import React, { useEffect, useState } from "react";
import { ChevronDown, Code, Palette, Zap } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const words = [
    "Beautiful UIs",
    "Smart Code",
    "Creative Solutions",
    "Modern Web Apps",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#020B17] dark:to-[#0A1628]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-8 flex justify-center space-x-6">
            <div className="p-3 bg-white/10 dark:bg-slate-800/30 rounded-full backdrop-blur-sm border border-blue-500/20">
              <Code className="w-8 h-8 text-slate-700 dark:text-blue-400" />
            </div>
            <div className="p-3 bg-white/10 dark:bg-slate-800/30 rounded-full backdrop-blur-sm border border-blue-500/20">
              <Palette className="w-8 h-8 text-slate-700 dark:text-blue-400" />
            </div>
            <div className="p-3 bg-white/10 dark:bg-slate-800/30 rounded-full backdrop-blur-sm border border-blue-500/20">
              <Zap className="w-8 h-8 text-slate-700 dark:text-blue-400" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Mahalakshmi H C
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-8 h-12 flex items-center justify-center font-light">
            <span>I create </span>
            <span className="ml-2 text-blue-600 dark:text-blue-400 font-semibold min-w-[200px] text-left">
              {words[currentWord]}
            </span>
          </div>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            A curious technophile who thrives at the intersection of code,
            creativity, and community. React developer by day, educator and
            event MC by passion — building everything from government portals to
            birthday science shows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-blue-500/20"
            >
              Explore My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white transform hover:scale-105 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
