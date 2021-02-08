import React from "react"

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div
            className="item"
            onClick={() => {
                onVideoSelect(video)
            }}
        >
            <div className="image-wrapper">
                <img
                    src={video.snippet.thumbnails.medium.url}
                    className="ui image"
                    alt={video.snippet.title}
                />
            </div>
            <div className="content">
                <div className="header" as="text">
                    <h5>{video.snippet.title}</h5>
                </div>
            </div>
        </div>
    )
}

export default VideoItem