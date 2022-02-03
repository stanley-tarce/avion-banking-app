import React, { useContext, useEffect } from 'react';
import Header from "./Main Components/Header"
import SideBar from "./Main Components/SideBar";
import { CreateContext } from '../Data';
import { Outlet } from 'react-router-dom'
import { api } from '../Utility/API';




const Main = () => {

    const { setAccounts, token } = useContext(CreateContext)
    useEffect(() => {
        let obj = { headers: { Authorization: token } }
        api('accounts#index', obj).then(response => {
            setAccounts(response.data)
        }).catch(e => console.log(e))
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
