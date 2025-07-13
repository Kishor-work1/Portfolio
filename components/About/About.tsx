import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Terminal, Zap, ChevronDown, Download, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import kishorImg from '../../public/kishor.jpg';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100 + delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-8 bg-blue-400 ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
};

const GlitchText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    className={`relative ${className}`}
    whileHover="hover"
  >
    <motion.div
      className="relative z-10"
      variants={{
        hover: {
          x: [0, -2, 2, 0],
          transition: { duration: 0.3 }
        }
      }}
    >
      {children}
    </motion.div>
    <motion.div
      className="absolute top-0 left-0 text-red-400 -z-10"
      variants={{
        hover: {
          x: [0, 2, -2, 0],
          opacity: [0, 0.7, 0.7, 0],
          transition: { duration: 0.3 }
        }
      }}
    >
      {children}
    </motion.div>
    <motion.div
      className="absolute top-0 left-0 text-blue-400 -z-10"
      variants={{
        hover: {
          x: [0, -1, 1, 0],
          opacity: [0, 0.5, 0.5, 0],
          transition: { duration: 0.3, delay: 0.1 }
        }
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const wordVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 100,
      damping: 10
    }
  }
};

const About = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const roles = [
    "Full Stack Developer",
    "Competitive Programmer", 
    "Problem Solver",
    "Code Architect"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 min-h-screen items-center relative">
        {/* Left: About Content (2 columns on md+) */}
        <div className="md:col-span-2 flex flex-col justify-center h-full w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-10 md:p-16 border border-white/20 relative">
            <motion.div
              className="text-center md:text-left z-10 w-full"
              initial="hidden"
              animate="visible"
              variants={wordVariants}
            >
              <motion.div
                className="mb-8 flex items-center w-full"
                initial="hidden"
                animate="visible"
                variants={wordVariants}
              >
                <div className="text-6xl md:text-8xl font-extrabold mb-4 inline-block text-center md:text-left bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {"KISHOR JHA".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      variants={letterVariants}
                      style={{ 
                        display: letter === " " ? "inline" : "inline-block",
                        marginRight: letter === " " ? "0.2em" : "0"
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-4">
                Hi, my name is Kishor Jha
              </div>
              <motion.div
                className="text-2xl md:text-4xl font-light mb-8 h-16 flex items-center md:justify-start justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="flex items-center gap-2"
                    key={textIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {textIndex === 0 && <Code className="w-8 h-8 text-blue-400" />}
                    {textIndex === 1 && <Trophy className="w-8 h-8 text-yellow-400" />}
                    {textIndex === 2 && <Zap className="w-8 h-8 text-purple-400" />}
                    {textIndex === 3 && <Terminal className="w-8 h-8 text-green-400" />}
                    <GlitchText className="text-gray-300">
                      {roles[textIndex]}
                    </GlitchText>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="text-lg md:text-xl text-gray-300 mb-8 font-mono md:text-left text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.8 }}
              >
                <TypewriterText text="console.log('Welcome to my portfolio');" delay={500} />
              </motion.div>
              <motion.div
                className="w-64 h-1 bg-gray-800 rounded-full mx-auto md:mx-0 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 4, duration: 0.5 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 4.5, duration: 1.2, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.p
                className="text-gray-400 text-base md:text-lg mb-6 md:text-left text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 0.5 }}
              >
                Passionate about building scalable web applications and solving complex algorithmic challenges. I love to create, compete, and collaborate. Always eager to learn and take on new challenges!
              </motion.p>
              {/* Action Buttons: Download CV, LinkedIn, GitHub */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start justify-center md:justify-start mb-4">
                <a
                  href="/Kishor_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:from-purple-500 hover:to-blue-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/kishor-j-b7bba4213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-white/10 border border-blue-400 text-blue-400 font-semibold shadow-lg hover:bg-blue-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Kishor-work1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-white/10 border border-gray-700 text-gray-300 font-semibold shadow-lg hover:bg-gray-800 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Right: Profile Image (1 column on md+) */}
        <div className="md:col-span-1 flex justify-center items-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-blue-400 p-2 flex items-center justify-center">
            <Image
              src={kishorImg}
              alt="Kishor Jha profile"
              width={288}
              height={448}
              className="w-72 h-[28rem] object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
        {/* Chevron Down - Centered at bottom of section */}
        <motion.div
          className="absolute left-1/2 bottom-8 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default About; 