import React, { useState, createContext } from 'react'
import { createAccountID } from './Function/AccountIDGenerator'
export const CreateContext = createContext()

export default function Data({ children }) {
    const [state, setState] = useState({
        account_number: createAccountID(),
        last_name: '',
        first_name: '',
        middle_name: '',
        contact_number: '',
        email: '',
        gender: '',
        home_address: '',
        zip_code: '',
        city: '',
        birth_date: '',
        account_type: '',
        balance: 0
    })
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : null)
    const [accounts, setAccounts] = useState([])
    const [depositAccountNumber, setDepositAccountNumber] = useState('')
    const [withdrawAccountNumber, setWithdrawAccountNumber] = useState('')
    const [transferToSendAccountNumber, setTransferToSendAccountNumber] = useState('')
    const [transferToReceiveAccountNumber, setTransferToReceiveAccountNumber] = useState('')
    const [user, setUser] = useState({})
    let context =
    {
        user,
        setUser,
        state,
        setState,
        depositAccountNumber,
        setDepositAccountNumber,
        withdrawAccountNumber,
        setWithdrawAccountNumber,
        transferToSendAccountNumber,
        setTransferToSendAccountNumber,
        transferToReceiveAccountNumber,
        setTransferToReceiveAccountNumber,
        accounts,
        setAccounts, token,
        setToken
    }
    return (
        <CreateContext.Provider value={context}>
            {children}
        </CreateContext.Provider>
    )
}