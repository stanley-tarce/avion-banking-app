export function createAccountID() {
    let date = new Date();
    let day = date.getDate().toString();
    let fullyear = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    const accountNumber = () => {
        let randomAccountNumber = Math.floor(Math.random() * 1000000).toString();
        if (randomAccountNumber.length < 6) {
            randomAccountNumber = "0" + randomAccountNumber;
        }
        return randomAccountNumber;

    }

    let accountID = fullyear + month + day + accountNumber();
    return accountID;

}