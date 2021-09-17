import React, { useState } from 'react'
import './App.css';
import ModalErrorHandling from './Components/ModalErrorHandling';
import Main from './Components/Main';
import Login from './Components/Login'
import Deposit from './Components/Deposit';
import userEvent from '@testing-library/user-event';
import Transfer from './Components/Transfer';
import Registerv2 from './Components/Registerv2';






function App() {

  const [loginDisplay, setloginDisplay] = useState(true)
  const [mainDisplay, setMainDisplay] = useState(false)

  return (
    <div className="App">
      {/* {mainDisplay ? <Main showLogin={setloginDisplay} showMain={setMainDisplay} /> : null}
      <Main showLogin={setloginDisplay} showMain={setMainDisplay} />
      {loginDisplay ? <Login showLogin={setloginDisplay} showMain={setMainDisplay} /> : null} */}
     <Deposit/>
     {/* <Transfer/> */}
     {/* <Registerv2/> */}
    </div>
  );
}

export default App;
