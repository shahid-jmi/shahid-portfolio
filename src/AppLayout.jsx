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
        {/* Liquid glass background — always dark like visionOS */}
        <div className="liquid-bg dark font-sans">
          {/* All content sits above the CSS ::before orb layer */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <PageWrapper key={location.pathname}>
                  <Outlet />
                </PageWrapper>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default AppLayout;

