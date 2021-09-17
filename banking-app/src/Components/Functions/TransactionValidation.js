const validate = (accountID, balance, amount, setError) => {
  let temp = {
    accountID: "",
    amount: ""
  }
  if ((accountID.length < 13 ) || (/^[a-zA-z]+$/.test(accountID))){
    if (accountID.length < 13){
      temp.accountID = "Please type a valid number"
    }
    if (/^[a-zA-z]+$/.test(accountID)){
      temp.accountID = "Please type a valid number"
    }

  }
  if (amount > balance) {
    temp.amount = 'Insufficient Balance'
  }
  if (amount <= 0) {
    temp.amount = 'Invalid Amount'
  }
  if (/^[a-zA-z]+$/.test(amount)) {
    temp.amount = 'Invalid Amount'
  }
  setError(temp)
  return Object.values(temp).every(x => x === '')
}
export default validate