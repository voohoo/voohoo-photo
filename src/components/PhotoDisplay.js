import React from 'react';
import './PhotoDisplay.css';

function PhotoDisplay(props) {
  return (
    <div className="photo-container">
      <img src={props.photoPath} className="photo-display" alt="Displayed" />
    </div>
  );
}

export default PhotoDisplay;
