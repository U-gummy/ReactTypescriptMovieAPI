import React from 'react';
import { IMAGE_URL } from '../../../key'

interface visualProps {
    visualData : any
}
const randomNum = Math.floor(Math.random() * 10);

const MainVisual : React.FC<visualProps> = props => {
    const { visualData } = props
    const Visual = visualData[randomNum];
    return (
        <>
            {Visual && (
                <div className='visual-content'>
                    <div className='gradient top'></div>
                    <div className='v-txt-box'>
                        <span className='meida'>{Visual.media_type}</span>
                        <h2 className='tit'>
                            {
                                Visual.media_type == 'tv' ? 
                                Visual.name
                                :Visual.title
                            }
                        </h2>
                        <strong className='ranking-info'>
                            <span className='badge'>TOP 10</span>
                            <span className='ranking-txt'>오늘 한국에서 콘텐츠 순위 {randomNum + 1}위</span>
                        </strong>
                        <p className='desc'>{Visual.overview}</p>
                        <button type='button' className='btn-detali'>상세정보</button>
                    </div>
                    <img src={IMAGE_URL+'w1280'+Visual.backdrop_path} alt="" className='image'/>
                    <div className='gradient'></div>
                </div>
                )
            }
        </>
    )
};

export default MainVisual;

