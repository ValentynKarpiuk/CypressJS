/// <reference types="cypress" />

import registrationSelectors from "../1_registration/registrationSelectors";
import passwordRecoverSelectors from "./passwordRecoverSelectors";

class PasswordRecovery {

    openRecoverPage() {
        cy.visit('/');
        cy.get(registrationSelectors.singInButton).click();
        cy.get(passwordRecoverSelectors.forgotPasswordLink).click();
    }
    
    validData() {
        this.openRecoverPage();
        cy.get(registrationSelectors.emailAddress).type(registrationSelectors.emailData);
        cy.get(passwordRecoverSelectors.setNewPasswordBtn).click();
        cy.get(passwordRecoverSelectors.alert)
        .should('contain', ' Your password is successfully updated! ')
    }

    invalidData() {
        this.openRecoverPage();
        cy.get(registrationSelectors.emailAddress).type(registrationSelectors.invalidEmailData);
        cy.get(passwordRecoverSelectors.setNewPasswordBtn).click();
        cy.get(passwordRecoverSelectors.errorAlert, {timeout:5000})
        .should('contain', 'The selected email is invalid.');

    }

    invalidFormat() {
        this.openRecoverPage();
        cy.get(registrationSelectors.emailAddress).type(registrationSelectors.incorrectEmailFormat);
        cy.get(passwordRecoverSelectors.setNewPasswordBtn).click();
        cy.get(registrationSelectors.emailAddressError)
        .should('contain', '');
    }
}
export const passwordRecovery = new PasswordRecovery()