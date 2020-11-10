import React,{ useEffect, useState } from 'react';
import Axios from "axios";
import { URL, API_KEY, IMAGE_URL } from '../../key'
import MovieListItem from './MovieList'

const LandingPage : React.FC = () => {
    
    const [MovieList, setMovieList] = useState<Array<string>>([]);
    useEffect(() => {
        Axios.get(`${URL}movie/popular/?api_key=${API_KEY}`)
        .then(function(response) {
          setMovieList(response.data.results)
        })
    }, [])

    return (
        <React.Fragment>
            <div className='movie-list'>
                {MovieList && MovieList.map(function(item:any, i:number){
                    return (
                        <MovieListItem key={i} data={item} idx={i}/>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default LandingPage

