import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ThemeProvider } from './context/ThemeContext';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.35, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

const AppLayout = () => {
  const location = useLocation();

  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans transition-colors duration-300">
          <Header />
          <main>
            <AnimatePresence mode="wait">
              <PageWrapper key={location.pathname}>
                <Outlet />
              </PageWrapper>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default AppLayout;
