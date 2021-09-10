const transaction = (amount, newbalance, account, type) => {
     const date = new Date();
     const year = date.getFullYear();
     const month = date.getMonth() + 1;
     const day = date.getDate();
     const timeStamp = `${year}-${month}-${day}`;
     let receipt = {
          amount: amount,
          balance: newbalance,
          date: timeStamp,
          type: 'deposit'
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
}



const deposit = (balance, amount, accountnumber, setaccountnumber, setbalance) => {
     /*
          const [amount, setAmount] = React.useState(0)
          const [balance, setBalance] = React.useState(0)
          const [accountNumber, setAccountNumber] = React.useState(0)  //accountNumber === accountID
          const [accountName, setAccountName] = React.useState('')
          const [accountType, setAccountType] = React.useState('')
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
               transaction(parseInt(amount), totalbalance, container[i], 'deposit')
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
               transaction(parseInt(amount), totalbalance, container[i], 'withdraw')
          }
     }

     localStorage.setItem('userData', JSON.stringify(container))
     setaccountnumber('')
     setbalance(0)
}

const transfer =  (balance1,balance2,amount,accountnumber1,accountnumber2,setamount,setaccountnumber1,setaccountnumber2) => {
     /*

     */

     //INSERT CODE HERE
     let account1newbalance = balance1 - amount
     let account2newbalance = balance2 + amount
     let container = []
     let userData = JSON.parse(localStorage.getItem('userData'))
     for (let i = 0; i < userData.length; i++) {
          container.push(userData[i])
     }
     for (let i = 0; i < container.length; i++) {
          if (container[i].accountID === accountnumber1 || container[i].accountNumber === accountnumber2) {
               if (container[i].accountID === accountnumber1) {
                    container[i].initialbalance = account1newbalance
                    console.log('New Balance for ' + account1newbalance)
                    transaction(parseInt(amount), account1newbalance, container[i], 'transfer')
               }
               if (container[i].accountID === accountnumber2) {
                    container[i].initialbalance = account2newbalance
               }
          }
     }
     localStorage.setItem('userData', JSON.stringify(container))
     setamount(0)
     setaccountnumber1('')
     setaccountnumber2('')

}

const transactions = { deposit, withdraw, transfer }
export default transactions;