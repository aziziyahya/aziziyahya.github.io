import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/projects';

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-pill">
              <span className="pulse-dot"></span>
              <span>Seeking Internship</span>
            </div>

            <h1 className="hero-title">
              Bridging Hardware & Software Through <span className="gradient-text">Industrial Automation & Embedded</span> Systems
            </h1>

            <p className="hero-description">
              Hi, I'm <strong>{personalInfo.preferredName}</strong> — a tech-savvy undergraduate with strong technical troubleshooting skills and hands-on hardware repair experience, complemented by a customer service background in retail and e-commerce.
            </p>

            <p className="hero-subdescription" style={{ color: 'var(--text-dim)', fontSize: '0.94rem', marginBottom: '28px' }}>
              Eager to grow in software development and automation, with proven adaptability in both independent tasks and collaborative team environments.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary btn-mobile-hero">
                <span>Explore Projects</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-mobile-hero"
              >
                <GithubIcon size={18} />
                <span>GitHub Profile</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-outline btn-mobile-hero"
              >
                <Mail size={18} />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          <div className="hero-card-wrapper">
            <div className="hero-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="terminal-title">azizi@unimap-workstation:~</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span>cat technical_profile.json</span>
                </div>
                <div className="terminal-line terminal-highlight">
                  &#123;
                </div>
                <div className="terminal-line" style={{ paddingLeft: '16px' }}>
                  "name": "Nik Mohamad Azizi Bin Nik Yahya",
                </div>
                <div className="terminal-line" style={{ paddingLeft: '16px' }}>
                  "programme": "Industrial Electronic Automation",
                </div>
                <div className="terminal-line" style={{ paddingLeft: '16px' }}>
                  "hardware": ["Siemens S7-1500", "ESP32"],
                </div>
                <div className="terminal-line" style={{ paddingLeft: '16px' }}>
                  "tools": ["TIA Portal", "Arduino", "Python 3"],
                </div>
                <div className="terminal-line" style={{ paddingLeft: '16px' }}>
                  "location": "Kota Bharu, Kelantan",
                </div>
                <div className="terminal-line" style={{ paddingLeft: '16px' }}>
                  "status": "Available for Internship"
                </div>
                <div className="terminal-line terminal-highlight">
                  &#125;
                </div>
                <div className="terminal-line" style={{ marginTop: '14px' }}>
                  <span className="terminal-prompt">$</span>
                  <span>./check_systems.sh</span>
                </div>
                <div className="terminal-line" style={{ display: 'flex', justifyContent: 'space-between', color: '#38bdf8' }}>
                  <span>✔ Siemens S7-1500 (TIA Portal)</span>
                  <span style={{ color: '#34d399', fontWeight: 600 }}>[CONNECTED]</span>
                </div>
                <div className="terminal-line" style={{ display: 'flex', justifyContent: 'space-between', color: '#38bdf8' }}>
                  <span>✔ ESP32 Balancing Robot</span>
                  <span style={{ color: '#34d399', fontWeight: 600 }}>[BALANCED]</span>
                </div>
                <div className="terminal-line" style={{ display: 'flex', justifyContent: 'space-between', color: '#38bdf8' }}>
                  <span>✔ Python Desktop Application</span>
                  <span style={{ color: '#34d399', fontWeight: 600 }}>[RUNNING]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
