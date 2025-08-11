import { motion } from "framer-motion";
import { FiCoffee, FiCodesandbox, FiUsers, FiMap } from "react-icons/fi";
import profilePic from "../assets/my profile.jpeg";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-[#ede1fc] via-[#ede1fc] to-[#f8b4ce]">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10 pl-8 lg:pl-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600">
              Beyond The Code
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full ml-0"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-start"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-rose-400 to-purple-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-white overflow-hidden border-4 border-white">
                  {/* Replace with your actual profile image */}
                  <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white">
                    <FiCodesandbox />
                  </div>
                  <span className="font-medium text-gray-700">3+ Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Personality Spotlight */}
            <div className="bg-gradient-to-br from-[#f8b4ce]/20 to-[#a8b7db]/20 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/30 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-rose-100 to-pink-100 shadow-sm">
                  <FiCodesandbox className="text-2xl text-rose-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Who I Am</h3>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-white/30 shadow-sm">
                  I approach coding like an <span className="font-semibold text-purple-600">art form</span> merging analytical precision with creative flair. Whether architecting scalable backend systems or crafting pixel-perfect UIs, I believe <span className="font-semibold text-rose-500">elegant solutions</span> emerge when technology meets imagination.
                </p>
                
                <p className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-white/30 shadow-sm">
                  My secret weapon? <span className="font-semibold text-indigo-500">Relentless curiosity</span>. When I'm not optimizing React performance or designing RESTful APIs, you'll find me exploring new frameworks or brainstorming solutions with colleagues over coffee.
                </p>
              </div>
            </div>
            
            {/* Hobbies & Fun Fact Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hobbies */}
              <div className="bg-gradient-to-r from-[#f8b4ce]/30 to-[#ede1fc]/30 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-white/30 p-6">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FiUsers className="text-rose-500" />
                  Beyond Coding
                </h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 bg-white/80 rounded-full text-sm font-medium text-gray-700 flex items-center gap-1">
                    <FiMap className="text-emerald-500" /> Nature Walks
                  </span>
                  <span className="px-3 py-1.5 bg-white/80 rounded-full text-sm font-medium text-gray-700">
                    Socializing with Friends
                  </span>
                  <span className="px-3 py-1.5 bg-white/80 rounded-full text-sm font-medium text-gray-700 flex items-center gap-1">
                    <FiCoffee className="text-amber-500" /> Coffee Connoisseur
                  </span>
                </div>
              </div>

              {/* Fun Fact */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-r from-[#ede1fc]/30 to-[#a8b7db]/30 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-white/30 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <FiCoffee className="text-xl text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Fun Fact</h4>
                    <p className="text-gray-700">I once solved a tricky algorithm while hiking - nature's serenity helps me think clearer than any whiteboard!</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;