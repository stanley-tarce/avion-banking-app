import React, { useState } from 'react';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import UserList from "./components/UserList";
import MyAccount from './components/MyAccount';
import Deposit from './Components/Deposit';
import Withdraw from './Components/Withdraw';
import Transfer from './Components/Transfer';
import Registerv2 from './Components/Registerv2';


const Main = (props) => {

    /***** Declaring states for all dashboard options *****/
    const [userList, setUserList] = useState(true);
    const [createUser, setCreateUser] = useState(false);
    const [deposit, setDeposit] = useState(false);
    const [withdraw, setWithdraw] = useState(false);
    const [transfer, setTransfer] = useState(false);


    /***** Declaring state to handle logout *****/
    const [logOut, setLogOut] = useState(false);


    return (
        <div>
            <SideBar
                setUserList={setUserList}
                setCreateUser={setCreateUser}
                setDeposit={setDeposit}
                setWithdraw={setWithdraw}
                setTransfer={setTransfer} />


            {logOut ? props.showMain(false) : null}
            {logOut ? props.showLogin(true) : null}
            <Header setLogOut={setLogOut} />


            {userList ? <UserList /> : null}
            {createUser ? <Registerv2 /> : null}
            {deposit ? <Deposit /> : null}
            {withdraw ? <Withdraw /> : null}
            {transfer ? <Transfer /> : null}



        </div>
    )
}

export default Main
