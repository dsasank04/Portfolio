import { motion } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';
import React from 'react'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div>
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm D V S V Sasank Sarma
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-2xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Aspiring Software Engineer | MERN Stack Developer | DSA Enthusiast | Open to Opportunities 
            </motion.h2>
          </div>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Final-year Computer Science student with strong programming fundamentals and academic project work in full-stack web development and machine learning. Proficient in Java and MERN Stack, with a solid understanding of data structures, algorithms, and software engineering principles. Passionate about learning technologies and contributing to meaningful projects through internships or entry-level opportunities in software development.
          </motion.p>

          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="https://github.com/dsasank04" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sasank-sarma-dharmavarapu/" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1eTfAcTa5mOReENu9mawCLC-wy75ekXci/view?usp=sharing"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={20} />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}