import React, { Component } from 'react';

// Create a funcional component, then pass in the props object from parent component
// as an argument.
const VideoList = (props) => {
    return (
      // bootstrap class
      <ul className="col-md-4 list-group">
        {props.videos.length}
      </ul>
    );
};

export default VideoList;
