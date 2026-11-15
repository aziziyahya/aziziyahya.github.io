import React, { useState } from 'react';
import { ArrowUpRight, Calendar, ChevronLeft, ChevronRight, ExternalLink, Images, Maximize2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelect }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const gallery = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ url: project.image, caption: project.title }];
  const totalImages = gallery.length;

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentImgIndex((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentImgIndex((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  const currentImage = gallery[currentImgIndex] || gallery[0];

  return (
    <div className="project-card">
      <div
        className="card-image-box"
        onClick={() => onSelect(project, currentImgIndex)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${project.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(project, currentImgIndex);
          }
        }}
      >
        <img
          key={currentImgIndex}
          src={currentImage.url}
          alt={currentImage.caption || project.title}
          className="card-img card-img-fade"
          loading="lazy"
        />

        <span className="card-badge">
          <span className="badge-dot"></span>
          {project.category}
        </span>

        <span className="card-date">
          <Calendar size={11} style={{ opacity: 0.75 }} />
          <span>{project.date}</span>
        </span>

        {/* Mini Slider Navigation Arrows */}
        {totalImages > 1 && (
          <>
            <button
              type="button"
              className="card-slider-btn card-slider-prev"
              onClick={handlePrev}
              aria-label="Previous screenshot"
              title="Previous screenshot"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              type="button"
              className="card-slider-btn card-slider-next"
              onClick={handleNext}
              aria-label="Next screenshot"
              title="Next screenshot"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Mini Slider Pagination Dots */}
        {totalImages > 1 && (
          <div className="card-slider-dots" role="tablist" aria-label="Screenshot thumbnails">
            {gallery.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`card-dot ${idx === currentImgIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIndex(idx);
                }}
                aria-label={`View image ${idx + 1}`}
                title={`Image ${idx + 1} of ${totalImages}`}
              />
            ))}
          </div>
        )}

        {/* Multi-Picture Indicator Pill (Click to open full screen) */}
        {totalImages > 1 && (
          <button
            type="button"
            className="card-photo-count card-photo-btn"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project, currentImgIndex, true);
            }}
            title={`${totalImages} screenshots available — Click to view full screen`}
            aria-label={`${totalImages} screenshots available. Click to view full screen`}
          >
            <Images size={11} style={{ opacity: 0.85 }} />
            <span>{currentImgIndex + 1}/{totalImages}</span>
            <Maximize2 size={10} style={{ opacity: 0.7, marginLeft: '3px' }} />
          </button>
        )}
      </div>

      <div className="card-content">
        <div className="card-header-meta">{project.course}</div>
        <h3
          className="card-title"
          onClick={() => onSelect(project, currentImgIndex)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect(project, currentImgIndex);
            }
          }}
        >
          {project.title}
        </h3>

        <p className="card-summary">{project.summary}</p>

        <div className="card-tags">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="tag">+{project.tags.length - 4}</span>
          )}
        </div>

        <div className="card-actions">
          <button
            onClick={() => onSelect(project, currentImgIndex)}
            className="btn btn-primary btn-card-action"
            aria-label={`View full details of ${project.title}`}
          >
            <span>Details</span>
            <ArrowUpRight size={15} />
          </button>

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-card-action"
              title="View GitHub Repository"
              aria-label={`View GitHub Repository for ${project.title}`}
            >
              <GithubIcon size={16} />
              <span>GitHub Repo</span>
              <ExternalLink size={13} style={{ opacity: 0.8, marginLeft: '2px' }} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
