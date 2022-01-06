import { getAuth, signInWithPhoneNumber } from "@firebase/auth";
import { app } from "./FirebaseInitialize";

export const onSignInSubmit = () => {

    const phoneNumber = '+639457712656'
    const appVerifier = 'window.recaptchaVerifier'
    const auth = getAuth(app);
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
        console.log('sms sent')
        window.confirmationResult = confirmationResult;
    }).catch((error) => {
        console.log(error)
    });
}

