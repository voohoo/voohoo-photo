import React from 'react';
import './TopBar.css';

function TopBar(props) {
  return (
    <div id="top-bar">
      <div className="top-bar-content">
        <i id="menu-bars" className="fas fa-bars" onClick={() => props.onClick()}></i>
        <img src="images/brand/voohoo-black.png" width="100" alt="voohoo brand" />
      </div>
    </div>
  );
}

export default TopBar;
