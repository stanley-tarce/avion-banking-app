import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Blank() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.token !== null) {
            navigate('/main')
        }
        else {
            navigate('/signin')
        }
    }, [])
    return (<div></div>);
}

export default Blank;
