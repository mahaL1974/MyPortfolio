import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  BookOpen,
  Star,
} from "lucide-react";

const Education = () => {
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

    const element = document.getElementById("education");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const education = {
    degree: "Bachelor of Engineering",
    field: "Information Science & Engineering",
    institution: "Jyothy Institute of Technology",
    period: "2020 – 2024",
    location: "Bangalore, India",
    gpa: "7.74",
    highlights: [
      "Specialized in software development and web technologies",
      "Completed multiple projects in React.js and JavaScript",
      "Participated in technical workshops and coding competitions",
      "Maintained consistent academic performance throughout the program",
    ],
  };

  const certifications = [
    {
      title: "TOPIK Level 2",
      subtitle: "Korean Language Proficiency",
      description:
        "Official Korean language certification demonstrating intermediate proficiency",
    },
    {
      title: "Basic Japanese Learning",
      subtitle: "World Language Club",
      description:
        "Foundational Japanese language skills through structured learning program",
    },
  ];

  const achievements = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Maintained a strong GPA of 7.74/10 throughout the program",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Technical Focus",
      description: "Specialized in modern web development technologies",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Project Leadership",
      description: "Led multiple development projects during coursework",
    },
  ];

  return (
    <section
      id="education"
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
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Academic foundation and language certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div
              className={`transform transition-all duration-500 delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-500/10 dark:border-blue-500/20">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-xl mr-4">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {education.degree}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {education.field}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <BookOpen className="w-5 h-5 mr-3" />
                    <span className="font-medium">{education.institution}</span>
                  </div>

                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span>{education.period}</span>
                  </div>

                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>{education.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-300">
                      GPA
                    </span>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 mr-2">
                        {education.gpa}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        /10
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {education.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-600 dark:text-slate-300 text-sm">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-500 delay-400 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                  Language Certifications
                </h3>

                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-500 delay-${
                      600 + index * 100
                    } ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-500/10 dark:border-blue-500/20">
                      <div className="flex items-center mb-3">
                        <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {cert.title}
                        </h4>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {cert.subtitle}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}

                <div
                  className={`transform transition-all duration-500 delay-800 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-500/10 dark:border-blue-500/20">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                      Academic Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {achievements.map((achievement, i) => (
                        <div key={i} className="text-center">
                          <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-lg mx-auto w-fit mb-2">
                            {achievement.icon}
                          </div>
                          <h5 className="font-medium text-slate-900 dark:text-white text-sm mb-1">
                            {achievement.title}
                          </h5>
                          <p className="text-slate-600 dark:text-slate-300 text-xs">
                            {achievement.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
