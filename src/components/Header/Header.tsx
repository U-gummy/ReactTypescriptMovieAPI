import React from 'react';
import Navi from "./sections/Navi/Navi"
import LogoBox from "./sections/LogoBox/LogoBox"
import SearchBox from "./sections/SearchBox/SearchBox"

window.addEventListener('scroll', function(e) {
    const header = document.getElementsByClassName('header')[0];
    if(window.scrollY != 0) {
        header.classList.remove("top");
    } else {
        header.classList.add("top");
    }
});

const Header : React.FC = () => {
    return (
        <header className='header top'>
            <div className='box'>
                <LogoBox />
                <Navi />
            </div>
            <div className='box'>
                <SearchBox />
            </div>
        </header>
    )
}

export default Header

