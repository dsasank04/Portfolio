import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import React from 'react';

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
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm D V S V Sasank Sarma
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Software Developer
            </motion.h2>
          </div>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A Computer Science student with strong coding skills and training in full-stack development, seeking opportunities to contribute to projects while continuously expanding knowledge in various technologies. Eager to apply knowledge in software engineering, data structures, and algorithms to create efficient, scalable solutions.
          </motion.p>

          <motion.div
            className="flex space-x-6"
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}