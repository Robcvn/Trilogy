import React, { useEffect } from "react";

export default function CompanyModal({ person, previous, next, onClose, onNext, onPrevious }) {
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && previous) onPrevious();
      if (e.key === "ArrowRight" && next) onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Prevent background scroll
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [person, onClose, onPrevious, onNext, previous, next]);

  return (
    <div className="modal-wrapper">
      <div className="modal-header u-container">
        <div className="modal-header-left">
          <button 
            className="ap-btn-left" 
            onClick={onPrevious}
            disabled={!previous}
            style={{ 
              opacity: previous ? 1 : 0.3, 
              cursor: previous ? 'pointer' : 'not-allowed' 
            }}
            aria-label="Previous team member"
          ></button>
          {previous && (
            <div className="modal-header-text">
              <span className="overline-xs-medium">Previous</span>
              <span className="body-sm-reg">{previous.name}</span>
            </div>
          )}
        </div>

        <button 
          className="modal-close-btn" 
          onClick={onClose}
        >
          Close
        </button>

        <div className="modal-header-right">
          {next && (
            <div className="modal-header-text">
              <span className="overline-xs-medium">Next</span>
              <span className="body-sm-reg">{next.name}</span>
            </div>
          )}
          <button 
            className="ap-btn-right" 
            onClick={onNext}
            disabled={!next}
            style={{ 
              opacity: next ? 1 : 0.3, 
              cursor: next ? 'pointer' : 'not-allowed' 
            }}
            aria-label="Next team member"
          ></button>
        </div>
      </div>

      <div className="modal-content-wrapper u-container">
        <div className="modal-content">
          <div className="modal-image-container">
            <img src={person.cardImage} alt={person.name} />
          </div>
          
          <div className="modal-inner-text">
            <div className="modal-inner-top">
              <h1 className="heading-2xl-book">{person.name}</h1>
              {person.linkedin && (
                <a 
                  className="linkedin-link" 
                  href={person.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  in
                </a>
              )}
            </div>
            <p className="body-lg-reg">{person.title}</p>
            <div className="modal-hr"></div>
            
            <div className="modal-bio-content">
              <p className="modal-p body-md-reg">
                {person.bio1 || "Biographical information coming soon."}
              </p>
              {person.bio2 && (
                <p className="modal-p body-md-reg">{person.bio2}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}