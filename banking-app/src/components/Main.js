import React, { useState } from 'react';
import Header from "./Header";
import SideBar from "./SideBar";
import UserList from "./UserList";
import MyAccount from './MyAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Transfer from './Transfer';
import Registerv2 from './Registerv2';


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
