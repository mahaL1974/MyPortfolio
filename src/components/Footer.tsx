import React from "react";
import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-[#020B17] text-white py-12 border-t border-slate-800 dark:border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 text-slate-300">
              {/* <span>Made with</span>
              <Heart className="w-5 h-5 text-blue-500 animate-pulse" />
              <span>and</span> */}
              <Code className="w-5 h-5 text-blue-400" />
              <span>by Mahalakshmi H C</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-6 text-slate-400">
            <Coffee className="w-4 h-4" />
            <span className="text-sm">
              Fueled by curiosity, creativity, and community
            </span>
          </div>

          <div className="border-t border-slate-700 dark:border-blue-500/20 pt-6">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Mahalakshmi H C. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Built with React, TypeScript, Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
