import React, { useState, createContext } from 'react'
import { createAccountID } from './Function/AccountIDGenerator'
export const CreateContext = createContext()

export default function Data({ children }) {
    const [state, setState] = useState({
        accountID: createAccountID(),
        lastname: '',
        firstname: '',
        middlename: '',
        contactnumber: '',
        email: '',
        gender: '',
        homeaddress: '',
        zipcode: '',
        city: '',
        dateofbirth: '',
        accountype: '',
        initialbalance: 0
    })
    const [depositAccountNumber, setDepositAccountNumber] = useState('')
    const [withdrawAccountNumber, setWithdrawAccountNumber] = useState('')
    const [transferToSendAccountNumber, setTransferToSendAccountNumber] = useState('')
    const [transferToReceiveAccountNumber, setTransferToReceiveAccountNumber] = useState('')
    let context =
    {
        state,
        setState,
        depositAccountNumber,
        setDepositAccountNumber,
        withdrawAccountNumber,
        setWithdrawAccountNumber,
        transferToSendAccountNumber,
        setTransferToSendAccountNumber,
        transferToReceiveAccountNumber,
        setTransferToReceiveAccountNumber
    }
    return (
        <CreateContext.Provider value={context}>
            {children}
        </CreateContext.Provider>
    )
}