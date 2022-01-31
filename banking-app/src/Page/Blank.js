import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Blank() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/signin')
    }, [])
    return (<div></div>);
}

export default Blank;
