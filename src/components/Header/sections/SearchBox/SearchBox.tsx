import React from 'react';

const SearchBox : React.FC = () => {
    
    const iptControlOn = (e : any) => {
        e.target.classList.remove("off");
    }
    
    const iptControlOff = (e : any) => {
        e.target.classList.add("off");
    }

    return (
        <div className="h-search-box">
            <input 
                type='text' 
                className='ipt-search off' 
                placeholder='제목, 사람, 장르' 
                onFocus={iptControlOn} 
                onBlur={iptControlOff}>
            </input>
        </div>
    )
}

export default SearchBox

