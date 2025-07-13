import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Praavi Work Tool Private Limited',
    position: 'Software Engineer',
    duration: 'Feb 2025 – Present',
    location: 'Gurugram',
    description: '',
    achievements: [
      'Developed a complete, pixel-perfect and fully responsive Attendance Dashboard UI using Next.js, TypeScript, Shadcn UI, and Tailwind CSS.',
      'Independently built 50% of the Admin Dashboard, integrating APIs with proper state management (React Query, Redux Toolkit) and enhanced user experience through features like infinite scrolling and animations.',
      'Closely collaborated with the Co-founder during the UI/UX phase—translated designs from Figma into production-ready components.',
      'Actively contributed to debugging and resolving frontend issues independently, improving product reliability and delivery speed.',
      'Built and optimized complex dashboards using Next.js, TypeScript, and Redux Toolkit, improving performance and user experience.',
      'Led UI/UX design using Figma and implemented responsive designs with Tailwind CSS and Shadcn UI.',
      'Integrated RESTful APIs using React Query and Redux Toolkit for efficient data handling and real-time updates.',
      'Contributing to a full-stack project with Next.js, React Native, and Java Spring Boot, delivering cross-platform solutions.'
    ],
    technologies: ['Next.js', 'TypeScript','React Native', 'Tailwind CSS', 'React Query', 'Redux Toolkit', 'Figma', 'Java Spring Boot']
  },
  {
    company: 'QuadB Tech',
    position: 'Web Developer',
    duration: 'Sep 2024 – Dec 2024',
    location: 'Remote',
    description: '',
    achievements: [
      'Developed responsive web applications using Next.js, Tailwind CSS, and Material UI, enhancing user experience through intuitive designs.',
      'Managed state with React Redux and integrated RESTful APIs using React Query for efficient data handling.',
      'Engineered seamless integration for three major APIs, enabling reliable communication between frontend interfaces and backend services while maintaining consistent performance under high traffic conditions.',
      'Gained expertise in modern JavaScript frameworks and scalable application development.'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Material UI', 'React Redux', 'React Query', 'JavaScript']
  },
  {
    company: 'Brawny Info Tech',
    position: 'Frontend Intern',
    duration: 'Mar 2024 - Aug 2024',
    location: 'Remote',
    description: 'Worked on building and maintaining web applications using React.js, Next.js, and Tailwind CSS. Collaborated with the design team using Figma and integrated RESTful APIs. Used Redux and React Query for state and data management.',
    achievements: [
      'Built and shipped new features for client dashboards using React and Next.js.',
      'Integrated multiple RESTful APIs and improved data fetching with React Query.',
      'Collaborated with designers to translate Figma designs into responsive UI.',
      'Enhanced state management and performance using Redux Toolkit.'
    ],
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Figma', 'Redux', 'React Query', 'API Integration']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building impactful solutions across diverse industries and scale
          </p>
        </motion.div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-black z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 0.3, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              {/* Content Card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <h4 className="text-lg text-blue-400 font-medium">{exp.company}</h4>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">
                      <div>{exp.duration}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-white mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="text-sm text-gray-300 flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + i * 0.1 + 0.5, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-blue-400 mr-2">•</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + i * 0.05 + 0.7, duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 