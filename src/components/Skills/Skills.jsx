import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Java", level: 85 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 70 },
  { name: "MongoDb", level: 70 },
  { name: "JavaScript", level: 85 },
];

export default function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="w-screen bg-black" id="skills">
      <section
        
        className=" max-w-4xl mx-auto px-4 py-12 bg-black"
        ref={ref}
      >
        <h2 className="text-2xl font-raleway mb-8 text-white">
          Skills & Expertise
        </h2>
        <div className="space-y-6 ">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-white merriweather">
                  {skill.name}
                </span>
                <span className="text-sm tabular-nums merriweather text-white">
                  {skill.level}%
                </span>
              </div>
              {/* Outer progress bar container */}
              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.4,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
