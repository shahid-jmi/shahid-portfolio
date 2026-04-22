import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const milestones = [
  {
    year: 'B.Sc. IT',
    title: 'Bachelor of Science in Information Technology',
    desc: 'Built the academic foundation for my career in programming and web technologies.',
  },
  {
    year: 'MCA',
    title: 'Master of Computer Applications',
    desc: 'Deepened expertise in algorithms, software engineering, and advanced programming.',
  },
  {
    year: '🏅 Award',
    title: 'Gold Medalist',
    desc: 'Recognized as Gold Medalist at my university — a testament to dedication and hard work.',
  },
  {
    year: 'Today',
    title: 'Full Stack Developer',
    desc: 'Building modern web applications using React, Node.js, and a broad suite of modern technologies.',
  },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About — Shahid ul Islam</title>
        <meta name="description" content="Learn about Shahid ul Islam, a Gold Medalist Full Stack Developer from Jammu and Kashmir, India with expertise in React and Node.js." />
      </Helmet>

      <section className="min-h-screen px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Header */}
          <motion.div variants={sectionVariant} className="mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-500 dark:text-blue-400 mb-2">
              Get to know me
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              A passionate Full Stack Developer hailing from the picturesque region of{' '}
              <span className="text-blue-500 dark:text-blue-400 font-semibold">
                Jammu and Kashmir, India
              </span>
              . I love crafting seamless user experiences and innovative digital solutions.
            </p>
          </motion.div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Story */}
            <motion.div variants={sectionVariant} className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Love for Web Development
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Web development has been an integral part of my life. I find immense joy in
                  crafting seamless user experiences and innovative solutions. It's a fascinating
                  space where creativity meets functionality, and every day I discover new ways to
                  push the boundaries of what's possible.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Future Endeavors
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I strive to stay at the forefront of technology by constantly learning and
                  exploring emerging trends. My goal is to contribute to innovative projects that
                  make a difference in people's lives and shape the future of the digital landscape.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Beyond the Screen
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Beyond coding, I love exploring the stunning landscapes of Jammu and Kashmir,
                  immersing myself in its rich culture, and capturing moments through photography.
                </p>
              </div>
            </motion.div>

            {/* Right: Timeline */}
            <motion.div variants={sectionVariant}>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                My Journey
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
                <div className="space-y-8">
                  {milestones.map((m, i) => (
                    <div key={i} className="relative pl-12">
                      <div className="absolute left-0 top-1 w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                        {i + 1}
                      </div>
                      <p className="text-xs font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wider mb-0.5">
                        {m.year}
                      </p>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                        {m.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutPage;
