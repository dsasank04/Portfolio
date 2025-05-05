import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import React from 'react';

export default function Contact() {
  const contacts = [
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my projects",
      link: "https://github.com/dsasank04",
      linkText: "View Profile",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me",
      link: "https://www.linkedin.com/in/sasank-sarma-dharmavarapu/",
      linkText: "View Profile",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Get in touch",
      link: "mailto:d.sasank18@gmail.com",
      linkText: "d.sasank18@gmail.com",
    }
  ];

  return (
    <div className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all group-hover:transform group-hover:scale-105 h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-4">
                    <Icon className="text-blue-400" size={32} />
                    <h3 className="text-2xl font-semibold">{contact.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4 flex-grow">{contact.description}</p>
                  <div className="flex items-center text-blue-400 group-hover:translate-x-2 transition-transform mt-auto">
                    <span className="mr-2">{contact.linkText}</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}