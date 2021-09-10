import React from 'react'
import transactions from './Functions/transaction'
import hookUserDataFunctions from './Functions/hookUserData'


export default function Withdraw() {
   const { withdraw } = transactions
   const { hookUserData, createFullName } = hookUserDataFunctions
   const [amount, setAmount] = React.useState(0)
   const [balance, setBalance] = React.useState(0)
   const [accountNumber, setAccountNumber] = React.useState("")  //accountNumber === accountID
   const [accountName, setAccountName] = React.useState('')
   const [accountType, setAccountType] = React.useState('')
   const button = event => {
      event.preventDefault()
      //INSERT CODE HERE
      withdraw(balance, amount, accountNumber, setAccountNumber, setBalance)
   }
   React.useEffect(() => { hookUserData(accountNumber, setAccountName, createFullName, setAccountType, setBalance) }, [hookUserData, accountNumber, createFullName])
   return (
      <div>
         <form onSubmit={button} >
            <label>Account Number</label>
            <input type="text" value={accountNumber} onChange={e => setAccountNumber(e.target.value)} />
            <br />
            <label>Account Name</label>
            <input type="text" value={accountName} onChange={e => setAccountName(e.target.value)} disabled />
            <br />
            <label>Account Type</label>
            <input type="text" value={accountType} onChange={e => setAccountType(e.target.value)} disabled />
            <br />
            <label>Amount</label>
            <input type="text" value={amount} onChange={e => setAmount(e.target.value)} />
            <br />
            <label>Current Balance</label>
            <input type="text" value={balance} onChange={e => setBalance(e.target.value)} disabled />
            <br />
            <button onSubmit={withdraw} type="submit">Withdraw</button>
         </form>
      </div>
   )
}
