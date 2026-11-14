import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Sparkles } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  const [openInFullscreen, setOpenInFullscreen] = useState(false);

  const handleSelectProject = (project, imgIndex = 0, fullscreen = false) => {
    setSelectedProject(project);
    setInitialImageIndex(imgIndex);
    setOpenInFullscreen(fullscreen);
  };

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categoryKey === filter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Automation & Software <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Autonomous robotics, industrial PLC control lines, and software applications built with precision and tested thoroughly.
          </p>
        </div>

        {/* Horizontally scrollable on mobile */}
        <div className="filter-tabs-wrapper">
          <div className="filter-tabs">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Systems ({projectsData.length})
            </button>
            <button
              className={`filter-btn ${filter === 'embedded' ? 'active' : ''}`}
              onClick={() => setFilter('embedded')}
            >
              Robotics & Embedded
            </button>
            <button
              className={`filter-btn ${filter === 'automation' ? 'active' : ''}`}
              onClick={() => setFilter('automation')}
            >
              Industrial Automation (PLC)
            </button>
            <button
              className={`filter-btn ${filter === 'software' ? 'active' : ''}`}
              onClick={() => setFilter('software')}
            >
              Software & GUI
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={handleSelectProject}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            initialIndex={initialImageIndex}
            initialFullscreen={openInFullscreen}
            onClose={() => {
              setSelectedProject(null);
              setOpenInFullscreen(false);
            }}
          />
        )}
      </div>
    </section>
  );
}
