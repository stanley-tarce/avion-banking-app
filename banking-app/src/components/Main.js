import React, { useState } from 'react';
import Header from "./Header";
import SideBar from "./SideBar";
import UserList from "./UserList";
import MyAccount from './MyAccount';


const Main = (props) => {

    const [logOut, setLogOut] = useState(false);

    return (
        <div>
            {logOut ? props.showMain(false) : null}
            {logOut ? props.showLogin(true) : null}
            <Header setLogOut={setLogOut} />
            <SideBar />
            <UserList />
            
        </div>
    )
}

export default Main
