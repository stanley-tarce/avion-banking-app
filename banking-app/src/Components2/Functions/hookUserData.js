const hookUserData = (accountnumber, setname, setfullname, setaccounttype, setbalance, settransactions) => {
     const USER_DATA = 'userData';
     const userlists = JSON.parse(localStorage.getItem(USER_DATA));
     if (userlists) {
          console.log('data present')
          for (let i = 0; i < userlists.length; i++) {
               if (userlists[i].accountID === accountnumber) {
                    console.log("match found")
                    setname(setfullname(userlists[i].firstname, userlists[i].middlename, userlists[i].lastname))
                    setaccounttype(userlists[i].accountype)
                    setbalance(userlists[i].initialbalance)
                    settransactions(userlists[i].transactions)
                    break;
               }

               else {
                    console.log('no data found for ' + accountnumber)
                    setname('')
                    setaccounttype('')
                    setbalance(0)
                    settransactions([])

               }
          }

     }
     else {
          console.log('no data')
     }
}
const createFullName = (firstName, middleName, lastName) => {
     return `${firstName} ${middleName} ${lastName}`
}

const hookUserDataFunctions = { hookUserData, createFullName }

export default hookUserDataFunctions;