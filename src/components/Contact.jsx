import { useState } from "react";
import { FaLinkedin, FaGithub, FaPaperPlane, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const message = `New Contact Request:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/254748819982?text=link`;
    
    // Try to open WhatsApp
    const newWindow = window.open(whatsappUrl, '_blank');
    
    // Check if WhatsApp failed to open (mobile will redirect, desktop might fail)
    setTimeout(() => {
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        setShowFallback(true);
      }
    }, 500);
    
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
      setShowFallback(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-br from-[#ede1fc] via-[#f8b4ce] to-[#ede1fc] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600">
              Let's Create Together
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Whether you have a project idea or just want to say hello, I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-gradient-to-br from-[#f8b4ce]/20 to-[#a8b7db]/20 backdrop-blur-sm rounded-3xl shadow-xl p-8 grid gap-6 border border-white/30"
            >
              <div className="space-y-5">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent placeholder-gray-500"
                  required
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent placeholder-gray-500"
                  required
                />
                <textarea 
                name="message" 
                placeholder="Your Message..." 
                value={formData.message} 
                onChange={handleChange} 
                rows="5"
                className="w-full bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent placeholder-gray-500 text-gray-800 dark:text-gray-800" // Added text-gray-800
              ></textarea>
              </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className={`w-full flex items-center justify-center gap-3 font-semibold py-3.5 rounded-xl text-white transition-all ${
                    isSubmitted 
                      ? "bg-emerald-500" 
                      : "bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:shadow-lg hover:shadow-rose-400/30"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {showFallback ? "Preparing Email" : "Opening WhatsApp..."}
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="text-lg" /> Send Message
                    </>
                  )}
                </motion.button>

                {showFallback && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-white/80 rounded-lg p-4 text-center"
                  >
                    <p className="text-sm text-gray-700 mb-2">
                      Couldn't open WhatsApp. Email me directly at:
                    </p>
                    <a 
                      href={`mailto:leslieelusa@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`}
                      className="text-rose-600 font-medium hover:underline"
                    >
                      leslieelusa@gmail.com
                    </a>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-[#ede1fc]/30 to-[#f8b4ce]/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/30 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white">
                  <FaEnvelope />
                </div>
                Other Ways to Connect
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/80 backdrop-blur-sm text-rose-500 shadow-sm mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email me at</p>
                    <a 
                      href="mailto:leslieelusa@gmail.com" 
                      className="font-medium text-gray-800 hover:text-rose-500 transition-colors"
                    >
                      leslieelusa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/80 backdrop-blur-sm text-blue-500 shadow-sm mt-1">
                    <FaLinkedin />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Connect professionally</p>
                    <a 
                      href="www.linkedin.com/in/leslieelusa

" 
                      target="_blank" 
                      rel="noreferrer"
                      className="font-medium text-gray-800 hover:text-blue-500 transition-colors"
                    >
                      www.linkedin.com/in/leslieelusa
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/80 backdrop-blur-sm text-purple-500 shadow-sm mt-1">
                    <FaGithub />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">See my code</p>
                    <a 
                      href="https://github.com/Elusa10" 
                      target="_blank" 
                      rel="noreferrer"
                      className="font-medium text-gray-800 hover:text-purple-500 transition-colors"
                    >
                      https://github.com/Elusa10
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/30">
                <p className="text-sm text-gray-700">
                  Typically respond within <span className="font-medium text-rose-500">24 hours</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}