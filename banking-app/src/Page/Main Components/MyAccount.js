import Card from '@material-ui/core/Card';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { React, useContext } from 'react';
import { api } from '../../Utility/API';
import { CreateContext } from '../../Data'
import { createAccountID } from '../../Function'
import { useNavigate } from 'react-router-dom';


const MyAccount = (props) => {
    const navigate = useNavigate()
    const { setAccounts, setUser, setState, token, setDepositAccountNumber, setWithdrawAccountNumber, setTransferToSendAccountNumber, setTransferToReceiveAccountNumber } = useContext(CreateContext)
    const logOff = () => {
        let object = { headers: { Authorization: token } }
        api('devise#logout', object).then(response => {
            console.log(response)
            localStorage.removeItem('token')
            setAccounts([])
            setUser({})
            setState({
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
            setDepositAccountNumber('')
            setWithdrawAccountNumber('')
            setTransferToSendAccountNumber('')
            setTransferToReceiveAccountNumber('')
            return navigate('/')
        })
    }

    return (
        <Card
            style={{
                position: 'absolute',
                right: '48px',
                top: '20%',
                width: '135px',
                height: 'auto',
                zIndex: '10',
                border: '1px solid #C6C6C6',
                borderRadius: '5px',
                backgroundColor: 'rgba(104, 111, 128, .1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            {/* <div
                className='my-account'
                style={{ height: '45px', backgroundColor: 'rgb(235, 235, 235);' }}>
                <h5
                    style={{
                        fontWeight: '500',
                        fontSize: '14px',
                        marginTop: '12px',
                        cursor: 'pointer'
                    }}>My Account</h5>
            </div> */}
            <div
                className='log-out'
                style={{
                    borderTop: '1px solid #C6C6C6',
                }}>
                <h4
                    onClick={logOff}
                    style={{
                        width: '80%',
                        fontSize: '14px',
                        fontWeight: '400',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '50%',
                        transform: 'translateX(-50%)',
                        marginTop: '-0.2rem',
                        paddingTop: '0.8rem',
                        cursor: 'pointer'
                    }}>
                    <ExitToAppIcon
                        style={{
                            paddingRight: '4px',
                            width: '18px',
                            height: '18px',
                            marginTop: '2px',
                            cursor: 'pointer'
                        }} />
                    Log out
                </h4>
            </div>

        </Card>
    )
}

export default MyAccount
