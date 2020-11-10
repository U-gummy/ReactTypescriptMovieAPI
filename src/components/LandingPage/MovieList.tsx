import React,{ useEffect, useState } from 'react';
import { IMAGE_URL } from '../../key'
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

interface movieProps {
    data : any,
    idx : number,
}


const MovieListItem : React.FC<movieProps> = props => {
    // console.log('match',match, location, history);
    // const onClickEv = (e: any) => {
        //     console.log(history);
        //     // history.push(`/detail/${e.target.parentNod e.dataset.id}`)
        //     // window.location.reload()
    // }
    
    const { data, idx } = props;
    return (
        <Link to={`/detail/${data.id}`}>
            <div className='movie-item' key={idx}>
                <div className='image-box'>
                    <span className='number'>{idx+1}</span>
                    <img src={IMAGE_URL+data.poster_path} alt="포스터"/>
                </div>
                <div className='movie-info'>
                    <strong className='tit'>{data.original_title}</strong>
                    <p className="desc">{data.overview}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieListItem;

