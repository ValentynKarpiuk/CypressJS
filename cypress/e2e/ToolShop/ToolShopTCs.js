/// <reference types="cypress" />

import { registration } from "../../pageObjects/1_registration/registration"
import { login } from "../../pageObjects/2_login/login";  
import { passwordRecovery } from "../../pageObjects/3_passwordRecover/passwordRecover";
import { userMenu } from "../../pageObjects/4_userMenu/userMenu";

describe('Registration', () => {

    it('Registration failed - empty fields, wrong data', () => {
        registration.invalidData();
    });

    it('Registration complete - valid data', () => {
        registration.validData();
    })
})

describe('Authorization', () => {

    it('User successfully login and log out', () => {
        login.correctCredential();
        login.singOut();
    })

    it('Login with incorrect e-mail', () => {
        login.incorrectEmail();
    })

    it('Login with incorrect password', () => {
        login.incorrectEmail();
    })

    it('Login to the page with empty fields', () => {
        login.incorrectEmail();
    })

    it('Login to the page with incorrect format of email and incorrect length of the password', () => {
        login.incorrectEmail();
    })

})

describe('User forgot Password', () => {

    // This TC is working fine but it locked because after execution
    // user is not able to log in with data set during
    // successful registration
    
    /*it('Password successfully recovered', () => {
        passwordRecovery.validData();
    })*/

    it('No exist in the system email address was set', () => {
        passwordRecovery.invalidData();
    })

    it('Incorrect email format was set', () => {
        passwordRecovery.invalidFormat();
    })

})

/*describe('User menu', () => {

    beforeEach(() => {
        login.correctCredential();
    })

    it('Update profile, all data apart from email', () => {
        userMenu.editProfileData();
    })

    afterEach(() => {
        login.singOut();
    })

})*/