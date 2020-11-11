import React,{ useEffect, useState } from 'react';
import Axios from "axios";
import { URL, API_KEY, IMAGE_URL } from '../../key'
import { RouteComponentProps, withRouter } from 'react-router-dom'


interface routerProps {
    movId: any
}

const MovieDetail : React.FC<RouteComponentProps<routerProps>> = ({ match }) => {
    const [MovieDetaliInfo, setMovieDetaliInfo] = useState<any>({})
    
    useEffect(() => {
        Axios.get(`${URL}movie/${match.params.movId}?api_key=${API_KEY}`)
        .then(function(response){
            setMovieDetaliInfo(response.data)
        })
    }, []);
    
    console.log('MovieDetaliInfo: ', MovieDetaliInfo);
  
    return (
        <React.Fragment>
            <img src={IMAGE_URL+MovieDetaliInfo.backdrop_path} alt="" className='image'/>
            <h2>{MovieDetaliInfo.original_title}</h2>
            <p>{MovieDetaliInfo.overview}</p>
            <p>{MovieDetaliInfo.vote_average}</p>
            <p>{MovieDetaliInfo.release_date}</p>
        </React.Fragment>
    )
}

export default withRouter(MovieDetail);

