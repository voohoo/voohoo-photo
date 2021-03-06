import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
}));

const selectedStyle = {
  opacity: 0.3
};

function PhotoTiles(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {props.tileData.map((tile, idx) => (
          <GridListTile key={idx} cols={tile.cols || 1}>
            <img
              src={tile.thumb}
              alt={tile.title}
              style={props.selectedTile === idx ? selectedStyle : {}}
              onClick={() => props.onClick(idx)}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default PhotoTiles;