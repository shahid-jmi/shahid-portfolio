import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skillsData';
import { Seo } from '../Components/Seo';

const containerVariant = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const itemVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

const SkillsPage = () => {
  return (
    <>
      <Seo
        title="Skills"
        description="Technical skills of Shahid ul Islam: React, Node.js, Python, PHP, Laravel, React Native, and more."
        path="/skills"
      />

      <section className="min-h-screen px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">What I work with</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
            A diverse skill set spanning front-end, back-end, mobile, and desktop development.
          </p>
        </motion.div>

        <motion.div variants={containerVariant} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCategories.map((cat) => (
            <motion.div key={cat.id} variants={itemVariant} className="glass p-5 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{cat.icon}</span>
                <h2 className="text-sm font-bold text-white">{cat.category}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="glass-pill px-3 py-1.5 text-xs font-medium text-slate-300 rounded-full cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 glass p-6"
        >
          <div className="glass-glow-line rounded-full mb-4" />
          <h3 className="font-bold text-white mb-2 text-sm">Always Learning</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            I embrace a learning-driven approach, constantly staying up-to-date with the latest advancements in
            web and mobile development — which translates to cutting-edge solutions.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default SkillsPage;
