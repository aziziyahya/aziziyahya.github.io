import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Sparkles } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  const [openInFullscreen, setOpenInFullscreen] = useState(false);

  // Deep-link support: auto-open modal if ?project=<id> or #<id> is in the URL
  useEffect(() => {
    const parseDeepLink = () => {
      const params = new URLSearchParams(window.location.search);
      const queryId = params.get('project');

      const rawHash = window.location.hash.replace(/^#/, '');
      const hashId = rawHash.startsWith('project-')
        ? rawHash.replace('project-', '')
        : rawHash;

      const targetId = queryId || (hashId && hashId !== 'projects' ? hashId : null);

      if (targetId) {
        const found = projectsData.find(
          (p) => p.id === targetId || p.id.toLowerCase() === targetId.toLowerCase()
        );
        if (found) {
          setSelectedProject(found);
          if (found.categoryKey) {
            setFilter(found.categoryKey);
          }
        }
      }
    };

    parseDeepLink();
    window.addEventListener('popstate', parseDeepLink);
    return () => window.removeEventListener('popstate', parseDeepLink);
  }, []);

  // Preload all project images in background for instant 0ms switching
  useEffect(() => {
    const urls = new Set();
    projectsData.forEach((p) => {
      if (p.image) urls.add(p.image);
      if (p.gallery) {
        p.gallery.forEach((g) => {
          if (g?.url) urls.add(g.url);
        });
      }
    });

    urls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
    });
  }, []);

  const handleSelectProject = (project, imgIndex = 0, fullscreen = false) => {
    setSelectedProject(project);
    setInitialImageIndex(imgIndex);
    setOpenInFullscreen(fullscreen);

    // Update URL parameter so the project is directly shareable
    const url = new URL(window.location.href);
    url.searchParams.set('project', project.id);
    window.history.pushState({ projectId: project.id }, '', url.toString());
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setOpenInFullscreen(false);

    // Clean up query param from URL on close
    const url = new URL(window.location.href);
    if (url.searchParams.has('project')) {
      url.searchParams.delete('project');
      window.history.pushState({}, '', url.pathname + (url.hash || ''));
    }
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
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
}
