import emailFormat from "./emailjs";
import hookUserDataFunctions from './hookUserData'

const { createFullName } = hookUserDataFunctions



const transaction = (amount, newbalance, account, type) => {
     const date = new Date();
     const year = date.getFullYear();
     const month = date.getMonth() + 1;
     const day = date.getDate();
     const timeStamp = `${year}-${month}-${day}`;
     const transactionID = Math.floor(Math.random() * 1000000)

     let receipt = {
          amount: amount,
          balance: newbalance,
          date: timeStamp,
          transactionID: transactionID,
          type: ''
     }
     switch (type) {
          case 'deposit':
               receipt = { ...receipt, type: 'deposit' }
               account.transactions.push(receipt)
               break;
          case 'withdraw':
               receipt = { ...receipt, type: 'withdraw' }
               account.transactions.push(receipt)
               break;
          case 'transfer':
               receipt = { ...receipt, type: 'transfer', }
               account.transactions.push(receipt)
               break;
          default:
               break;
     }
     return receipt //returns the receipt
}



const deposit = (balance, amount, accountnumber, setaccountnumber, setbalance) => {
     /*
          const [amount, setAmount] = React.useState(0)
          const [balance, setBalance] = React.useState(0)
          const [accountNumber, setAccountNumber] = React.useState(0)  //accountNumber === accountID
          const [accountName, setAccountName] = React.useState('')
          const [accountType, setAccountType] = React.useState('')
          (accountname, accountemail,transactionid, accountnumber, balance, amount, transactiontype,timestamp
     */
     //INSERT CODE HERE
     let totalbalance = parseInt(balance) + parseInt(amount)
     let container = []
     let userData = JSON.parse(localStorage.getItem('userData'))
     for (let i = 0; i < userData.length; i++) {
          container.push(userData[i])
     }
     for (let i = 0; i < container.length; i++) {
          if (container[i].accountID === accountnumber) {
               container[i].initialbalance = totalbalance
               console.log('new balance is ' + totalbalance)
               const { transactionID, date, type, balance } = transaction(parseInt(amount), totalbalance, container[i], 'deposit')
               emailFormat(createFullName(container[i].firstname, container[i].middlename, container[i].lastname), container[i].email, transactionID, container[i].accountID, balance, amount, type, date)


          }
     }

     localStorage.setItem('userData', JSON.stringify(container))
     setaccountnumber('')
     setbalance(0)
}
const withdraw = (balance, amount, accountnumber, setaccountnumber, setbalance) => {
     /*
          const [amount, setAmount] = React.useState(0)
          const [balance, setBalance] = React.useState(0)
          const [accountNumber, setAccountNumber] = React.useState(0)  //accountNumber === accountID
          const [accountName, setAccountName] = React.useState('')
          const [accountType, setAccountType] = React.useState('')
     */
     //INSERT CODE HERE
     let totalbalance = parseInt(balance) - parseInt(amount)
     let container = []
     let userData = JSON.parse(localStorage.getItem('userData'))
     for (let i = 0; i < userData.length; i++) {
          container.push(userData[i])
     }
     for (let i = 0; i < container.length; i++) {
          if (container[i].accountID === accountnumber) {
               container[i].initialbalance = totalbalance
               console.log('new balance is ' + totalbalance)
               const {transactionID,date,type,balance} = transaction(parseInt(amount), totalbalance, container[i], 'deposit')
               emailFormat(createFullName(container[i].firstname, container[i].middlename, container[i].lastname), container[i].email, transactionID, container[i].accountID, balance, amount, type, date)
          }
     }

     localStorage.setItem('userData', JSON.stringify(container))
     setaccountnumber('')
     setbalance(0)
}

const transfer = (balance1, balance2, amount, accountnumber1, accountnumber2, setamount, setaccountnumber1, setaccountnumber2) => {
     /*
     const [accountNum1, setAccountNum1] = React.useState('')
     const [accountNum2, setAccountNum2] = React.useState('')
     const [balance1, setBalance1] = React.useState(0)
     const [balance2, setBalance2] = React.useState(0)
     const [amount, setAmount] = React.useState(0)
     const [name1, setName1] = React.useState('')
     const [name2, setName2] = React.useState('')
     const [accountType1, setAccountType1] = React.useState('')
     const [accountType2, setAccountType2] = React.useState('')
     */

     //INSERT CODE HERE
     let account1newbalance = parseInt(balance1 - amount)
     let account2newbalance = parseInt(balance2 + amount)
     let container = []
     let userData = JSON.parse(localStorage.getItem('userData'))
     for (let i = 0; i < userData.length; i++) {
          container.push(userData[i])
     }
     for (let i = 0; i < container.length; i++) {
          if (container[i].accountID === accountnumber1) {
               container[i].initialbalance = account1newbalance
               console.log('New Balance for ' + account1newbalance)
               const { transactionID, date, type, balance } = transaction(parseInt(amount), account1newbalance, container[i], 'transfer')
               emailFormat(createFullName(container[i].firstname, container[i].middlename, container[i].lastname), container[i].email, transactionID, container[i].accountID, balance, amount, type, date)
          }
          else if (container[i].accountID === accountnumber2) {
               console.log('Account #2 balance changed')
               container[i].initialbalance = account2newbalance
          }
     }

     localStorage.setItem('userData', JSON.stringify(container))
     setamount(0)
     setaccountnumber1('')
     setaccountnumber2('')

}

const transactions = { deposit, withdraw, transfer }
export default transactions;