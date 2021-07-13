import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <div classname="HornedBeast">
        <h2>
          {this.props.name}
        </h2>
        <img src = "https://wallpaperxyz.com/wp-content/uploads/Rhino-HD-Wallpapers-Free-Download-Wallpaperxyz.com-4.jpg" alt = "rhino" title = "rhino"></img>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;
