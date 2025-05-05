import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import React from 'react';

const projects = [
  {
    title: "Real-time Chat Application",
    description: "A real-time chat application with features like user authentication, message notifications, and chat room creation.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop&q=60",
    tech: ["React", "Firebase", "JavaScript", "HTML/CSS"],
    github: "https://github.com/dsasank04/RealTimeChatApp",
  },
  {
    title: "E-Assets Management",
    description: "A comprehensive MERN stack solution for managing institutional assets, equipment, and resources.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/dsasank04/E-Assets",
  },
  {
    title: "Multi-Trait Wheat Grain Analysis",
    description: "ML-powered web application for predicting wheat traits using genomic data.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=60",
    tech: ["React", "Node.js", "Machine Learning", "Python"],
    github: "https://github.com/dsasank04/MultiTrait-WheatGrain-Prediction",
  }
];

export default function Projects() {
  return (
    <div className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}