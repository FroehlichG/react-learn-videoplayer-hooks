import React, {useEffect, useState} from 'react';
import styles from './App.module.scss'
import SearchBar from "../SearchBar";
import VideoList from "../Videolist";
import VideoPlayer from "../VideoPlayer";
import useVideos from "../../hooks/useVideos";



const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('building')

    useEffect(()=>{
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="video-content ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoPlayer video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>)
}

export default App