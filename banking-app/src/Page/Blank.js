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
    }, [])
    return (<div></div>);
}

export default Blank;
