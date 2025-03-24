import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", percentage: 85 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "JavaScript", percentage: 80 },
  { name: "Python", percentage: 75 },
  { name: "Git & GitHub", percentage: 70 },
];

const Skillset = () => {
  return (
    <section id="skill" className="py-20 bg-gray-900 border-t-1 border-blue-950 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-center text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Skill Set
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;
