import React, {Component} from 'react';

const VideoListItem = (props) => {
  // store props.video in a variable
  const video = props.video;
  // store image url from YouTube search object's item
  const imageUrl = video.snippet.thumbnails.default.url;
  
  return (
    <li className="list-group-item">
      <div className="video-list media">

        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;
