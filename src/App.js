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
    };
  }

  componentDidMount() {
    this.setState({
      selectedPhoto: this.state.photos[0].img
    });
  }

  handleClick(e) {
    this.setState({
      selectedPhoto: e
    });
  }

  render() {

    return (
      <div>
        <TopBar></TopBar>
        <div className="app-container">
          <PhotoTiles tileData={tileData} onClick={(e) => this.handleClick(e)}></PhotoTiles>
          <PhotoDisplay photoPath={this.state.selectedPhoto}></PhotoDisplay>
        </div>
      </div>
    );
    /*
    return (
      <Grid container spacing={0} style={{height: "100vh"}}>
        <Grid item md={4} className="left">
          <TopBar></TopBar>
          <PhotoTiles onClick={(e) => this.handleClick(e)}></PhotoTiles>
        </Grid>
        <Grid item md={8} className="right">
          <PhotoDisplay photoPath={this.state.selectedPhoto}></PhotoDisplay>
        </Grid>
      </Grid>
    );
    */
  }
}

export default App;
