import React, { Component } from 'react';
import VideoListItem from './video_list_item';

// Create a funcional component, then pass in the props object from parent component
// as an argument.
const VideoList = (props) => {
  const videoItems = props.videos.map( (video) => {
    return <VideoListItem key={video.etag} video={video} />
  })
    return (
      // bootstrap class
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
};

export default VideoList;
