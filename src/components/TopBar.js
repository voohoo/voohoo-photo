import React from 'react';
import './TopBar.css';

function TopBar() {
  return (
    <div id="top-bar">
      <div className="top-bar-content">
        <i id="menu-bars" class="fas fa-bars"></i>
        <img src="images/brand/voohoo-black.png" width="100" alt="voohoo brand" />
      </div>
    </div>
  );
}

export default TopBar;
