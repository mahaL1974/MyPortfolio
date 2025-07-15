import React, { useEffect, useState } from "react";
import {
  ExternalLink,
  Github,
  Globe,
  Zap,
  Shield,
  Palette,
} from "lucide-react";

const Projects = () => {
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

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Integrated Environment Management System",
      subtitle: "MPPCB Government Portal",
      description:
        "Government project using React, Redux, i18n, Tailwind, PrimeReact. Added payment gateway, multilingual support, and lazy loading for Maharashtra Pollution Control Board.",
      icon: <Shield className="w-8 h-8" />,
      technologies: [
        "React.js",
        "Redux Toolkit",
        "i18n",
        "Tailwind CSS",
        "REST APIs",
      ],
      features: [
        "Multilingual support (English, Hindi, Marathi)",
        "Responsive design for all devices",
        "Payment gateway integration",
        "Performance optimized for large-scale usage",
        "Government compliance and security standards",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor:
        "from-blue-50/50 to-blue-50/50 dark:from-blue-900/10 dark:to-blue-900/10",
    },
    {
      title: "Shyena Website",
      subtitle: "Official Website for Shyena Solutions Pvt. Ltd",
      description:
        "3D React + Three.js portfolio with dynamic CMS content and scroll-based scenes. Features immersive 3D graphics with Strapi CMS integration.",
      icon: <Palette className="w-8 h-8" />,
      technologies: [
        "React.js",
        "Three.js",
        "Strapi CMS",
        "SCSS",
        "Lazy Loading",
      ],
      features: [
        "Interactive 3D graphics and animations",
        "Dynamic content from Strapi CMS",
        "Lazy loading for performance optimization",
        "Modern UI/UX with smooth animations",
        "Responsive 3D scenes",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor:
        "from-blue-50/50 to-blue-50/50 dark:from-blue-900/10 dark:to-blue-900/10",
    },
    {
      title: "Portfolio",
      subtitle: "My Profile",
      description:
        "This very portfolio you're viewing! Built with React and Tailwind CSS, featuring, animated neural networks, and terminal aesthetics.",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["React.js", "Tailwind CSS", "Lucide React", "TypeScript"],
      features: [
        // "Futuristic sci-fi terminal design",
        // "Animated neural network backgrounds",
        // "Dark/Light mode toggle",
        // "Smooth scroll animations",
        // "Glowing neon blue accents",
        // "Deep navy and black color scheme",
      ],
      color: "from-blue-600 to-blue-500",
      bgColor:
        "from-blue-50/50 to-blue-50/50 dark:from-blue-900/10 dark:to-blue-900/10",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-[#020B17] relative"
    >
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Real-world applications spanning government portals to 3D
              experiences
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 delay-${
                  index * 200
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.bgColor} p-8 hover:shadow-2xl transition-all duration-300 group`}
                >
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/2 space-y-6">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}
                          >
                            {project.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                              {project.title}
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
                              {project.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-blue-500/10 dark:border-blue-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:w-1/2">
                        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10 dark:border-blue-500/20">
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-slate-600 dark:text-slate-300 text-sm">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
