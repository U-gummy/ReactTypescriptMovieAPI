import React from 'react';
import { Link } from "react-router-dom";

const Navi : React.FC = () => {
    return (
        <nav className='navi'>
            <ul className='navi-list'>
                <li>
                    <Link to='/' className='active'>홈</Link>
                </li>
                <li>
                    <Link to='/'>TV프로그램</Link>
                </li>
                <li>
                    <Link to='/'>영화</Link>
                </li>
                <li>
                    <Link to='/'>NEW! 요즘 대세 콘텐츠</Link>
                </li>
                <li>
                    <Link to='/'>내가 찜한 콘텐츠</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navi

