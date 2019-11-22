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
      selectedPhoto: 0,
      isFullScreen: false,
      isMenuOpen: false,
    };
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

  handleNextClick() {
    this.next();
  }

  handlePreviousClick() {
    this.previous();
  }

  handleArrowKeyPress(e) {
    if (e.key === 'ArrowLeft') {
      console.log('left');
      this.previous();
    } else if (e.key === 'ArrowRight') {
      console.log('right');
      this.next();
    }
  }

  next() {
    if (this.state.selectedPhoto === tileData.length - 1) return;
    this.setState(prevState => ({
      selectedPhoto: prevState.selectedPhoto + 1
    }));
  }

  previous() {
    if (this.state.selectedPhoto === 0) return;
    this.setState(prevState => ({
      selectedPhoto: prevState.selectedPhoto - 1
    }));
  }

  render() {
    const photoOverlayClass = this.state.isFullScreen ? 'show' : '';

    return (
      <div>
        <div className="app-container"
          onKeyDown={(e) => this.handleArrowKeyPress(e)}
          tabIndex="0"
        >
          <TopBar onClick={() => this.handleMenuClick()} />
          <Menu isOpen={this.state.isMenuOpen} />
          <PhotoTiles
            tileData={tileData}
            selectedTile={this.state.selectedPhoto}
            onClick={(e) => this.handleTileClick(e)}
          />
          <PhotoDisplay
            photoPath={tileData[this.state.selectedPhoto].img}
            isFullScreen={this.state.isFullScreen}
            photoClick={() => this.handlePhotoClick()}
            nextClick={() => this.handleNextClick()}
            previousClick={() => this.handlePreviousClick()}
          />
        </div>
        <div id="photo-display-overlay" className={photoOverlayClass}></div>
      </div>
    );
  }
}

export default App;
