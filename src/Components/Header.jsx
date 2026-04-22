import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useTheme } from '../context/ThemeContext';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const navLinks = [
  { to: '/about',    label: 'About'    },
  { to: '/projects', label: 'Projects' },
  { to: '/skills',   label: 'Skills'   },
  { to: '/contact',  label: 'Contact'  },
];

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-full ${
      isActive
        ? 'glass-pill text-white'
        : 'text-slate-300 hover:text-white'
    }`;

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="glass-pill p-1.5 rounded-xl">
            <img className="h-7 w-auto" src={logo} alt="Shahid ul Islam logo" />
          </div>
          <span className="font-bold text-white text-sm tracking-wide group-hover:text-blue-300 transition-colors duration-200">
            SHAHID UL ISLAM
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: theme toggle + mobile hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            id="theme-toggle"
            aria-label="Toggle dark mode"
            className="p-2 rounded-xl glass-pill text-slate-300 hover:text-white transition-all duration-200"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            id="mobile-menu-button"
            aria-label="Open menu"
            className="md:hidden p-2 rounded-xl glass-pill text-slate-300 hover:text-white transition-all duration-200"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-nav border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
