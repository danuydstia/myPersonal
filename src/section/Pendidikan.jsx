import React from "react";
import { motion } from "framer-motion";

const educationData = [
    {
      school: "POLITEKNIK NEGERI BATAM ",
      year: "2024 - Sekarang",
    },
    {
      school: "SMK MULTISTUDI HIGHSCHOOL BATAM",
      year: "2021 - 2024",
    },
    {
      school: "SMP MTsN 1 BATAM",
      year: "2019 - 2021",
    },
  ];

const EducationTimeline = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 border-t-1 border-gray-700 text-white">
      <div className="container mx-auto px-6 relative">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Timeline Pendidikan
        </motion.h2>

        {/* Garis Tengah */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>

        <div className="flex flex-col space-y-10 relative">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative flex flex-col md:flex-row items-center md:items-start ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot di tengah garis */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                viewport={{ once: true }}
              ></motion.div>

              {/* Konten (kiri atau kanan) */}
              <motion.div
                className={`bg-gray-800 p-5 rounded-lg shadow-lg w-full max-w-md text-center md:text-left mt-6 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.4 }}
              >
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-sm text-gray-400">{edu.year}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
