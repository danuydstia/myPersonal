import { motion} from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {FaGithub,FaLinkedin,FaTwitter,FaInstagram,FaEnvelope,FaLink} from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";
import StarryBackground from "./StarryBackground";
import { TypeAnimation } from "react-type-animation";
import HeroSection from "./section/HeroSection";
import ProjectsSection from "./section/ProjectSection";
import Footer from "./section/Footer";
import "./App.css";
import icon2 from "/icon2.png";



// Headerrrr
function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`w-full fixed top-0 flex items-center justify-center mt-4 z-50 px-6 transition-all duration-300 ${
        scrolling ? "mt-2" : "mt-4"
      }`}
    >
      <div
        className={`w-[90%] max-w-[1200px] ${
          scrolling ? "h-[60px]" : "h-[70px]"
        } flex items-center justify-between bg-white/5 backdrop-blur-3xl rounded-full shadow-lg px-6 transition-all duration-300`}
      >
        <a href="#about-me" className="flex items-center">
          <img
            src={icon2}
            alt="Logo"
            className="h-25 w-25 cursor-pointer hover:animate-spin"
          />
        </a>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`absolute top-2 left-1/2 transform -translate-x-1/2 
    w-[350px] flex items-center justify-between bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-2 rounded-full text-gray-200 
    ${scrolling ? "h-[40px]" : "h-[45px]"}`}
        >
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-50}
            className="nav-link bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={800}
            offset={-50}
            className="nav-link bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          >
            Project
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-50}
            className="nav-link bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          >
            Contact
          </Link>
        </motion.div>

        <div className="flex gap-4">
          <div className="theme-toggle h-6 w-6 bg-gray-200  rounded-full"></div>
          <div className="theme-toggle h-6 w-6 bg-[#3b82f6] rounded-full"></div>
          <div className="theme-toggle h-6 w-6 bg-[#9333ea] rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default App;