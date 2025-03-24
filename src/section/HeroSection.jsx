import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(0.7, 1 - scrollY / 800);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home">
    <div className="min-h-screen flex flex-col items-center justify-center p-6 transition-all">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center">
        <motion.img
          src={import.meta.env.BASE_URL + "/gallery/me.JPG"}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 object-cover border-gray-500"
          initial={{ opacity: -100, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ transform: `scale(${scale})` }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="text-3xl md:text-5xl font-bold mt-4"
            style={{ transform: `scale(${scale})`, transition: "transform 0.2s" }}
          >
            Web Developer
            <br /> and Tech Enthusiast.
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div
            className="text-gray-400 mt-4 max-w-md"
            style={{ transform: `scale(${scale})`, transition: "transform 0.2s" }}
          >
            <p><strong>Name:</strong> Danu Yudistia</p>
            <p><strong>Address:</strong> Batam </p>
            <p><strong>Email:</strong> danu.ydstia@gmail.com</p>
            <p><strong>About Me:</strong> A passionate software engineer focused on building scalable applications and exploring the latest technologies.</p>
          </div>
        </motion.div>
        <div className="flex gap-4 mt-4 text-xl">
          <a href="https://github.com/danuydstia" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://instagram.com/danuydstia" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/danu-yudistia-3a93352a9/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default HeroSection;
