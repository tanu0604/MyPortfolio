import { useEffect } from "react";
import AOS from "aos"; // Import AOS
import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/project" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "GitHub", href: "https://github.com/tanu0604" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/tanushree-paul-b491a8265/" },
        { name: "Email", href: "mailto:tanushreepaul2004@gmail.com" },
      ],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animation once
      offset: 200, // Trigger animation when 200px away from the element
    });
  }, []);

  return (
    <footer className="bg-black text-white relative">
      {/* Scroll to top button */}
      <div
        className="absolute -top-6 left-1/2 -translate-x-1/2"
        data-aos="fade-up" // AOS animation trigger for scroll
        data-aos-delay="500"
      >
        <button
          onClick={scrollToTop}
          className="rounded-full bg-white text-black hover:bg-gray-200 hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand section */}
          <div className="space-y-4" data-aos="fade-up">
            <h2 className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Tanushree Paul
              </span>
            </h2>
            <p className="text-gray-400 max-w-xs">
              Frontend developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tanu0604"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tanushree-paul-b491a8265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:tanushreepaul2004@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4" data-aos="fade-up">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                      data-aos="fade-up"
                      data-aos-delay="900"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} Tanushree Paul.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
