import React from 'react';
import './App.css';
//import Grid from '@material-ui/core/Grid';
import TopBar from './components/TopBar';
import Menu from './components/Menu';
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

    return (
      <div>
        <div className="app-container">
          <TopBar onClick={() => this.handleMenuClick()} />
          <Menu isOpen={this.state.isMenuOpen} />
          <PhotoTiles
            tileData={tileData}
            onClick={(e) => this.handleTileClick(e)}
          />
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
