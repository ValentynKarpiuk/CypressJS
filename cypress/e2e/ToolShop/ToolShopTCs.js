/// <reference types="cypress" />

import { registration } from "../../pageObjects/registration/registration"
import { login } from "../../pageObjects/login/login";  

describe('Registration', () => {

    it('Registration failed - empty fields', () => {
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

    it('Login to the page with incorrect e-mail', () => {
        login.incorrectEmail();
    })

    it('Login to the page with incorrect password', () => {
        login.incorrectEmail();
    })

    it('Login to the page with empty fields', () => {
        login.incorrectEmail();
    })

    it('Login to the page with incorrect format of email and incorrect length of the password', () => {
        login.incorrectEmail();
    })

})