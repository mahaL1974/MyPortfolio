import React, { useEffect, useState } from "react";
import {
  Users,
  Trophy,
  BookOpen,
  Globe,
  Gamepad2,
  Code,
  Palette,
  Mic,
} from "lucide-react";

const Leadership = () => {
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

    const element = document.getElementById("leadership");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const clubs = [
    {
      name: "BitsNBytes Tech Club",
      role: "Core Member",
      period: "2021 – 2024",
      icon: <Code className="w-8 h-8" />,
      description:
        "Leading technical initiatives and organizing competitive programming events",
      achievements: [
        "Core member for Gameathon (International game development competition)",
        "Trained students on 2D animation using Spriter",
        "Conducted UI design workshops with AI + Photoshop",
        "Organized web development contests like Code Cipher",
        "Led inter-branch coding competitions",
        "Conducted workshops in C, Java, Python & Web Development for juniors",
      ],
      color: "from-blue-600 to-blue-600",
      bgColor:
        "from-blue-50/50 to-blue-50/50 dark:from-blue-900/10 dark:to-blue-900/10",
    },
    {
      name: "World Language Club",
      role: "Korean Language Club Head",
      period: "2022 – 2024",
      icon: <Globe className="w-8 h-8" />,
      description:
        "Leading language learning initiatives and cultural exchange programs",
      achievements: [
        "Korean Language Club Head - led peer learning sessions",
        "Taught Korean basics to fellow students",
        "Successfully passed TOPIK Level 2 certification",
        "Active learner in Japanese Club",
        "Organized cultural exchange events",
        "Built multilingual community within campus",
      ],
      color: "from-blue-600 to-blue-600",
      bgColor:
        "from-blue-50/50 to-blue-50/50 dark:from-blue-900/10 dark:to-blue-900/10",
    },
  ];

  const skills = [
    { name: "Event Organization", icon: <Trophy className="w-5 h-5" /> },
    { name: "Public Speaking", icon: <Mic className="w-5 h-5" /> },
    { name: "Workshop Facilitation", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Team Leadership", icon: <Users className="w-5 h-5" /> },
    { name: "Technical Training", icon: <Code className="w-5 h-5" /> },
    { name: "Creative Design", icon: <Palette className="w-5 h-5" /> },
  ];

  return (
    <section
      id="leadership"
      className="py-20 bg-gradient-to-br from-white to-slate-100 dark:from-[#020B17] dark:to-[#0A1628] relative"
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
              Clubs & Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Building communities, organizing events, and empowering peers
              through technology and language
            </p>
          </div>

          <div className="grid gap-8 mb-16">
            {clubs.map((club, index) => (
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
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${club.bgColor} p-8 hover:shadow-2xl transition-all duration-300 group border border-blue-500/10 dark:border-blue-500/20`}
                >
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/3 space-y-6">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-3 rounded-lg bg-gradient-to-r ${club.color} text-white`}
                          >
                            {club.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                              {club.name}
                            </h3>
                            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                              {club.role}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {club.period}
                            </p>
                          </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {club.description}
                        </p>
                      </div>

                      <div className="lg:w-2/3">
                        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10 dark:border-blue-500/20">
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                            Key Contributions
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {club.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-slate-600 dark:text-slate-300 text-sm">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
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

          {/* Leadership Skills */}
          <div
            className={`transform transition-all duration-500 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/10 dark:border-blue-500/20">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                Leadership & Communication Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-300 delay-${
                      700 + index * 50
                    } ${
                      isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
                  >
                    <div className="bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-500/10 dark:border-blue-500/20">
                      <div className="text-blue-600 dark:text-blue-400 mb-2 flex justify-center">
                        {skill.icon}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
