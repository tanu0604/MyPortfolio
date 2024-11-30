import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/About.png";
// About Component
export default function About() {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for paragraph with characters animation
  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        duration: 0.5,
      },
    },
  };

  const text = `Hi, I'm Tanushree Paul, a passionate learner and software developer with a focus on frontend technologies. With 3 years of coding experience, I have honed my skills in React and Tailwind CSS and continue to explore new technologies to improve my craft. I am driven by a problem-solving mindset, consistently challenging myself with coding problems on platforms like LeetCode. My approach is to master one technology before moving to the next, and I enjoy building projects that provide real-world solutions. When I'm not coding, you can find me diving into data structures and algorithms or learning something new to further my understanding of software development. My goal is to keep growing as a developer, build impactful projects, and contribute to the tech community.`;

  return (
    <section className="min-h-screen py-12 bg-black" id="about">
      <motion.h1
        className="text-white flex justify-center mt-2 p-3 text-4xl font-raleway"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        About Me
      </motion.h1>

      <div className="flex justify-center items-center flex-col space-y-4 lg:flex-row lg:space-x-2 lg:space-y-0 max-w-7xl mx-auto px-4">
        {/* Image */}
        <motion.div
          className="flex items-center justify-center w-full lg:w-1/2"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="relative w-full md:w-1/2 aspect-square">
            <img
              src={image}
              alt="Tanushree's Illustration"
              className="object-contain w-full h-full"
            />
          </div>
        </motion.div>

        {/* About me text */}
        <motion.div
          className="para text-white  w-full lg:w-1/2 p-3"
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
        >
          <motion.p
            className="leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
