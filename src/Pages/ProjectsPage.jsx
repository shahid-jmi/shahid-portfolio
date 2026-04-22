import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projectsData';
import { Seo } from '../Components/Seo';

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }),
};

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ProjectsPage = () => {
  return (
    <>
      <Seo
        title="Projects"
        description="Explore projects built by Shahid ul Islam — React apps, Laravel platforms, Node.js APIs, and cross-platform apps."
        path="/projects"
      />

      <section className="min-h-screen px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">What I've built</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
            A selection of projects I've worked on — from web platforms to mobile and desktop applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="glass p-6 flex flex-col gap-4 group cursor-default"
            >
              {/* Gradient accent top line */}
              <div className="glass-glow-line rounded-full" />

              <h2 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="glass-pill px-2.5 py-1 text-xs font-medium text-blue-300 rounded-full cursor-default">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-3 border-t border-white/8">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-medium transition-colors duration-200">
                  <GitHubIcon /> GitHub
                </a>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-medium transition-colors duration-200">
                    <ExternalLinkIcon /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
