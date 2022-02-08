import React, { useContext, useEffect } from 'react';
import Header from "./Main Components/Header"
import SideBar from "./Main Components/SideBar";
import { CreateContext } from '../Data';
import { Outlet } from 'react-router-dom'
import { api } from '../Utility/API';
import { useNavigate } from 'react-router-dom'




const Main = () => {
    const navigate = useNavigate()
    const { setAccounts, token } = useContext(CreateContext)
    useEffect(() => {
        let obj = { headers: { Authorization: token } }
        api('accounts#index', obj).then(response => {
            setAccounts(response.data)
        }).catch(e => {
            if (e.response.status.toString() === '401')
                return navigate('/signin')
        })
    }, [setAccounts, token])
    return (
        <div>
            <SideBar />
            <Header />
            <Outlet />
        </div>
    )
}

export default Main
