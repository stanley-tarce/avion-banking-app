const validate = (balance, amount, setError) => {
  let temp = {amount: 1}
  if (amount > balance) {
    temp.amount = 'Insufficient Balance'
  }
  if (amount < 0) {
    temp.amount = 'Invalid Amount'
  }
  if(/^[a-zA-z]+$/.test(amount)){
    temp.amount = 'Invalid Amount'
  }
  setError(temp)
  return Object.values(temp) === 1
}
export default validate