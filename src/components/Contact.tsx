import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Github, Send, MessageCircle, User, MapPin } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gtyh6oe", // e.g., service_xxx
        "template_3zw3gaf", // e.g., template_yyy
        formData,
        "1buZPG8SvGuxLpqOI" // e.g., 'xzyabc123'
      )
      .then(
        (result) => {
          console.log("✅ Email sent!", result.text);
          setFormData({ name: "", email: "", message: "" });
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Email failed:", error.text);
          alert("Oops! Email sending failed 😓");
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mahalakshmihc366@gmail.com",
      href: "mailto:mahalakshmihc366@gmail.com",
      color: "from-blue-600 to-blue-700",
    },
    // {
    //   icon: <Phone className="w-6 h-6" />,
    //   label: "Phone",
    //   value: "+91 91108 89546",
    //   href: "tel:+919110889546",
    //   color: "from-blue-600 to-blue-700",
    // },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/mahaL",
      href: "https://github.com/mahaL1974",
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
      color: "from-blue-600 to-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#020B17] relative">
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Let's collaborate on something amazing together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div
              className={`transform transition-all duration-500 delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-700/80 rounded-2xl p-8 border border-blue-500/10 dark:border-blue-500/20 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Let's Connect
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    Ready to build something amazing together? Whether it's a
                    cutting-edge web application, an educational workshop, or an
                    exciting event collaboration, I'd love to hear from you.
                    Let's turn ideas into reality!
                  </p>

                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        target={
                          contact.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`flex items-center p-4 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-500/10 dark:border-blue-500/20 group ${
                          contact.href === "#"
                            ? "cursor-default"
                            : "cursor-pointer"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {contact.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {contact.label}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transform transition-all duration-500 delay-400 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-gradient-to-br from-blue-50/50 to-blue-50/50 dark:from-slate-800/80 dark:to-slate-700/80 rounded-2xl p-8 border border-blue-500/10 dark:border-blue-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/90 dark:bg-slate-800/90 border border-blue-500/20 dark:border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 dark:text-white placeholder-slate-400 transition-all duration-200"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/90 dark:bg-slate-800/90 border border-blue-500/20 dark:border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 dark:text-white placeholder-slate-400 transition-all duration-200"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageCircle className="w-5 h-5 text-slate-400" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-white/90 dark:bg-slate-800/90 border border-blue-500/20 dark:border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 dark:text-white placeholder-slate-400 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
