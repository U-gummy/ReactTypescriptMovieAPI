import React,{ useEffect, useState } from 'react';
import Axios from "axios";
import { URL, API_KEY, IMAGE_URL } from '../../key'

import MainVisual from './sections/MainVisual'
import MediaListBox from './sections/MediaListBox'

const HomePage : React.FC = () => {
    const [AllMedia, setAllMedia] = useState<Array<string>>([]);
    const [MovieList, setMovieList] = useState<Array<string>>([]);
    
    useEffect(() => {
        const movie_popular = `${URL}movie/popular/?api_key=${API_KEY}&language=ko-KR`
        const media_all = `${URL}trending/all/week?api_key=${API_KEY}&language=ko-KR`
        Axios.get(media_all).then(function(response) {
            setAllMedia(response.data.results)
        })
        Axios.get(movie_popular).then(function(response) {
            setMovieList(response.data.results);
        })
    }, [])

    return (
        <React.Fragment>
            <MainVisual visualData={AllMedia}/>
            <MediaListBox allMedia={AllMedia} movieData={MovieList} />
        </React.Fragment>
    )
}

export default HomePage

