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

  render() {
    const overlayClass = this.state.isFullScreen ? 'show' : '';

    return (
      <div>
        <TopBar />
        <div className="app-container">
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
        <div id="overlay" className={overlayClass}></div>
      </div>
    );
  }
}

export default App;
