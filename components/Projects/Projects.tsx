import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Github, ExternalLink } from 'lucide-react';

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  homepage?: string | null;
};

const PINNED_REPOS = [
  'Mock-Interview',
  'PixelForge',
  'dsa-tracker',
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    transition: {
      stiffness: 300,
      damping: 20
    }
  }
};

const Projects = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Kishor-work1/repos')
      .then(res => res.json())
      .then((data: GithubRepo[]) => {
        // Filter and order by PINNED_REPOS
        const pinned = PINNED_REPOS
          .map(name => data.find(repo => repo.name === name))
          .filter((repo): repo is GithubRepo => Boolean(repo));
        setRepos(pinned);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing my latest work and technical achievements
          </p>
        </motion.div>
        {loading ? (
          <div className="text-center text-gray-400">Loading projects...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {repo.name}
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">{repo.description || 'No description provided.'}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.language && (
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={repo.html_url}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {repo.homepage && (
                      <motion.a
                        href={repo.homepage}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        whileHover={{ x: 5 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 