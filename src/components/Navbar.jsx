// src/components/Navbar.jsx
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-[#f8b4ce]/50 via-[#ede1fc]/50 to-[#a8b7db]/50 backdrop-blur-lg border-b border-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600"
        >
          Leslie🌸💗
        </a>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-700 hover:text-rose-600 transition font-medium group"
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-fuchsia-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-rose-600 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col px-4 pb-4 bg-gradient-to-b from-[#f8b4ce]/70 to-[#ede1fc]/70 backdrop-blur-lg border-t border-white/30"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-3 text-gray-700 hover:text-rose-600 border-b border-white/30 transition"
                onClick={() => setIsOpen(false)}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};