import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/projects';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo" onClick={closeMenu}>
          <span className="logo-badge">
            <Cpu size={20} />
          </span>
          <span className="logo-text">{personalInfo.preferredName}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="#projects"
              className="btn btn-primary btn-sm"
            >
              <span>View Projects</span>
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-links">
            <li>
              <a href="#about" onClick={closeMenu}>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                <span>Technical Skills</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <div className="mobile-drawer-actions">
            <a
              href="#projects"
              onClick={closeMenu}
              className="btn btn-primary btn-mobile-action"
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn btn-secondary btn-mobile-action"
            >
              <GithubIcon size={18} />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
