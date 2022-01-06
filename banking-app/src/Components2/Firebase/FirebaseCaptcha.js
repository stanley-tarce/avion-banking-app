import { getAuth, RecaptchaVerifier } from "@firebase/auth";
import { app } from './FirebaseInitialize'
import { onSignInSubmit } from './SendCode'


const auth = getAuth(app);
    auth.languageCode = 'en'
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
            console.log('captcha verified')
            onSignInSubmit();
        }
    }, auth);