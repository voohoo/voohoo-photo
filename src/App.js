import React from 'react';
import './App.css';
//import Grid from '@material-ui/core/Grid';
import TopBar from './components/TopBar';
import PhotoTiles from './components/PhotoTiles';
import PhotoDisplay from './components/PhotoDisplay';
import tileData from './tileData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: tileData,
      selectedPhoto: '',
      isFullScreen: false,
      isMenuOpen: false,
    };
  }

  componentDidMount() {
    this.setState({
      selectedPhoto: this.state.photos[0].img
    });
  }

  handleTileClick(e) {
    this.setState({
      selectedPhoto: e
    });
  }

  handlePhotoClick() {
    this.setState(prevState => ({
      isFullScreen: !prevState.isFullScreen
    }));
  }

  handleMenuClick() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    const photoOverlayClass = this.state.isFullScreen ? 'show' : '';
    const menuOverlayClass = this.state.isMenuOpen ? 'show' : '';

    return (
      <div>
        <div className="app-container">
          <TopBar onClick={() => this.handleMenuClick()} />
          <PhotoTiles
            tileData={tileData}
            onClick={(e) => this.handleTileClick(e)}
          />
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
                  Instagram
                </a>
              </h3>
              <h3>
                <a
                  href="https://www.flickr.com/photos/voohoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  flickr
                </a>
              </h3>
              <h3>vuhuypham99@gmail.com</h3>
            </div>
          </div>
          <PhotoDisplay
            photoPath={this.state.selectedPhoto}
            isFullScreen={this.state.isFullScreen}
            onClick={() => this.handlePhotoClick()}
          />
        </div>
        <div id="photo-display-overlay" className={photoOverlayClass}></div>
      </div>
    );
  }
}

export default App;
