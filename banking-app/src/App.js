import React from 'react'
import './App.css';
import Data from './Data'
import Login from './Page/Login';
import { useRoutes } from 'react-router-dom'
import Blank from './Page/Blank';
import Main from './Page/Main';
import { UserList, Modal, Transfer, Withdraw, Deposit, Registerv3 } from './Page/Main Components'
import './assets/toast.css'


function App() {

  const routes = useRoutes([
    { path: '/', element: <Blank /> },
    { path: '/signin', element: <Login /> },
    {
      path: '/main', element: <Main />, children: [
        { path: '', element: <UserList /> },
        { path: 'info', element: <Modal /> },
        { path: 'create', element: <Registerv3 /> },
        { path: 'transfer', element: <Transfer /> },
        { path: 'withdraw', element: <Withdraw /> },
        { path: 'deposit', element: <Deposit /> }
      ]
    }

  ])
  return (
    <div>
      <Data>
        {routes}
      </Data>

    </div>
  );
}

export default App;
