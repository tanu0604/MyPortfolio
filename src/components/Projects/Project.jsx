import { useRef, useEffect } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolio from "../../assets/Portfolio.jpeg";
import speak2sign from "../../assets/Speak2Sign.jpeg";
import upashaya from "../../assets/Upashaya.jpeg";
import nails from "../../assets/Nails.jpeg";

// Example project data
const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A fully responsive and dynamic portfolio website to showcase my skills, projects, and experiences.",
    image: portfolio, // Replace with your portfolio image
    link: "https://tanushreepaul.netlify.app/", // Replace with your actual portfolio link
    tags: ["React.js","Tailwind CSS"],
  },
  {
    id: 2,
    title: "Upashaya: Healthcare Management Platform",
    description:
      "An application to streamline healthcare processes with appointment scheduling, patient management, and health tracking.",
    image: upashaya, // Replace with relevant project image
    link: "https://master--upashaya-medicalrecordkeeper.netlify.app/", // Replace with the project link
    tags: ["Tailwind CSS", "Javascript"],
  },
  {
    id: 3,
    title: "Speak2Sign: Accessible Communication",
    description:
      "A platform to assist people with hearing and speech impairments by converting speech into sign language in real-time.",
    image: speak2sign, // Replace with project image
    link: "https://speak2sign.netlify.app/", // Replace with the project link
    tags: ["Tailwind CSS", "Javascript", "Firebase"],
  },
  {
    id: 4,
    title: "Nails Art Studio: E-commerce Platform",
    description:
      "An e-commerce website designed for booking nail art sessions, showcasing designs, and managing online orders.",
    image: nails, // Replace with project image
    link: "https://nailsbyname.netlify.app/", // Replace with the project link
    tags: ["React", "Tailwind CSS"],
  },
];

export default function ProjectCarousel() {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(containerRef);

  // Double the projects array for seamless infinite scroll
  // const doubledProjects = [...projects, ...projects];

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [0, -300 * projects.length], // Adjusted based on card width
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [controls, isInView, projects.length]);

  return (
    <section className="py-20 bg-black w-screen overflow-hidden" id="project">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto"
        >
          Here are some of my recent projects. Hover over any project to pause
          the scroll and learn more.
        </motion.p>
      </div>

      <div ref={containerRef} className="relative w-full overflow-hidden py-8">
        <motion.div
          animate={controls}
          className="flex gap-6 w-fit"
          onHoverStart={() => controls.stop()}
          onHoverEnd={() => {
            controls.start({
              x: [0, -300 * projects.length],
              transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              },
            });
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              className="relative group w-[300px] flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={`${tag}-${tagIndex}`} // Ensures unique keys by appending the index
                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                  >
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
