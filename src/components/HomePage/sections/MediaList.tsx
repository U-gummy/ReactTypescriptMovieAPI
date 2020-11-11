import React,{ useEffect, useState , memo} from 'react';
import { IMAGE_URL } from '../../../key'
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

interface movieProps {
    data : any,
}

const MovieListItem : React.FC<movieProps> = memo(props => {
    const { data } = props;
    return (
        // { movieData&& movieData.map(function(item:any, i:number){
        //     return (
        //         <MediaList key={i} data={item} idx={i}/>
        //     )
        // })}
        <ul className='media-list'>
            {data && data.map(function(item:any, i:number){
                 return (
                    <li key={i}>
                        <img src={IMAGE_URL+'w500'+item.poster_path} alt="포스터" className='image'/>
                    </li>
                 )
            })}
            
        </ul>





        // <Link to={`/detail/${data.id}`}>
        //     <div className='movie-item' key={idx}>
        //         <div className='image-box'>
        //             {idx < 10 ? <span className='number'>{idx+1}</span> : null}
                    
        //             <img src={IMAGE_URL+data.poster_path} alt="포스터"/>
        //         </div>
        //         <div className='movie-info'>
        //             <strong className='tit'>{data.original_title}</strong>
        //             <p className="desc">{data.overview}</p>
        //         </div>
        //     </div>
        // </Link>
    )
});

export default MovieListItem;

