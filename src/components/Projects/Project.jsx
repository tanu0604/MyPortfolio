import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Briefcase, Code } from "lucide-react";

// Real projects from internships and freelance work
const projects = [
  {
    id: 1,
    title: "OnePriceCab",
    role: "Frontend Developer",
    type: "Freelance",
    description: "A cab booking platform where users can book rides. Freelance project with a focus on responsive UI/UX design and seamless user experience.",
    link: "https://onepricecab.netlify.app",
    tags: ["React", "Responsive Design", "UI/UX"],
    status: "Completed"
  },
  {
    id: 2,
    title: "Robotree LLP",
    role: "Frontend Developer",
    type: "Internship",
    description: "Company website for a robotics education platform. Developed the frontend as part of an internship, focusing on educational content presentation.",
    link: "https://robotree.in",
    tags: ["Frontend Development", "Education Platform", "Corporate Website"],
    status: "Completed"
  },
  {
    id: 3,
    title: "LLuxe Living",
    role: "Frontend Developer",
    type: "Freelance",
    description: "A luxury interior design website. Built a modern frontend interface with aesthetic and responsive elements to showcase premium interior designs.",
    link: "https://lluxeliving.co.in",
    tags: ["Luxury Design", "Interior Design", "Modern UI"],
    status: "Completed"
  },
  {
    id: 4,
    title: "Exotic Travels",
    role: "Full Stack Developer",
    type: "Ongoing Internship",
    description: "A complete travel platform with features integrated using Voiceflow, Airtable, VoiceGlow, and Bolt. Comprehensive travel booking and management system.",
    link: "https://exotictravels.co.in",
    tags: ["Full Stack", "Voiceflow", "Airtable", "Travel Platform"],
    status: "Ongoing"
  },
];

export default function ProjectsGrid() {
  const containerRef = useRef(null);

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
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-black w-screen" id="project">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-raleway">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-merriweather">
            Real-world projects from internships and freelance work, showcasing my experience 
            in building production-ready applications and working with clients.
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Ongoing' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {project.status}
                </span>
              </div>

              <div className="p-8">
                {/* Project Type & Role */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 text-purple-400">
                    {project.type === 'Internship' ? (
                      <Briefcase className="w-4 h-4" />
                    ) : (
                      <Code className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">{project.type}</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <span className="text-sm text-gray-400">{project.role}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 group-hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700">
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300 text-sm">
              Professional experience across internships and freelance projects
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}