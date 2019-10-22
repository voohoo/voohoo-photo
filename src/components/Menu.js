import React from 'react';
import './Menu.css';

function Menu(props) {
  const menuOverlayClass = props.isOpen ? 'show' : '';

  return (
    <div
      id="menu-overlay"
      className={menuOverlayClass}
    >
      <div className="vertical-align">
        <h3>
          <a
            href="https://www.instagram.com/voo.hoo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tooltip">
              <span className="tooltip-text">Instagram</span>
              <img src="images/logos/instagram.png" width="40" alt="Instagram link" />
            </div>
          </a>
        </h3>
        <h3>
          <a
            href="https://www.flickr.com/photos/voohoo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tooltip">
              <span className="tooltip-text">Flickr</span>
              <img src="images/logos/flickr.png" width="40" alt="Flickr link" />
            </div>
          </a>
        </h3>
        <h3>
          <a href="mailto:vuhuypham99@gmail.com">
            <div className="tooltip">
              <span className="tooltip-text">vuhuypham99@gmail.com</span>
              <img src="images/logos/gmail.png" width="40" alt="vuhuypham99@gmail.com email link" />
            </div>
          </a>
        </h3>
      </div>
    </div>
  )
}

export default Menu;
