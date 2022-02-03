import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Blank() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/main')
        }
        else {
            navigate('/signin')
        }
        // eslint-disable-next-line
    }, [])
    return (<div></div>);
}

export default Blank;
