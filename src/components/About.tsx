import React, { useEffect, useState } from 'react';
import { Code2, Sparkles, Target, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const qualities = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Curiosity",
      description: "Always exploring new technologies and pushing creative boundaries"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Creativity",
      description: "Transforming ideas into beautiful, interactive user experiences"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Consistency",
      description: "Delivering high-quality code and maintaining best practices"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively with teams to build scalable solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-slate-100 dark:from-[#0A1628] dark:to-[#020B17] relative">
      {/* Connecting Pipe Element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-blue-500/60 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-blue-400/20 rounded-lg blur"></div>
                <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg p-8 border border-blue-500/10 dark:blue-blue-500/20">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Curious Technophile & Community Builder
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    I'm Mahalakshmi H C, a curious technophile who thrives at the intersection of code, creativity, and community. 
                    Currently a React developer by day, but also an educator, event MC, language lover, and club leader.
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    I build clean UI, run tech workshops, organize science events, host competitions, and have taught Korean to peers. 
                    This portfolio is a reflection of my dynamic journey — from government tech portals to birthday science shows.
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Multi-passionate creator
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div
                  key={quality.title}
                  className={`transform transition-all duration-500 delay-${index * 100} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-500/10 dark:border-blue-500/20">
                    <div className="text-blue-600 dark:text-blue-400 mb-4">
                      {quality.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {quality.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {quality.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;