import React from 'react';
import './PhotoDisplay.css';

function PhotoDisplay(props) {
  const displayClass =
    props.isFullScreen ? "photo-container full-screen" : "photo-container";

  return (
    <div className={displayClass}>
      <img
        src={props.photoPath}
        className="photo-display"
        alt="Displayed"
        onClick={props.photoClick}
      />
      <div className="nav-buttons">
        <i className="fas fa-chevron-left" onClick={props.previousClick}></i>
        <i className="fas fa-chevron-right" onClick={props.nextClick}></i>
      </div>
    </div>
  );
}

export default PhotoDisplay;
