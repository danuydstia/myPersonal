import { motion} from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {FaGithub,FaLinkedin,FaTwitter,FaInstagram,FaEnvelope,FaLink,FaBars, FaTimes} from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";
import StarryBackground from "./StarryBackground";
import { TypeAnimation } from "react-type-animation";
import HeroSection from "./section/HeroSection";
import ProjectsSection from "./section/ProjectSection";
import Footer from "./section/Footer";
import Skill from "./section/Skillset";
import "./App.css";
import icon2 from "/gallery/icon2.png";
import EducationTimeline from "./section/Pendidikan";
import Skillset from "./section/Skillset";



// Headerrrr
const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      className={`w-full fixed top-0 flex items-center justify-center  z-50 px-6 transition-all  select-none duration-300 ${
        scrolling ? "mt-2" : "mt-4"
      }`}
    >
      <div
        className={`w-[90%] max-w-[1200px] ${
          scrolling ? "h-[60px]" : "h-[70px]"
        } flex items-center justify-between bg-white/5 backdrop-blur-3xl rounded-full shadow-lg px-6 transition-all duration-300`}
      >
        {/* Logo */}
        <a href="#about-me" className="flex items-center">
          <img
            src={icon2}
            alt="Logo"
            className="h-25 w-25 cursor-pointer hover:animate-spin"
          />
        </a>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`hidden md:flex absolute top-2 left-1/2 transform -translate-x-1/2 
            w-[600px] items-center justify-between bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-2 rounded-full text-gray-200 
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
            to="education"
            smooth={true}
            duration={800}
            offset={-50}
            className="nav-link bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="skill"
            smooth={true}
            duration={800}
            offset={-50}
            className="nav-link bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          >
            Skill
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

          {/* Mobile Menu Button */}
          <div className="md:hidden z-1">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <FaBars className="text-white text-2xl" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
  className={`fixed top-0 left-0 w-full h-screen bg-gray-900/90 flex flex-col items-center justify-center space-y-6 text-white transition-transform md:hidden ${
    menuOpen ? "translate-x-0" : "hidden"
  }`}
>


          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-50}
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={800}
            offset={-50}
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={800}
            offset={-50}
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Project
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-50}
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Theme Switcher */}
        {/* <div className="hidden md:flex gap-4">
          <div className="theme-toggle h-6 w-6 bg-gray-200 rounded-full"></div>
          <div className="theme-toggle h-6 w-6 bg-[#3b82f6] rounded-full"></div>
          <div className="theme-toggle h-6 w-6 bg-[#9333ea] rounded-full"></div>
        </div> */}
      </div>
    </motion.div>
  );
};


function App() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <HeroSection />
      <EducationTimeline />
      <Skillset />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default App;