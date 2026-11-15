import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, ChevronLeft, ChevronRight, Maximize2, Minimize2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, initialIndex = 0, initialFullscreen = false, onClose }) {
  const [activeImgIndex, setActiveImgIndex] = useState(initialIndex || 0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(initialFullscreen || false);
  const [isNativeFs, setIsNativeFs] = useState(false);
  const [lightboxTouchStartX, setLightboxTouchStartX] = useState(null);

  const gallery = project?.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ url: project?.image, caption: project?.title }];

  // Reset or initialize active image index and fullscreen state
  useEffect(() => {
    setActiveImgIndex(initialIndex || 0);
    if (initialFullscreen) {
      setIsLightboxOpen(true);
    }
  }, [project, initialIndex, initialFullscreen]);

  // Listen to native fullscreen changes
  useEffect(() => {
    const onFsChange = () => setIsNativeFs(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  // Keyboard navigation and body scroll lock
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
          if (document.fullscreenElement) {
            document.exitFullscreen?.().catch(() => { });
          }
        } else {
          onClose();
        }
      }
      if (e.key === 'ArrowLeft') {
        setActiveImgIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveImgIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, gallery.length, isLightboxOpen]);

  if (!project) return null;

  const currentImg = gallery[activeImgIndex] || gallery[0];

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setActiveImgIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setActiveImgIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  };

  const toggleNativeFullscreen = (e) => {
    if (e) e.stopPropagation();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => { });
    } else {
      document.exitFullscreen?.().catch(() => { });
    }
  };

  const handleLightboxTouchStart = (e) => {
    setLightboxTouchStartX(e.touches[0].clientX);
  };

  const handleLightboxTouchEnd = (e) => {
    if (lightboxTouchStartX === null) return;
    const diff = lightboxTouchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setLightboxTouchStartX(null);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-sticky-header">
            <div className="modal-header-left">
              <button
                className="modal-close-btn"
                onClick={onClose}
                aria-label="Close dialog"
                title="Close (Esc)"
              >
                <X size={18} />
                <span className="close-esc-badge">ESC</span>
              </button>
            </div>

            <div className="modal-header-badges">
              <span className="card-badge-inline">
                <span className="badge-dot"></span>
                {project.category}
              </span>
              <span className="card-date-inline">
                <Calendar size={12} style={{ opacity: 0.75 }} />
                <span>{project.date}</span>
              </span>
            </div>
          </div>

          {/* Split 2-Column Layout for Desktop (Picture Left, Details Right) */}
          <div className="modal-layout-split">
            {/* Interactive Multi-Image Gallery (Left Pane) */}
            <div className="modal-gallery-container">
              <div
                className="modal-image-wrapper"
                onClick={() => setIsLightboxOpen(true)}
                style={{ cursor: 'zoom-in' }}
                title="Click to view full screen"
              >
                <img
                  key={activeImgIndex}
                  src={currentImg.url}
                  alt={currentImg.caption || project.title}
                  className="card-img modal-main-img"
                />

                {/* Full Screen Button inside Modal Image */}
                <button
                  type="button"
                  className="gallery-expand-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLightboxOpen(true);
                  }}
                  aria-label="View full screen"
                  title="View full screen (or click image to expand)"
                >
                  <Maximize2 size={13} />
                  <span>Full Screen</span>
                </button>

                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="gallery-nav-btn gallery-prev"
                      onClick={handlePrev}
                      aria-label="Previous image"
                      title="Previous screenshot (Left Arrow)"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      className="gallery-nav-btn gallery-next"
                      onClick={handleNext}
                      aria-label="Next image"
                      title="Next screenshot (Right Arrow)"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="gallery-counter">
                      {activeImgIndex + 1} / {gallery.length}
                    </div>
                  </>
                )}
              </div>

              {currentImg.caption && (
                <div className="gallery-caption">
                  <span className="caption-tag">Figure {activeImgIndex + 1}</span>
                  <span className="caption-text">{currentImg.caption}</span>
                </div>
              )}

              {gallery.length > 1 && (
                <div className="gallery-thumb-strip">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`gallery-thumb-btn ${idx === activeImgIndex ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImgIndex(idx);
                      }}
                      aria-label={`View image ${idx + 1}`}
                      title={img.caption || `Image ${idx + 1}`}
                    >
                      <img src={img.url} alt="" className="thumb-img" />
                      <span className="thumb-index-num">{idx + 1}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-body">
              <div className="modal-body-scroll">
                <div className="modal-course-badge">{project.course}</div>
                <h2 className="modal-title">
                  {project.title}
                </h2>
                <p className="modal-institution">
                  <span className="inst-dot"></span>
                  <span>{project.institution}</span>
                </p>

                <div className="modal-divider"></div>

                <p className="modal-description">
                  {project.fullDescription}
                </p>

                <div className="modal-highlights-section">
                  <h3 className="modal-section-heading">
                    Key Technical Highlights
                  </h3>
                  <ul className="modal-features-list">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="modal-feature-item">
                        <div className="feature-icon-wrapper">
                          <CheckCircle2 size={15} className="feature-icon" />
                        </div>
                        <span className="feature-text">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-tags-section">
                  <div className="modal-tags-label">Technologies & Hardware Tools:</div>
                  <div className="card-tags modal-tags">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="tag modal-tag-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary modal-btn modal-btn-github"
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={18} />
                    <span>View GitHub Repository</span>
                    <ExternalLink size={15} style={{ marginLeft: '4px', opacity: 0.85 }} />
                  </a>
                )}

                <button
                  onClick={onClose}
                  className="btn btn-secondary modal-btn modal-btn-close"
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Overlay */}
      {isLightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => {
            setIsLightboxOpen(false);
            if (document.fullscreenElement) {
              document.exitFullscreen?.().catch(() => { });
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen image preview"
        >
          {/* Lightbox Header Bar */}
          <div className="lightbox-header" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-title-area">
              <span className="lightbox-badge">{project.category}</span>
              <span className="lightbox-counter">{activeImgIndex + 1} / {gallery.length}</span>
              {currentImg.caption && (
                <span className="lightbox-caption">{currentImg.caption}</span>
              )}
            </div>

            <div className="lightbox-header-actions">
              <button
                type="button"
                className="lightbox-btn"
                onClick={toggleNativeFullscreen}
                aria-label="Toggle Fullscreen Mode"
                title={isNativeFs ? "Exit Browser Fullscreen" : "Enter Browser Fullscreen"}
              >
                {isNativeFs ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
              <button
                type="button"
                className="lightbox-btn lightbox-close-btn"
                onClick={() => {
                  setIsLightboxOpen(false);
                  if (document.fullscreenElement) {
                    document.exitFullscreen?.().catch(() => { });
                  }
                }}
                aria-label="Close Fullscreen (Esc)"
                title="Close Fullscreen (Esc)"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Lightbox Center Image Stage */}
          <div
            className="lightbox-stage"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleLightboxTouchStart}
            onTouchEnd={handleLightboxTouchEnd}
          >
            <img
              key={activeImgIndex}
              src={currentImg.url}
              alt={currentImg.caption || project.title}
              className="lightbox-img"
            />

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-prev"
                  onClick={handlePrev}
                  aria-label="Previous screenshot"
                  title="Previous screenshot (Left Arrow)"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-next"
                  onClick={handleNext}
                  aria-label="Next screenshot"
                  title="Next screenshot (Right Arrow)"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Bottom Thumbnails */}
          {gallery.length > 1 && (
            <div className="lightbox-footer" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-thumb-strip">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`lightbox-thumb ${idx === activeImgIndex ? 'active' : ''}`}
                    onClick={() => setActiveImgIndex(idx)}
                    aria-label={`Jump to image ${idx + 1}`}
                    title={img.caption || `Image ${idx + 1}`}
                  >
                    <img src={img.url} alt="" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
