import React from 'react';
import './PhotoDisplay.css';

class PhotoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
    };
  }

  handleClick() {
    this.setState(prevState => ({
      isFullScreen: !prevState.isFullScreen
    }));
  }

  render() {
    const displayClass =
      this.state.isFullScreen ? "photo-container full-screen" : "photo-container";

    return (
      <div className={displayClass} onClick={() => this.handleClick()}>
        <img src={this.props.photoPath} className="photo-display" alt="Displayed" />
      </div>
    );
  }
}

export default PhotoDisplay;
