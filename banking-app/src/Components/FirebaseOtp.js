import React, { useState } from 'react'


const FirebaseOtp = (props) => {
    const otpCodes = [
        '6Y70nw',
        'pI4vW8',
        '2qZB7n'
    ]

    const [otpError, setOtpError] = useState(false);
    const [otpValue, setOtpValue] = useState('');

    const otpCancelButton = (e) => {
        e.preventDefault();
        //props of otp modal set to unshow
        setOtpError(false)
        props.setOtpDisplay(false)
    }

    const checkOtp = (e) => {
        e.preventDefault();
        if (otpCodes.includes(otpValue)) {
            //props of otp modal set to unshow
            props.setOtpDisplay(false)
            props.setOtpValidation(true)
            console.log(otpValue)
        } else {
            setOtpError(true)
        }
    }

    const handleInputChange = (e) => {
        setOtpValue(e.target.value)

    }
    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                backgroundColor: 'rgba(0,0,0,0.75)',
                zIndex: '2',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                top: '0',
                left: '0'
            }}>
            <div
                style={{
                    backgroundColor: 'whitesmoke',
                    width: 'auto',
                    height: 'auto',
                    padding: '20px',
                    borderRadius: '12px',
                    marginBottom: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <form>
                    <h3
                        style={{
                            color: 'black',
                            fontWeight: '400',
                            padding: '0 1.2rem',
                            margin: '2.1em 0 0 0'
                        }}
                    >Enter your one-time password (otp)</h3>
                    <h5
                        style={{
                            fontWeight: '400',
                            margin: '0',
                            paddingBottom: '2.2em'
                        }}>otp sent to phone number ending in 2656</h5>
                    <input
                        onChange={handleInputChange}
                        style={{ height: '24px' }}
                        type="text"
                        autoFocus />
                    <button
                        onClick={checkOtp}
                        style={{
                            height: '29px',
                            width: '60px',
                            border: '1px solid black',
                            background: 'none',
                            marginLeft: '1rem',
                            cursor: 'pointer'
                        }}
                    >verify</button>
                    <button
                        onClick={otpCancelButton}
                        style={{
                            height: '29px',
                            width: '60px',
                            border: '1px solid black',
                            borderLeft: 'none',
                            background: 'none',
                            cursor: 'pointer'
                        }}
                    >cancel</button>

                    {otpError ? <h5
                        className='otp-error-active'
                        style={{
                            color: 'red',
                            fontWeight: '400'
                        }}>**one-time password is incorrect</h5>
                        : null}

                </form>
            </div>

        </div>
    )
}

export default FirebaseOtp
