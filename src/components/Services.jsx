import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaServer, FaPalette, FaDatabase, FaShieldAlt,FaRocket } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Custom Web Development",
      description: "Bespoke web applications built with React, Next.js, and Tailwind CSS. Fast, responsive, and SEO-friendly solutions.",
      highlights: ["React/Next.js", "TypeScript", "Performance optimization"],
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: <FaServer className="text-2xl" />,
      title: "Backend & API Development",
      description: "Robust backend systems with Node.js and Python. Secure, scalable architecture with proper documentation.",
      highlights: ["Node.js/Express", "Python/Django", "JWT auth"],
      color: "from-fuchsia-500 to-purple-500"
    },
    {
    icon: <FaRocket className="text-2xl" />,
    title: "Performance Optimization",
    description: "Website tuning to achieve 90+ Lighthouse scores through caching and code splitting.",
    highlights: ["Lazy Loading", "CDN Setup", "Bundle Optimization"],
    color: "from-purple-500 to-indigo-500",
    tech: ["Webpack", "Redis", "Load Testing"]
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: "Database Solutions",
      description: "Efficient data modeling with SQL/NoSQL databases. Optimized queries and cloud integration.",
      highlights: ["PostgreSQL", "MongoDB", "Cloud DBs"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <FaPalette className="text-2xl" />,
      title: "UI/UX Implementation",
      description: "Pixel-perfect implementation of designs from Figma to code with animations.",
      highlights: ["Figma to code", "Tailwind", "Accessibility"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Security Audits",
      description: "Comprehensive security reviews including penetration testing.",
      highlights: ["OWASP", "Encryption", "Secure auth"],
      color: "from-rose-400 to-pink-400"
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-[#f8b4ce] via-[#ede1fc] to-[#f8b4ce] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600">
              My Development Services
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Services Grid - Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#f8b4ce]/20 to-[#a8b7db]/20 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/30 hover:shadow-2xl transition-all h-full"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Icon with gradient circle */}
                <div className={`mb-4 p-3 rounded-full bg-gradient-to-r ${service.color} text-white w-12 h-12 flex items-center justify-center`}>
                  {service.icon}
                </div>
                
                {/* Vibrant title */}
                <h3 className={`text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${service.color}`}>
                  {service.title}
                </h3>
                
                {/* Compact description */}
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                {/* Highlights with colored bullets */}
                <div className="mt-auto pt-3">
                  <ul className="space-y-1.5">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`w-2 h-2 rounded-full mt-2 mr-2 bg-gradient-to-r ${service.color}`}></span>
                        <span className="text-sm font-medium text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-700 mb-6">Ready to turn your ideas into reality?</p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;