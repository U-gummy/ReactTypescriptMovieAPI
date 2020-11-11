import React from 'react';
import { Link } from "react-router-dom";
import { IMAGE_URL } from '../../../../key'
const LogoBox : React.FC = () => {
    return (
        <Link to='/' className='h-logo-box'>
            <img src={IMAGE_URL+"original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"} alt="로고" className='image'/>
        </Link>
    )
}

export default LogoBox

