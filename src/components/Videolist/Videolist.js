import React from "react"
import VideoItem from "../VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const videoItems = videos.map((video) => {
        return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.etag} />
    })

    return <div className="divided relaxed">{videoItems}</div>
}

export default VideoList