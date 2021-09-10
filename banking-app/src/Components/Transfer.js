import React from 'react'
import hookUserDataFunctions from './Functions/hookUserData'
import transactions from './Functions/transaction'

export default function Transfer() {
     const { transfer } = transactions
     const { hookUserData, createFullName } = hookUserDataFunctions
     const [accountNum1, setAccountNum1] = React.useState('')
     const [accountNum2, setAccountNum2] = React.useState('')
     const [balance1, setBalance1] = React.useState(0)
     const [balance2, setBalance2] = React.useState(0)
     const [amount, setAmount] = React.useState(0)
     const [name1, setName1] = React.useState('')
     const [name2, setName2] = React.useState('')
     const [accountType1, setAccountType1] = React.useState('')
     const [accountType2, setAccountType2] = React.useState('')
     const transferbutton = (event) => {
          event.preventDefault()
          transfer(balance1, balance2, amount, accountNum1, accountNum2, setAmount, setAccountNum1, setAccountNum2)
     }

     React.useEffect(() => { hookUserData(accountNum1, setName1, createFullName, setAccountType1, setBalance1) }, [accountNum1, createFullName, hookUserData])
     React.useEffect(() => { hookUserData(accountNum2, setName2, createFullName, setAccountType2, setBalance2) }, [accountNum2, createFullName, hookUserData])
     return (
          <div>
               <form onSubmit={transferbutton}>
                    <label>
                         <label>Account Number</label>
                         <input type="text" value={accountNum1} onChange={e => setAccountNum1(e.target.value)} />
                         <br />
                         <input type="text" value={name1} onChange={e => setName1(e.target.value)} disabled />
                         <br />
                         <label>Account Type</label>
                         <input type="text" value={accountType1} onChange={e => setAccountType1(e.target.value)} disabled />
                         <br />
                         <label>Balance</label>
                         <input type="text" value={balance1} onChange={e => setBalance1(e.target.value)} disabled />
                         <br />
                         <label>Sending to:</label>
                         <input type="text" value={accountNum2} onChange={e => setAccountNum2(e.target.value)} />
                         <br />
                         <label>Account Name</label>
                         <input type="text" value={name2} onChange={e => setName2(e.target.value)} disabled />
                         <br />
                         <label>Account Type</label>
                         <input type="text" value={accountType2} onChange={e => setAccountType2(e.target.value)} disabled />
                         <br />
                         <label>Balance</label>
                         <input type="text" value={balance2} onChange={e => setBalance2(e.target.value)} disabled />
                         <br />
                         <label>Amount</label>
                         <input type="text" value={amount} onChange={e => setAmount(e.target.value)} />
                         <br />
                         <button onSubmit={transferbutton} type="submit">Withdraw</button>
                    </label>
               </form>
          </div>
     )
}
