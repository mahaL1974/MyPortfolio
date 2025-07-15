import React, { useEffect, useState } from "react";
import { MapPin, Calendar, Briefcase, ArrowRight } from "lucide-react";

const Experience = () => {
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

    const element = document.getElementById("experience");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Shyena Solutions",
      position: "Associate Software Engineer",
      period: "June 2024 – Present",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Building scalable React applications, multilingual portals, and immersive 3D experiences for government and enterprise clients.",
      achievements: [
        "Developed a multilingual environmental monitoring portal for MPPCB with payment integration",
        "Created an interactive 3D portfolio website using React and Three.js",
        "Implemented responsive designs with performance optimizations",
        "Collaborated with cross-functional teams to deliver government-scale applications",
      ],
      technologies: [
        "React.js",
        "Three.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "i18n",
      ],
    },
    {
      company: "Shyena Solutions",
      position: "Software Engineer Intern",
      period: "March 2024 – May 2024",
      location: "Bangalore, India",
      type: "Internship",
      description:
        "Gained hands-on experience in React development and modern web technologies.",
      achievements: [
        "Contributed to the development of responsive web applications",
        "Learned industry best practices for React development",
        "Participated in code reviews and agile development processes",
        "Built reusable components and implemented clean code practices",
      ],
      technologies: ["React.js", "JavaScript", "CSS", "Git"],
    },
    {
      company: "ScienceUtsav",
      position: "Event Organizer + MC",
      period: "2023 – Present",
      location: "Multiple Cities, India",
      type: "Freelance",
      description:
        "Hosting high-energy science-themed shows and educational entertainment events for corporate clients and educational institutions.",
      achievements: [
        "Hosted 100+ events for Samsung, Infosys, schools, and malls",
        "Developed engaging science communication and presentation skills",
        "Created educational content for diverse age groups",
        "Built strong client relationships and repeat business",
      ],
      technologies: [
        "Public Speaking",
        "Event Management",
        "Science Communication",
        "Content Creation",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-100 to-white dark:from-[#0A1628] dark:to-[#020B17] relative"
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
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Professional journey spanning development, education, and event
              management
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-blue-600 h-full rounded-full"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } transform transition-all duration-500 delay-${
                    index * 200
                  } ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-[#020B17] shadow-lg z-10"></div>

                  {/* Experience card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-500/10 dark:border-blue-500/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg mr-3">
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              exp.type === "Full-time"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : exp.type === "Internship"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            }`}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3"></h4>
                      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {exp.company}
                      </h4>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600 dark:text-slate-300">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 mb-6">
                        {exp.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start">
                            <ArrowRight className="w-4 h-4 mt-0.5 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300 text-sm">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Experience;
