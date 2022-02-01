export const createFullName = (firstName, middleName, lastName) => {
    return `${firstName} ${middleName} ${lastName}`
}

export const fetchInfo = (data, accountNumber) => { //Better to use this 
    let filteredData = data.find((item) => item.account_number === accountNumber)

    return filteredData ? { accountName: createFullName(filteredData.last_name, filteredData.first_name, filteredData.middle_name), accountType: filteredData.account_type, balance: filteredData.balance, transactions: filteredData.transactions } : { accountName: '', accountType: '', balance: 0, transactions: [] }
}