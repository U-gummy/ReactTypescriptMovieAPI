import React,{ useEffect, useState , memo} from 'react';
import MediaList from './MediaList'
interface listProps {
    movieData : Array<string>,
    allMedia : Array<string>,
}

const onClickScrollEv = (e:any) => {
    const list = e.target.parentNode.getElementsByClassName('media-list')[0];
    const ItemLength = list.getElementsByTagName('li').length;
    const max = (ItemLength / 5) - 1;
    const moveWidth = list.clientWidth;
    if(e.target.className == 'btn-prev' && list.dataset.count != 0) {
        list.dataset.count =  Number(list.dataset.count) - 1
        list.setAttribute('style',`left:-${moveWidth * list.dataset.count}px`);
    } else if (e.target.className == 'btn-next' && list.dataset.count < max){
        list.dataset.count = Number(list.dataset.count) + 1
        list.setAttribute('style',`left:-${moveWidth * list.dataset.count}px`);
    }
}


const MediaListBox : React.FC<listProps> = props => {
    const { movieData,allMedia } = props;
    const division = [
        {name : '인기콘텐츠', data : allMedia},
        {name : 'TV프로그램', data : movieData},
        {name : '미국영화', data : movieData},
        {name : '한국영화', data : movieData},
        {name : '인기콘텐츠', data : movieData},
        {name : '애니매이션', data : movieData},
    ]
    
    
    return (
        <div className='media-list-wrapper'>
            {
                division.map(function(item,idx){
                    return (
                        <div className='media-list-wrap' key={idx}>
                            <h3 className='tit'>{item.name}</h3>
                            <button type='button' className='btn-prev' onClick={onClickScrollEv}>이전</button>
                            <MediaList data={item.data}/>
                            <button type='button' className='btn-next' onClick={onClickScrollEv}>다음</button>
                        </div>
                    )
                })
            }        
        </div>
    )
};

export default MediaListBox;

