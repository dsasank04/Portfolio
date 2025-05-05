import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "Python", "Java", "C"]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["React.js", "Node.js", "HTML/CSS", "Express", "REST APIs", "Tailwind CSS"]
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Git & GitHub", "Docker"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <div className="py-20 bg-gray-800 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                className="bg-gray-900 rounded-lg p-6"
                variants={itemVariants}
              >
                <div className="flex items-center mb-6">
                  <Icon className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-blue-400">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}