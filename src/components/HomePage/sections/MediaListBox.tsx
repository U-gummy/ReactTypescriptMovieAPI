import React,{ useEffect, useState , memo} from 'react';
import MediaList from './MediaList'
interface listProps {
    movieData : any
}

const MediaListBox : React.FC<listProps> = props => {
   const { movieData } = props;
    return (
        <div className='media-list-box'>
            <h3 className='tit'>주제</h3>
            MediaListBox
            <MediaList data={movieData}/>
        </div>
    )
};

export default MediaListBox;

