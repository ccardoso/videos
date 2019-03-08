import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    const videoId = video.id.videoId;
    return (
      <VideoItem key={videoId} onVideoSelect={onVideoSelect} video={video} />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
