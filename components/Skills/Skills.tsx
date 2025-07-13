import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React/Next.js', level: 99, years: '2' },
      { name: 'TypeScript', level: 99, years: '2' },
      { name: 'Tailwind CSS', level: 98, years: '2' },
      { name: 'Vue.js', level: 85, years: '1' },
      { name: 'React Native', level: 90, years: '1' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 88, years: '2' },
      { name: 'Python/Django', level: 25, years: '2' },
      { name: 'PostgreSQL', level: 20, years: '2' },
      { name: 'MongoDB', level: 82, years: '1' },
      { name: 'GraphQL', level: 28, years: '1' }
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'AWS/Azure', level: 15, years: '1' },
      { name: 'Docker', level: 20, years: '2' },
      { name: 'Kubernetes', level: 20, years: '1' },
      { name: 'CI/CD', level: 85, years: '2' },
      { name: 'Git/GitHub', level: 95, years: '1' }
    ]
  }
];

const certifications = [
  { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'Google Cloud Professional', issuer: 'Google Cloud', year: '2022' },
  { name: 'MongoDB Certified Developer', issuer: 'MongoDB', year: '2021' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mastering the full spectrum of modern web development technologies
          </p>
        </motion.div>
        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                {category.category}
              </motion.h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-white">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-blue-400">{skill.years}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full"
                            animate={{ 
                              scale: [1, 1.5, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1)
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Certifications */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-sm font-medium text-white">{cert.name}</div>
                <div className="text-xs text-gray-400">{cert.issuer} • {cert.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 