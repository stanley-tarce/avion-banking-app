import React, { useState, useContext, useEffect } from 'react';
import Header from "./Main Components/Header"
import SideBar from "./Main Components/SideBar";
import UserList from "./Main Components/UserList";
import MyAccount from './Main Components/MyAccount';
import { CreateContext } from '../Data';
import { Outlet } from 'react-router-dom'
import { api } from '../Utility/API';


// import Deposit from '../Components2/Deposit';
// import Withdraw from '../Components2/Withdraw';
// import Transfer from '../Components2/Transfer';
// import Registerv2 from '../Components2/Registerv2';


const Main = (props) => {
    const { state, setState, accounts, setAccounts } = useContext(CreateContext)
    console.log(state)
    /***** Declaring states for all dashboard options *****/
    const [userList, setUserList] = useState(true);
    const [createUser, setCreateUser] = useState(false);
    const [deposit, setDeposit] = useState(false);
    const [withdraw, setWithdraw] = useState(false);
    const [transfer, setTransfer] = useState(false);
    const [logOut, setLogOut] = useState(false);
    useEffect(() => {
        let obj = { headers: { Authorization: localStorage.getItem('token') } }
        api('accounts#index', obj).then(response => {
            setAccounts(response.data)
        }).catch(e => console.log(e))
    }, [])
    return (
        <div>
            <SideBar
                setUserList={setUserList}
                setCreateUser={setCreateUser}
                setDeposit={setDeposit}
                setWithdraw={setWithdraw}
                setTransfer={setTransfer} />
            <Header setLogOut={setLogOut} />
            <Outlet />
        </div>
    )
}

export default Main
