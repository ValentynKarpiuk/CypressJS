/// <reference types="cypress"/>

import loginSelectors from "./loginSelectors";
import registrationSelectors from "../1_registration/registrationSelectors";

class Login {

    openLoginPopup() {
        cy.visit('/')
        cy.get(registrationSelectors.singInButton).click();
    }

    correctCredential() {
        this.openLoginPopup();
        cy.get(loginSelectors.email).type(registrationSelectors.emailData);
        cy.get(loginSelectors.password).type(registrationSelectors.passwordData);
        cy.get(loginSelectors.login).click();
        cy.get(loginSelectors.userMenu, {timeout:5000} )
        .should('contain', ' '+ registrationSelectors.firstNameData + ' ' + registrationSelectors.lastNameData + ' ') 
    }

    incorrectEmail() {
        this.openLoginPopup();
        cy.get(loginSelectors.email).type('alentynpost@gmail.com');
        cy.get(loginSelectors.password).type(registrationSelectors.passwordData);
        cy.get(loginSelectors.login).click();
        cy.get(loginSelectors.loginError, {timeout:5000}).should('contain', 'Invalid email or password')
        }

    incorrectPassword() {
        this.openLoginPopup();
        cy.get(loginSelectors.email).type(registrationSelectors.emailAddress);
        cy.get(loginSelectors.password).type('elcome01');
        cy.get(loginSelectors.login).click();
        cy.get(loginSelectors.loginError, {timeout:5000}).should('contain', 'Invalid email or password')
    }

    emptyFields() {
        this.openLoginPopup();
        cy.get(loginSelectors.login).click();
        cy.get(loginSelectors.loginError, {timeout:5000}).should('contain', ' E-mail is required. ');
        cy.get(loginSelectors.passwordError, {timeout:5000}).should('contain', ' Password is required. ');
    }

    incorrectFormat() {
        this.openLoginPopup();
        cy.get(loginSelectors.login).click();
        cy.get(loginSelectors.email).type('valentynpost.gmail.com'); 
        cy.get(loginSelectors.password).type('ab')
        cy.get(loginSelectors.emailError, {timeout:5000}).should('contain', 'Email format is invalid');
        cy.get(loginSelectors.passwordError, {timeout:5000}).should('contain', 'Password length is invalid');
    }

    singOut() {
        cy.get(loginSelectors.userMenu, {timeout:5000}).click();
        cy.get(loginSelectors.logOut).click({force:true})
        cy.get(registrationSelectors.loginPopup, {timeout:5000}).should('be.visible')
    }
}

export const login = new Login()
