import React, { useEffect, useState } from "react";
import { Mail, Github, Linkedin, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
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

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: "Email",
      value: "mahalakshmihc366@gmail.com",
      href: "mailto:mahalakshmihc366@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Github className="w-8 h-8" />,
      label: "GitHub",
      value: "github.com/mahaL",
      href: "https://github.com/mahaL1974",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/mahalakshmi-h-c/",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#020B17] relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-blue-500/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              <span className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                Let's Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Ready to collaborate on something amazing? Let’s build the future
              together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className={`transition-all duration-500 delay-${index * 100} ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <a
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`group block p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800/70 dark:to-slate-700/70 hover:shadow-xl transition duration-300 hover:scale-105 border border-blue-500/10 dark:border-blue-500/20 ${
                    contact.href === "#" ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <div className="text-center">
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${contact.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {contact.icon}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">
                      {contact.label}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      {contact.value}
                    </p>

                    {contact.href !== "#" && (
                      <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-purple-500 transition-colors duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Professional CTA */}
          <div
            className={`mt-16 text-center transform transition-all duration-500 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800/70 dark:to-slate-700/70 rounded-2xl p-8 border border-blue-500/10 dark:border-blue-500/20 max-w-4xl mx-auto backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to work together?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                Whether it’s building web apps, designing immersive experiences,
                or collabing on fresh ideas — I’m in!
              </p>
              <a
                href="mailto:mahalakshmihc366@gmail.com"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
