import React from 'react'
import { onSignInSubmit } from './SendCode'




const FirebaseOtp = () => {

    
    
    // const phoneNumber = '+639457712656'
    // const appVerifier = window.recaptchaVerifier;

    

    // const submitOtp = () => {
    //     const code = '123456';
    //     confirmationResult.confirm(code).then((result) => {
    //     // User signed in successfully.
    //     const user = result.user;
    //     // ...
    //     }).catch((error) => {
    //     // User couldn't sign in (bad verification code?)
    //     console.log(error)
    //     });
    // }

    
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
          width: '20vw',
          height: '20vh',
          borderRadius: '12px'
      }}>
      <form>
          <div></div>
          <button
          onSubmit={onSignInSubmit}
          id='sign-in-button'
          >send OTP</button>
          <h3
          style={{
              color: 'black',
              fontWeight: '400',
              padding: '0 1.2rem',
              margin: '1.3em 0 0 0'
          }}
          >Enter your one-time password (otp)</h3>
          <h5
          style={{
              fontWeight: '400',
              margin: '0',
              paddingBottom: '2.2em'
          }}>otp sent to phone number ending in 2656</h5>
          <input 
          style={{height: '24px'}}
          type="text" 
          autoFocus/>
      </form>
      </div>
      
  </div>
    )
}

export default FirebaseOtp
