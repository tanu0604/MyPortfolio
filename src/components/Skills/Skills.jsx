import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code2, 
  Server, 
  Bot, 
  GitBranch,
  Sparkles,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      "React.js",
      "Tailwind CSS", 
      "ShadCN UI",
      "JavaScript (ES6+)",
      "Responsive Design"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend Development", 
    icon: <Server className="w-6 h-6" />,
    skills: [
      "Java",
      "Spring Boot",
      "Firebase", 
      "REST APIs",
      "Airtable"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "AI & Automation",
    subtitle: "Current Focus",
    icon: <Bot className="w-6 h-6" />,
    skills: [
      "Voice Agents",
      "Chat Agents", 
      "AI Workflow Automation",
      "Voiceflow",
      "n8n",
      "Bolt"
    ],
    color: "from-purple-500 to-pink-500",
    highlight: true
  },
  {
    title: "Tools & Collaboration",
    icon: <GitBranch className="w-6 h-6" />,
    skills: [
      "Git & GitHub",
      "Debugging & Optimization"
    ],
    color: "from-orange-500 to-red-500"
  }
];

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-black w-screen" id="skills" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-raleway">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-merriweather">
            A comprehensive toolkit spanning frontend development, backend systems, 
            and cutting-edge AI automation technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`relative group ${
                category.highlight 
                  ? 'lg:col-span-2' 
                  : ''
              }`}
            >
              <div className={`
                relative bg-gradient-to-br from-gray-900 to-gray-800 
                rounded-2xl p-8 border border-gray-700 
                hover:border-gray-600 transition-all duration-300
                ${category.highlight ? 'ring-2 ring-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20' : ''}
              `}>
                {/* Highlight Badge */}
                {category.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-white text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      Current Focus
                    </div>
                  </div>
                )}

                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`
                    p-3 rounded-xl bg-gradient-to-r ${category.color} 
                    text-white shadow-lg
                  `}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-raleway">
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p className="text-purple-400 text-sm font-medium">
                        {category.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Skills List */}
                <div className={`
                  grid gap-3
                  ${category.highlight ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}
                `}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        delay: index * 0.1 + skillIndex * 0.05,
                        duration: 0.3 
                      }}
                      className={`
                        flex items-center gap-3 p-3 rounded-lg
                        bg-white/5 border border-white/10
                        hover:bg-white/10 hover:border-white/20
                        transition-all duration-200
                        ${category.highlight ? 'hover:border-purple-400/30' : ''}
                      `}
                    >
                      <div className={`
                        w-2 h-2 rounded-full bg-gradient-to-r ${category.color}
                        ${category.highlight ? 'animate-pulse' : ''}
                      `} />
                      <span className="text-gray-200 font-medium text-sm">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 pointer-events-none
                  bg-gradient-to-r ${category.color} opacity-5
                `} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-300 text-sm">
              Continuously learning and expanding my skillset
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}