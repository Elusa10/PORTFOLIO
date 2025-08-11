import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiEye, FiCode } from "react-icons/fi";
import { FaReact, FaFigma, FaMagic, FaPalette, FaServer } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Pik-cha – AI-Powered Image Enhancer",
      role: "Full-Stack Developer (Frontend Focus)",
      url: "https://pik-cha.onrender.com",
      description: "Web application that uses AI to enhance, upscale, and apply filters to images with drag-and-drop functionality.",
      tech: ["React.js", "Flask", "AI Integration", "Drag-and-Drop UI"],
      icon: <FaMagic className="text-rose-500" />,
      glow: "from-rose-500 to-fuchsia-600"
    },
    {
      title: "Movie Theater App",
      role: "Front-End Developer",
      url: "https://movie-site-khaki-six.vercel.app",
      description: "Interactive SPA for browsing and booking movie tickets with dynamic updates.",
      tech: ["React", "JSON API", "Responsive Design"],
      icon: <FaPalette className="text-blue-500" />,
      glow: "from-blue-400 to-indigo-500"
    },
    {
      title: "Eventify – Event Management",
      role: "Full-Stack Developer",
      url: "https://event-project-rgv7.vercel.app",
      description: "Comprehensive platform for creating, managing, and booking events.",
      tech: ["React", "Bootstrap", "REST API"],
      icon: <FaServer className="text-purple-500" />,
      glow: "from-purple-400 to-violet-500"
    },
    {
      title: "Pixify – Instagram Clone",
      role: "Full-Stack Developer",
      url: "https://pixi-fy-hrmt.vercel.app",
      description: "Social app with image sharing, likes, comments, and user profiles.",
      tech: ["React", "Flask", "JWT Auth", "Media Storage"],
      icon: <FaReact className="text-amber-500" />,
      glow: "from-amber-400 to-orange-500"
    },
    {
      title: "Gym Management System",
      role: "Back-End Developer",
      url: "https://github.com/yourusername/gym-system",
      description: "API backend for membership, scheduling, and trainer management.",
      tech: ["Python", "Flask", "CRUD Operations", "Auth"],
      icon: <FaServer className="text-emerald-500" />,
      glow: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-[#f8b4ce] via-[#ede1fc] to-[#a8b7db]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-purple-200/20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600">
              My Technical Creations
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Projects where I've combined innovative ideas with robust engineering
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white hover:shadow-xl transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute -inset-2 bg-gradient-to-r ${project.glow} rounded-2xl blur-md opacity-20`}></div>
              </div>

              {/* Project Header */}
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-rose-50 to-purple-50">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-white shadow-xs">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                      <p className="text-sm text-purple-600 mt-1">{project.role}</p>
                    </div>
                  </div>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white shadow-xs hover:shadow-sm transition-all"
                  >
                    <FiExternalLink className="text-gray-700" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs font-medium bg-rose-50 text-rose-600 px-3 py-1 rounded-full border border-rose-100"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all"
                  >
                    <FiEye className="text-sm" /> Live Demo
                  </motion.a>
                  {project.url.includes("github") && (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:shadow-md transition-all"
                    >
                      <FiCode className="text-sm" /> View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;