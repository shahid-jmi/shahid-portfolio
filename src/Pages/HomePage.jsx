import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import pic from '../assets/images/shahid.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Shahid ul Islam — Full Stack Developer</title>
        <meta name="description" content="Shahid ul Islam is a Full Stack Developer from Jammu and Kashmir, India, specializing in React, Node.js, and modern web technologies." />
      </Helmet>

      <section className="min-h-screen flex items-center px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-0">

          {/* Text Side */}
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold tracking-widest uppercase text-blue-500 dark:text-blue-400 mb-3"
            >
              Welcome to my portfolio
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4"
            >
              Shahid <br className="hidden md:block" />
              <span className="text-blue-500 dark:text-blue-400">ul Islam</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-6"
            >
              Full Stack Developer &amp; Gold Medalist 🏅
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base text-slate-500 dark:text-slate-500 max-w-md mx-auto md:mx-0 mb-10"
            >
              I craft performant, scalable web applications with a focus on clean
              code and beautiful user experiences.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/projects"
                className="px-8 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50 hover:-translate-y-0.5"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Photo Side */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-blue-500/20 dark:bg-blue-400/10 blur-3xl transform scale-110" />
              <img
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-2 border-white/20"
                src={pic}
                alt="Shahid ul Islam — Full Stack Developer"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
