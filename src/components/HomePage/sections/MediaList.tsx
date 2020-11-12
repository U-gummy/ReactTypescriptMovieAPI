import React,{ memo } from 'react';
import { IMAGE_URL } from '../../../key'
interface movieProps {
    data : any,
}
 

const popView = (e:any) => {
    // var pop = e.target.parentNode;
   
    // pop.classList.add('hover');
}

const popHide = (e:any) => {
    // e.target.parentNode.classList.remove('hover');
}
const MovieListItem : React.FC<movieProps> = memo(props => {
    const { data } = props;

    return (    
        <div className='media-list-box'>
            <ul className='media-list' data-count={0}>
                {data && data.map(function(item:any, i:number){
                    return (
                        <li key={i}>
                            <div className='view-box' onMouseEnter={popView} onMouseLeave={popHide}>
                                <img src={IMAGE_URL+'w500'+item.poster_path} alt="포스터" className='image'/>
                            </div>
                        </li>
                    )
                })}
                
            </ul>
        </div>
    )
});

export default MovieListItem;

