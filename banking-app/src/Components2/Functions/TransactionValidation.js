const validate = (balance, amount,accountNumber, setError) => {
  let temp = {amount: '',
accountNumber: '',}
  if (amount > balance) {
    temp.amount = 'Insufficient Balance'
  }
  if (amount <= 0) {
    temp.amount = 'Invalid Amount'
  }
  if(/^[a-zA-z]+$/.test(amount)){
    temp.amount = 'Invalid Amount'
  }
  if (!accountNumber) {
    temp.accountNumber = 'Invalid Account Number'
  }
  if(!amount){
    temp.amount = 'Invalid Amount'
  }
  

  if (accountNumber.length !== 13) {
    temp.accountNumber = 'Invalid Account Number'

  }
  if (/^[a-zA-Z]+$/.test(accountNumber)) {
    temp.accountNumber = 'Invalid Account Number'
  }
  setError(temp)
  return Object.values(temp).every(x => x === '')
}

const customValidateForTransfer = (balance, amount, accountNumber,accountNumber2, setError) => {
  let temp = {amount: '',
  accountNumber: '',
accountNumber2:''}
    if (amount > balance) {
      temp.amount = 'Insufficient Balance'
    }
    if (amount <= 0) {
      temp.amount = 'Invalid Amount'
    }
    if(/^[a-zA-z]+$/.test(amount)){
      temp.amount = 'Invalid Amount'
    }
  
    if (accountNumber.length !== 13) {
      temp.accountNumber = 'Invalid Account Number'
  
    }
    if (/^[a-zA-Z]+$/.test(accountNumber)) {
      temp.accountNumber = 'Invalid Account Number'
    }
    if (accountNumber2.length !== 13) {
      temp.accountNumber2 = 'Invalid Account Number'
  
    }
    if (/^[a-zA-Z]+$/.test(accountNumber2)) {
      temp.accountNumber2 = 'Invalid Account Number'
    }
    setError(temp)
    return Object.values(temp).every(x => x === '')
  }

  const TransactionValidation = {validate, customValidateForTransfer}
export default TransactionValidation