import React from 'react';
import { skillsData } from '../data/projects';
import { Cpu, Factory, Code, Wrench, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Cpu: <Cpu size={22} />,
  Factory: <Factory size={22} />,
  Code: <Code size={22} />
};

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Wrench size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technical Toolkit</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical competencies across industrial automation, embedded hardware, and software development.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-cat-header">
                <div className="skill-cat-icon">
                  {iconMap[cat.icon] || <Cpu size={22} />}
                </div>
                <div className="skill-cat-title-wrap">
                  <h3 className="skill-cat-title">{cat.category}</h3>
                  {cat.subtitle && <span className="skill-cat-subtitle">{cat.subtitle}</span>}
                </div>
              </div>

              <div className="skill-chips-grid">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    <span className="chip-dot" />
                    {skill}
                  </span>
                ))}
              </div>

              {cat.highlight && (
                <div className="skill-highlight-box">
                  <div className="highlight-header">
                    <CheckCircle2 size={13} className="highlight-icon" />
                    <span className="highlight-label">Practical Delivery</span>
                  </div>
                  <p className="highlight-text">{cat.highlight}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

