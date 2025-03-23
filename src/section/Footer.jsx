import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your.email@example.com?subject=Contact Request&body=${message}%0D%0A%0D%0AFrom: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact">
      <footer className="bg-gray-900 text-white py-10 border-t border-gray-700">
 
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Bagian Kiri - Form Send Email */}
            <motion.div
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="md:w-1/2 w-full text-left"
            >
              <h2 className="text-xl font-semibold">Send Me an Email</h2>
              <p className="text-gray-400 text-sm mt-2">
                Let's connect! Fill the form below.
              </p>
              <form onSubmit={handleSubmit} className="mt-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white"
                />
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-2 mt-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                />
                <button
                  type="submit"
                  className="mt-3 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg text-white font-semibold transition-all duration-300 ease-in-out shadow-md hover:shadow-lg active:scale-95"
                >
                  Send Email <FaEnvelope className="inline ml-2" />
                </button>
              </form>
            </motion.div>
            {/* Bagian Kanan - Gambar GIF */}
            <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
              {/* <img src="/contact.gif" className="w-64 md:w-80" alt="Contact GIF" /> */}
            </div>
          </div>

          {/* Bagian Bawah - Social Media */}
          <div className="mt-6 flex justify-center space-x-6">
            <a href="https://github.com/danuydstia" target="_blank" className="text-gray-400 hover:text-white transition">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/danuydstia" target="_blank" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={24} />
            </a>
          </div>

          <p className="text-gray-500 text-sm text-center mt-4">
            &copy; 2025 Cefroad. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;