import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { FaJava } from "react-icons/fa";
import { 
  SiReact, 
  SiTypescript, 
  SiPython, 
  SiFlask, 
  SiPostgresql, 
  SiMongodb,
  SiTailwindcss,
  SiDocker,
  SiAwslambda,
  SiJavascript
} from "react-icons/si";

const Hero = () => {
  const techStack = [
    { icon: <SiReact className="text-xl" />, name: "React", color: "text-rose-500" },
    { icon: <SiPython className="text-xl" />, name: "Python", color: "text-indigo-500" },
    { icon: <SiFlask className="text-xl" />, name: "Flask", color: "text-gray-600" },
    { icon: <SiPostgresql className="text-xl" />, name: "PostgreSQL", color: "text-purple-600" },
    { icon: <FaJava className="text-xl" />, name: "Java", color: "text-amber-600" },
    { icon: <SiMongodb className="text-xl" />, name: "MongoDB", color: "text-green-500" },
    { icon: <SiTailwindcss className="text-xl" />, name: "Tailwind", color: "text-cyan-500" },
    { icon: <SiDocker className="text-xl" />, name: "Docker", color: "text-sky-500" },
    { icon: <SiAwslambda className="text-xl" />, name: "AWS", color: "text-amber-600" },
    { icon: <SiJavascript className="text-xl" />, name: "JavaScript", color: "text-yellow-500" }
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#f8b4ce] via-[#ede1fc] to-[#a8b7db] flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 gap-12 relative overflow-hidden">
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20" />

      {/* Floating Laptop Decoration */}
      <motion.svg
        viewBox="0 0 24 24"
        className="w-20 h-20 text-purple-300/80 absolute top-[15%] right-[15%] -z-10"
        animate={{
          rotate: [0, 1, -1, 0],
          opacity: [0.8, 0.9, 0.8]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path fill="currentColor" d="M4 6h16v10H4m16 2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2h-4z"/>
      </motion.svg>

      {/* Left Content */}
      <div className="flex-1 max-w-2xl z-10 space-y-8 pt-16 lg:pt-0">
        {/* Headline */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="space-y-6"
        >
          <motion.h1 
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            <span className="text-gray-800">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600">
              Leslie Elusa
            </span>
            <br />
            <span className="text-gray-700 font-medium">Professional Software Engineer</span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { y: 10, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="text-lg leading-relaxed bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/30 text-gray-700 shadow-sm"
          >
            I transform <span className="font-medium text-rose-600">complex problems</span> into <span className="font-medium text-purple-600">elegant, scalable solutions</span> through clean architecture and thoughtful design. I bridge the gap between <span className="font-medium text-indigo-600">technical excellence</span> and <span className="font-medium text-fuchsia-600">business value</span> to deliver exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-5 gap-3 pt-2"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              whileHover={{ 
                y: -4,
                scale: 1.05,
                boxShadow: "0 6px 12px -2px rgba(255, 100, 150, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`bg-white/90 p-3 rounded-xl shadow-xs border border-white/30 flex flex-col items-center justify-center ${tech.color} backdrop-blur-sm`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
            >
              {tech.icon}
              <span className="text-xs mt-1 text-gray-600">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-gray-600 flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 shadow-xs"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-4 bg-gradient-to-b from-rose-400 to-fuchsia-500 rounded-full"
                animate={{
                  height: [8, 16, 8],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
          <span>Agile Methodologies • Threat Detection • Data Visualization</span>
        </motion.div>

        {/* CTA + Socials */}
        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 4px 20px -4px rgba(239, 68, 68, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 group"
          >
            <span>Explore My Work</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity
              }}
            >
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </motion.button>

          {/* Enhanced Social Links */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Elusa10"
              className="p-3 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-white/30"
              aria-label="GitHub"
            >
              <FiGithub className="text-xl text-gray-800 hover:text-purple-600 transition-colors" />
            </motion.a>

            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="www.linkedin.com/in/leslieelusa"
              className="p-3 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-white/30"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-xl text-blue-600 hover:text-blue-700 transition-colors" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Right Code Panel */}
      <motion.div 
        className="flex-1 max-w-xl w-full z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          delay: 0.6,
          type: "spring",
          stiffness: 100
        }}
      >
        <div className="relative group h-full">
          {/* Intense Glow Effect */}
          <div className="absolute -inset-3 bg-gradient-to-r from-rose-400/40 to-purple-500/40 rounded-2xl opacity-90 blur-2xl group-hover:blur-3xl transition-all duration-500 -z-10"></div>
          
          {/* Glass Morphism Code Window */}
          <div className="relative bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/30 h-full">
            {/* Window Header */}
            <div className="flex items-center px-4 py-3 bg-gradient-to-r from-rose-100/80 to-purple-100/80 border-b border-rose-200/30">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-400/90"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400/90"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400/90"></div>
              </div>
              <div className="ml-3 text-xs font-medium text-rose-700/90">leslie.js</div>
            </div>
            
            {/* Smart Code Snippet */}
            <pre className="p-4 overflow-auto max-h-80 bg-white/30">
              <code className="text-sm font-mono">
                <span className="text-purple-600">const</span> <span className="text-rose-500">leslie</span> = <span className="text-amber-600">{'{'}</span>{'\n'}
                <span className="text-gray-500 ml-4">// Full-stack solutions architect</span>{'\n'}
                <span className="ml-4 text-blue-600">approach</span>: <span className="text-emerald-600">"Problem-solving first"</span>,{'\n'}
                <span className="ml-4 text-blue-600">philosophy</span>: <span className="text-emerald-600">"Clean code = Maintainable systems"</span>,{'\n'}
                <span className="ml-4 text-blue-600">deliver</span>: <span className="text-purple-600">(</span><span className="text-rose-500">requirements</span><span className="text-purple-600">)</span> <span className="text-purple-600">=</span> <span className="text-amber-600">{'{'}</span>{'\n'}
                <span className="ml-8 text-blue-600">const</span> <span className="text-rose-500">solution</span> = <span className="text-emerald-600">`$</span><span className="text-amber-600">{'{'}</span><span className="text-emerald-600">optimized</span><span className="text-amber-600">{'}'}</span> <span className="text-amber-600">{'{'}</span><span className="text-emerald-600">scalable</span><span className="text-amber-600">{'}'}</span> <span className="text-emerald-600">implementation`</span>;{'\n'}
                <span className="ml-8 text-blue-600">return</span> <span className="text-amber-600">{'{'}</span> <span className="text-rose-500">solution</span>, <span className="text-blue-600">documentation</span>: <span className="text-emerald-600">"📚"</span> <span className="text-amber-600">{'}'}</span>;{'\n'}
                <span className="ml-4 text-amber-600">{'}'}</span>,{'\n'}
                <span className="text-gray-500 ml-4">// Currently accepting new challenges</span>{'\n'}
                <span className="text-amber-600">{'}'}</span>;
              </code>
            </pre>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;