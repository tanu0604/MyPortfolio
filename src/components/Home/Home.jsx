import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Github, Linkedin, Mail, Download, ExternalLink, Code2 } from "lucide-react";
import image from "../../assets/Home.png";
import About from "../About/About"
import ContactForm from "../ContactForm/ContactForm"
import Skills from "../Skills/Skills"
import Projects from "../Projects/Project"
export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500, // Shorter duration for faster animations
      easing: "ease-in-sine",
      delay: 50, // Shorter delay for quicker appearance
    });
    AOS.refresh();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,  // Shorter stagger time for quicker sequential animation
        delayChildren: 0.2,     // Slight delay before first element appears
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,  // Shorter duration for quicker animation
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6, // Faster image transition
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      name: "Leetcode",
      icon: <Code2 className="w-5 h-5" />,
      href: "https://leetcode.com/u/tanushreepaul0604/",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/tanu0604",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/tanushree-paul-b491a8265/",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:tanushreepaul@gmail.com",
    },
  ];

  return (
    <>
    <div className="min-h-screen w-screen flex justify-center items-center bg-black p-4" id="home">
      <motion.div
        className="flex flex-col-reverse lg:flex-row lg:space-x-12 justify-center items-center max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text content */}
        <motion.div
          className="text-white mt-8 lg:mt-0 flex flex-col items-center lg:items-start space-y-6"
          variants={itemVariants}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Greeting */}
          <motion.div
            className="flex flex-col space-y-3 text-center lg:text-left"
            variants={itemVariants}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <motion.span
              className="text-sm uppercase tracking-wider text-gray-400"
              variants={itemVariants}
            >
              Welcome to my portfolio
            </motion.span>
            <motion.h1
              className="font-raleway text-4xl sm:text-5xl lg:text-6xl font-bold"
              variants={itemVariants}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Hello! I am
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                {" "}Tanushree
              </span>
            </motion.h1>
            <motion.h2
              className="font-merriweather text-2xl sm:text-3xl text-gray-300"
              variants={itemVariants}
              data-aos="fade-up"
              data-aos-delay="250"
            >
Full Stack Developer | Voice & Workflow Automation            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="max-w-md text-center lg:text-left text-gray-400"
            variants={itemVariants}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Passionate about creating beautiful, responsive, and user-friendly web applications
            using modern technologies and best practices.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4"
            variants={itemVariants}
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <a
              href="https://drive.google.com/file/d/1hnoScxekJ_mSEo-SZdfPfyb_PalPUd3f/view?usp=sharing"
              download
              className="bg-white text-black hover:bg-gray-200 transition-colors duration-300 py-2 px-4 rounded flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
{/*             <a
             href: "/project"
              className="text-white border-white border py-2 px-4 rounded hover:bg-white/10 flex items-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Projects
            </a> */}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            variants={itemVariants}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center"
          variants={imageVariants}
          data-aos="fade-up"
          data-aos-delay="450"
        >
          <div className="relative w-[300px] sm:w-[400px] aspect-square">
            <img
              src={image}
              alt="Tanushree's Illustration"
              className="object-contain w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <ContactForm/>

    </>
  );
}
