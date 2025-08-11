import { motion } from "framer-motion";
import { FaCode, FaPalette, FaServer, FaMobileAlt, FaShieldAlt, FaChartLine } from "react-icons/fa";
import { FiCpu, FiDatabase, FiLayers, FiFigma } from "react-icons/fi";

const Skills = () => {
  const skills = {
    "Frontend Mastery": [
      { name: "React", level: 95, icon: <FiLayers className="text-fuchsia-500" /> },
      { name: "Next.js", level: 90, icon: <FaCode className="text-purple-500" /> },
      { name: "TypeScript", level: 88, icon: <FiCpu className="text-indigo-500" /> },
      { name: "Tailwind CSS", level: 93, icon: <FaPalette className="text-rose-500" /> },
      { name: "Figma", level: 85, icon: <FiFigma className="text-pink-500" /> },
      { name: "Responsive Design", level: 90, icon: <FaMobileAlt className="text-emerald-500" /> }
    ],
    "Backend & Databases": [
      { name: "Node.js", level: 85, icon: <FaServer className="text-purple-500" /> },
      { name: "PostgreSQL", level: 80, icon: <FiDatabase className="text-fuchsia-600" /> },
      { name: "MongoDB", level: 75, icon: <FiDatabase className="text-rose-400" /> }
    ],
    "Specialized Skills": [
      { name: "UI/UX Design", level: 88, icon: <FaPalette className="text-fuchsia-500" /> },
      { name: "Data Visualization", level: 82, icon: <FaChartLine className="text-amber-500" /> },
      { name: "Security", level: 80, icon: <FaShieldAlt className="text-rose-400" /> }
    ]
  };

  return (
    <section id="skills" className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-[#f8b4ce] via-[#ede1fc] to-[#f8b4ce]">
      {/* Subtle background texture (matches About Me) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        {/* Skills Grid - Now with glass morphism cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-gradient-to-br from-[#f8b4ce]/20 to-[#a8b7db]/20 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/30 hover:shadow-2xl transition-all"
            >
              {/* Category Header */}
              <div className="p-6 bg-gradient-to-r from-rose-100/50 to-purple-100/50 border-b border-white/30">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white">
                    {items[0].icon}
                  </span>
                  {category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="p-6 space-y-5">
                {items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 p-2 rounded-full bg-white/80 text-fuchsia-600 shadow-sm">
                      {skill.icon}
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-xs font-bold bg-white/80 px-2 py-1 rounded-full text-rose-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/70 rounded-full h-2 shadow-inner">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-rose-400 to-purple-400"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills - Now matching the aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-[#f8b4ce]/20 to-[#ede1fc]/20 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/30 p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-r from-rose-100 to-pink-100 shadow-sm">
              <FaChartLine className="text-2xl text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Creative Problem-Solving", "Team Collaboration", "Attention to Detail", "Adaptability", "User Empathy"].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-white/30 shadow-sm hover:bg-white"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;