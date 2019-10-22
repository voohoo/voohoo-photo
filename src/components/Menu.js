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
            <img src="images/logos/instagram.png" width="40" alt="Instagram link" />
          </a>
        </h3>
        <h3>
          <a
            href="https://www.flickr.com/photos/voohoo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/logos/flickr.png" width="40" alt="Flickr link" />
          </a>
        </h3>
        <h3>
          <a href="mailto:vuhuypham99@gmail.com">
            <img src="images/logos/gmail.png" width="40" alt="vuhuypham99@gmail.com email link" />
          </a>
        </h3>
      </div>
    </div>
  )
}

export default Menu;
