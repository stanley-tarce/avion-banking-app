import React, { useState } from 'react'
import './App.css';

import Main from './components/Main';
import Login from './components/Login';

import userEvent from '@testing-library/user-event';





function App() {

  const [loginDisplay, setloginDisplay] = useState(true)
  const [mainDisplay, setMainDisplay] = useState(false)

  return (
    <div className="App">
      {mainDisplay ? <Main showLogin={setloginDisplay} showMain={setMainDisplay} /> : null}
      {loginDisplay ? <Login showLogin={setloginDisplay} showMain={setMainDisplay} /> : null}
    </div>
  );
}

export default App;
