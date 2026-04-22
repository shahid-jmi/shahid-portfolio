import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skillsData';

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SkillsPage = () => {
  return (
    <>
      <Helmet>
        <title>Skills — Shahid ul Islam</title>
        <meta name="description" content="Technical skills of Shahid ul Islam: React, Node.js, Python, PHP, Laravel, React Native, and more." />
      </Helmet>

      <section className="min-h-screen px-6 md:px-16 py-24 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-500 dark:text-blue-400 mb-2">
            What I work with
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Skills
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            As a Full Stack Developer, I possess a diverse skill set spanning front-end, back-end, mobile, and desktop development.
          </p>
        </motion.div>

        {/* Skill Category Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={itemVariant}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  {cat.category}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-500/30 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 p-6 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-2xl"
        >
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">
            Always Learning
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            I embrace a learning-driven approach, constantly staying up-to-date with the latest advancements in
            web and mobile development. I'm passionate about honing my skills and exploring emerging technologies
            — which translates to cutting-edge solutions.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default SkillsPage;
