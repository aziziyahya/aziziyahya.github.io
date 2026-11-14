import React from 'react';
import { personalInfo } from '../data/projects';
import { Mail, Cpu, ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div className="logo-badge">
                <Cpu size={18} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{personalInfo.name}</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px' }}>
              {personalInfo.title} • {personalInfo.institution}
            </p>
          </div>

          <div className="footer-socials">
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-icon-btn"
              title="Send an Email"
            >
              <Mail size={18} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <button
              onClick={scrollToTop}
              className="social-icon-btn"
              title="Scroll to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-copy">
          <p>
            © {new Date().getFullYear()} {personalInfo.preferredName}. Built with React, Vite & GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
}
