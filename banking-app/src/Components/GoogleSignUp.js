

import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'
import '../Components/GoogleSignUp.css'

// Taken from Google OAuth 2.0
const googleData = {
    "web": {
        "client_id": "430809304665-394ssldsi8l2jml5qde57e9mvlj47gc2.apps.googleusercontent.com",
        "project_id": "avion-banking-app", "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_secret": "pkhN14dvbzRj5YRaPabltCT_", "redirect_uris": ["http://localhost:3000"],
        "javascript_origins": ["http://localhost:3000"]
    }
}


export default class GoogleSignUp extends Component {
    constructor(props) {
        super()
        this.onSuccess = this.onSuccess.bind(this)
        this.onFailure = this.onFailure.bind(this)

        this.props = {
            showLogin: props,
            showMain: props
        }
    }

    //If Login is successful
    onSuccess(response) {
        const { email, familyName, givenName, googleId, imageUrl } = response.profileObj
        console.log(`[Login Success]`)
        console.log(`Email:${email}`)
        console.log(`Family Name:${familyName}`)
        console.log(`Given Name:${givenName}`)
        console.log(`Google ID:${googleId}`)
        console.log(`imageURL:${imageUrl}`) 
        this.props.showLogin(false)
        this.props.showMain(true)
        // console.log(response)
    }
    //If login failed
    onFailure(response) {
        console.log(`[Login Failure] currentUser: ${response}`)
    }

    render() {
        return (  
                <GoogleLogin style={{fontWeight:'normal'}}
                    className={"google-login"}
                    clientId={googleData.web.client_id}
                    buttonText="Sign in with Google"
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                />
        )
    }
}
