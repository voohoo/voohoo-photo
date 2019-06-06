import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import TopBar from './components/TopBar';
import PhotoTiles from './components/PhotoTiles';

function App() {
  return (
    <Grid container spacing={0} style={{height: "100vh"}}>
      <Grid item md={4} className="left">
        <TopBar></TopBar>
        <PhotoTiles></PhotoTiles>
      </Grid>
      <Grid item md={8}>
        
      </Grid>
    </Grid>
  );
}

export default App;
