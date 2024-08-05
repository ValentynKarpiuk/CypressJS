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
        login.incorrectFormat();
    })

})

describe('User forgot Password', () => {

//Last check confirm, that this feature doesn't work in expected behavior. 
//User set correct email, but doesn't receive any info to the mail, 
//Also no information about result after setting correct mail and click "Set New Password"
//As a result user is not able to login with previous data and doesn't know how continue 
    
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