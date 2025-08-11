import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PiFilePdfLight } from 'react-icons/pi';
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#ede1fc] to-[#f8b4ce] py-16 border-t border-white/30 relative overflow-hidden">
      {/* Subtle background texture (matches other sections) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Social links - Now with glass morphism cards */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <motion.a
              whileHover={{ y: -5 }}
              href="https://drive.google.com/file/d/1ZFjPfkVWeaUi2nqqXlx4lLDrJb-WGyXb/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-br from-[#f8b4ce]/20 to-[#a8b7db]/20 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-white/30 hover:shadow-xl transition-all">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/80 backdrop-blur-sm text-rose-500 shadow-sm">
                    <PiFilePdfLight className="text-2xl" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-rose-600 transition-colors">
                    Resume
                  </span>
                </div>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com/Elusa10"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-br from-[#f8b4ce]/20 to-[#a8b7db]/20 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-white/30 hover:shadow-xl transition-all">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/80 backdrop-blur-sm text-gray-700 shadow-sm">
                    <FaGithub className="text-2xl" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    GitHub
                  </span>
                </div>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="www.linkedin.com/in/leslieelusa"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-br from-[#f8b4ce]/20 to-[#a8b7db]/20 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-white/30 hover:shadow-xl transition-all">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/80 backdrop-blur-sm text-blue-600 shadow-sm">
                    <FaLinkedin className="text-2xl" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    LinkedIn
                  </span>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Copyright - Enhanced typography */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600">
              Leslie Elusa
            </p>
            <div className="text-xs text-gray-600 flex items-center gap-1">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}