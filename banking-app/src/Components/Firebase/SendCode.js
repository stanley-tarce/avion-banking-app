import { getAuth, signInWithPhoneNumber } from "@firebase/auth";
import FirebaseCaptcha from './FirebaseCaptcha'

export const onSignInSubmit = () => {

    const phoneNumber = '+639457712656'
    const appVerifier = 'window.recaptchaVerifier'
    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
        console.log('sms sent')
        window.confirmationResult = confirmationResult;
    }).catch((error) => {
        console.log(error)
    });
}

