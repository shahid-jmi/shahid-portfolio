import React from 'react';
import { motion } from 'framer-motion';
import { Seo } from '../Components/Seo';

const sectionVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const milestones = [
  { year: 'B.Sc. IT',  title: 'Bachelor of Science in Information Technology', desc: 'Built the academic foundation in programming and web technologies.' },
  { year: 'MCA',       title: 'Master of Computer Applications',                desc: 'Deepened expertise in algorithms, software engineering, and advanced programming.' },
  { year: '🏅 Award', title: 'Gold Medalist',                                   desc: 'Recognized as Gold Medalist at university — a testament to dedication.' },
  { year: 'Today',     title: 'Full Stack Developer',                            desc: 'Building modern web applications with React, Node.js, and more.' },
];

const AboutPage = () => {
  return (
    <>
      <Seo
        title="About"
        description="Learn about Shahid ul Islam, a Gold Medalist Full Stack Developer from Jammu and Kashmir, India."
        path="/about"
      />

      <section className="min-h-screen px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
        >
          {/* Header */}
          <motion.div variants={sectionVariant} className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              Get to know me
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              A passionate Full Stack Developer hailing from the picturesque region of{' '}
              <span className="text-blue-300 font-medium">Jammu and Kashmir, India</span>.
              I love crafting seamless user experiences and innovative digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Story cards */}
            <motion.div variants={sectionVariant} className="space-y-4">
              {[
                { title: 'Love for Web Development', body: 'Web development is where creativity meets functionality. I find immense joy in crafting seamless user experiences, and every day I discover new ways to push the boundaries of what\'s possible on the web.' },
                { title: 'Future Endeavors',         body: 'I strive to stay at the forefront of technology by constantly learning and exploring emerging trends. My goal is to contribute to innovative projects that make a real difference.' },
                { title: 'Beyond the Screen',        body: 'Beyond coding, I love exploring the stunning landscapes of Jammu and Kashmir, immersing in its rich culture, and capturing moments through photography.' },
              ].map((item) => (
                <div key={item.title} className="glass p-5">
                  <h2 className="text-sm font-bold text-white mb-2">{item.title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </motion.div>

            {/* Right: Timeline */}
            <motion.div variants={sectionVariant}>
              <div className="glass p-6">
                <h2 className="text-sm font-bold text-white mb-6">My Journey</h2>
                <div className="relative">
                  <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-transparent" />
                  <div className="space-y-7">
                    {milestones.map((m, i) => (
                      <div key={i} className="relative pl-10">
                        <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full glass-pill flex items-center justify-center text-xs font-bold text-blue-300">
                          {i + 1}
                        </div>
                        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-0.5">{m.year}</p>
                        <h3 className="text-sm font-bold text-white mb-1">{m.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
                      </div>
                    ))}
                  </div>
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
