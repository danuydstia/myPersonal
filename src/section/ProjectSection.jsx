import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";
import permit from "/permit.png";
import project1 from "/project1.png";
import ecommerce from "/ecommerce.png"

// Data kategori dan proyek
const projects = [
  {
    title: "Application For Permit",
    description: "A digital permit application system for submitting, tracking, and managing permits efficiently.",
    image: {permit},
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects and skills, built with Next.js.",
    image: {project1},
    link: "#",
  },
  {
    title: "Task Manager App",
    description: "A simple task manager to track daily activities, built with Node.js & Express.",
    image: {ecommerce},
    link: "#",
  },
  {
    title: "E-Learning Platform",
    description: "An online platform for interactive courses and learning resources.",
    image: {elearning},
    link: "#",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeather API and React.",
    image: {weather},
    link: "#",
  },
  {
    title: "Chat Application",
    description: "A real-time chat application using WebSocket and Node.js.",
    image: {chat},
    link: "#",
  },
  {
    title: "Finance Dashboard",
    description: "A financial management dashboard with analytics and reporting.",
    image: {finance},
    link: "#",
  },
];

const categories = ["All Projects", "HTML & CSS", "JavaScript", "React & Vite"];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Filter projects berdasarkan kategori
  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All Projects" || project.category === selectedCategory
  );

  // Hitung total halaman
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Ambil data proyek yang sesuai dengan halaman saat ini
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <section id="project" className="py-30 bg-gray-900 border-t-1 border-blue-950 text-white">
      <div className="container mx-auto px-6 flex gap-x-8">
        {/* Sidebar Menu */}
        <div className="w-fit px-4 py-2 rounded-lg text-left">
          <div className="flex flex-col gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1); // Reset ke halaman pertama saat ganti kategori
                }}
                className={`px-4 py-2 border bg-clip-border rounded-lg text-left ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-600/10 hover:to-purple-600/50 border-0"
                    : "bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-600/10 hover:to-purple-600/50 border-0"
                } transition`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="w-3/4">
          <div className="grid md:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-600/10 hover:to-purple-600/50 rounded-lg p-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
                <h3 className="text-xl font-semibold text-white mt-4">{project.title}</h3>
                <p className="text-white/80 text-sm mt-2">{project.description}</p>
                <div className="flex items-center mt-4">
                  <a href="#" className="mr-3 text-white hover:text-blue-300 transition">
                    <FaGithub />
                  </a>
                  <a href="#" className="text-white hover:text-blue-300 transition">
                    <FaLink />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 hover:bg-gray-700 transition"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 hover:bg-gray-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
