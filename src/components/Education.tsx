import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, Award } from 'lucide-react';
import React from 'react';

const education = [
  {
    degree: "Bachelor of Engineering (CSE)",
    institution: "Neil Gogte Institute of Technology",
    period: "2021-Present",
    score: "CGPA: 7.6",
    icon: GraduationCap,
    color: "from-blue-600 to-blue-400"
  },
  {
    degree: "Intermediate Education (MPC)",
    institution: "Gowtham Junior College",
    period: "2019-2021",
    score: "Percentage: 88.7%",
    icon: School,
    color: "from-purple-600 to-purple-400"
  },
  {
    degree: "Central Board of Secondary Education (CBSE)",
    institution: "D.A.V Public School",
    period: "2019",
    score: "Percentage: 83.5%",
    icon: School,
    color: "from-green-600 to-green-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

export default function Education() {
  return (
    <div className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-r ${item.color} p-[2px] rounded-lg`}
              >
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                      <div className="space-y-2 text-gray-300">
                        <div className="flex items-center">
                          <School size={16} className="mr-2" />
                          <span>{item.institution}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center">
                          <Award size={16} className="mr-2" />
                          <span>{item.score}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}