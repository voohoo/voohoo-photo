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
        onClick={() => props.onClick()}
      />
    </div>
  );
}

export default PhotoDisplay;
