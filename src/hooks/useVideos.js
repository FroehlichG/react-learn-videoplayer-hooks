import {useState, useEffect} from 'react'
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])
    const KEY = "AIzaSyBQqOIlx_FhAcR-R1G_VVIfYDdf-nUQQCs"

    useEffect(()=>{
        search(defaultSearchTerm)
    },[defaultSearchTerm])

    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 10,
                key: KEY,
            },
        })

        setVideos(response.data.items)
    }

    return [videos, search]
}

export default useVideos