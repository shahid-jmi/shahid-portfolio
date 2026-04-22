import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import picPng from '../assets/images/shahid.png';
import picWebp from '../assets/images/shahid.webp';
import picAvif from '../assets/images/shahid.avif';
import { Seo } from '../Components/Seo';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75, ease: 'easeOut' } },
};

const HomePage = () => {
  return (
    <>
      <Seo path="/" />

      <section className="min-h-screen flex items-center px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Text Side */}
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4"
            >
              Shahid <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                ul Islam
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-300 font-medium mb-3"
            >
              Full Stack Developer &amp; Gold Medalist 🏅
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm text-slate-500 max-w-md mx-auto md:mx-0 mb-10 leading-relaxed"
            >
              I craft performant, scalable web applications with a focus on
              clean code and beautiful user experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/projects"
                className="px-8 py-3.5 rounded-2xl font-semibold text-sm text-white
                  bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500
                  shadow-lg shadow-violet-500/30
                  hover:shadow-violet-500/50 hover:-translate-y-0.5
                  transition-all duration-300"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-2xl font-semibold text-sm text-slate-200
                  glass hover:text-white transition-all duration-300"
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
              {/* Glow halo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-cyan-500/20 blur-2xl" />
              {/* Glass frame */}
              <div className="relative glass p-2">
                <picture>
                  <source srcSet={picAvif} type="image/avif" />
                  <source srcSet={picWebp} type="image/webp" />
                  <img
                    className="w-64 h-64 md:w-76 md:h-76 object-cover rounded-[18px]"
                    src={picPng}
                    alt="Shahid ul Islam — Full Stack Developer"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
