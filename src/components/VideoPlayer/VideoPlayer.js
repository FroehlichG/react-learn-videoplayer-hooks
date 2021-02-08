import React from "react"

const VideoPlayer = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    } else {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        return (
            <div>
                <div className="ui embed">
                    <iframe
                        // width="560"
                        // height="315"
                        src={videoSrc}
                        // frameBorder="0"
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        // allowFullScreen
                    ></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p className="ui">{video.snippet.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoPlayer