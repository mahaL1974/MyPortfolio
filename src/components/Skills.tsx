import React, { useEffect, useState } from "react";
import {
  Code,
  Palette,
  Database,
  Globe,
  Zap,
  GitBranch,
  Figma,
  Smartphone,
} from "lucide-react";

const Skills = () => {
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

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Core Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        {
          name: "React.js",
          level: 70,
          description: "Hooks, Router, Context API",
        },
        { name: "Redux Toolkit", level: 30, description: "State Management" },
        { name: "Tailwind CSS", level: 95, description: "Utility-first CSS" },
        { name: "PrimeReact", level: 90, description: "Component library" },
      ],
    },
    {
      title: "3D & Advanced Tech",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        {
          name: "Three.js",
          level: 20,
          description: "3D graphics & animations",
        },
        { name: "Strapi CMS", level: 40, description: "Headless CMS" },
        { name: "i18n", level: 85, description: "react-i18next" },
      ],
    },
    {
      title: "Tools & Integration",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "REST APIs", level: 85, description: "API integration" },
        { name: "Axios", level: 60, description: "HTTP client" },
        { name: "Git/GitHub", level: 68, description: "Version control" },
        { name: "Figma", level: 50, description: "Design collaboration" },
      ],
    },
    {
      title: "Languages & Design",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        {
          name: "C/Java",
          level: 70,
          description: "Programming languages",
        },
        { name: "Adobe Photoshop", level: 75, description: "Design & editing" },
        { name: "Spriter", level: 60, description: "2D animation" },
        {
          name: "Korean (TOPIK L2)",
          level: 35,
          description: "Language proficiency",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#020B17] relative">
      {/* Connecting Pipe Element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-blue-500/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Multi-disciplinary toolkit spanning development, design, and
              communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`transform transition-all duration-500 delay-${
                  categoryIndex * 100
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-700/80 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-500/10 dark:border-blue-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`transform transition-all duration-500 delay-${
                          categoryIndex * 100 + skillIndex * 50
                        } ${
                          isVisible
                            ? "translate-x-0 opacity-100"
                            : "translate-x-10 opacity-0"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {skill.name}
                          </h4>
                          <span className="text-sm text-slate-500 dark:text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                          {skill.description}
                        </p>
                        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
