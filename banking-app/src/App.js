import './App.css';
import Register from './Components/Register';
import GoogleSignUp from './Components/GoogleSignUp';
import Registerv2 from './Components/Registerv2';
import Withdraw from './Components/Withdraw';
import Deposit from './Components/Deposit';
import Transfer from './Components/Transfer';
import TransactionList from './Components/TransactionList';
import userEvent from '@testing-library/user-event';




function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <GoogleSignUp /> */}
      <Registerv2 />
      {/* <Deposit />  */}
      {/* <Withdraw /> */}
      {/* <Transfer /> */}
      {/* <TransactionList/> */}
    </div>
  );
}

export default App;
