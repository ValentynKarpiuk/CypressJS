/// <reference types="cypress" />

import registrationSelectors from "../1_registration/registrationSelectors";
import loginSelectors from "../2_login/loginSelectors";
import passwordRecoverSelectors from "../3_passwordRecover/passwordRecoverSelectors";
import userMenuSelectors from "./userMenuSelectors";

class UserMenu {

        editProfileData() {
        cy.get(loginSelectors.userMenu).click();
        cy.get(userMenuSelectors.myProfile).click();
        cy.get(userMenuSelectors.profile, {timeout:4000}).should('be.visible');
        //I won't change the name and surname because it is assertion for other TCs, but it is possible
        //cy.get(registrationSelectors.firstName).clear().type('VALENty');
        //cy.get(registrationSelectors.lastName).clear().type('k');
        cy.wait(3000)
        // Method "wait" is added, due to apps first download the form,
        // after is filling them, that lead to mixing old and new data.
        cy.get(registrationSelectors.phone).clear().type('12345');
        cy.get(registrationSelectors.address).clear().type('newAddress');
        cy.get(registrationSelectors.postcode).clear().type('33-333');
        cy.get(registrationSelectors.city).clear().type('newCity');
        cy.get(registrationSelectors.state).clear().type('newCitizen');
        cy.get(registrationSelectors.selectCountry).clear().type('ES');
        cy.get(userMenuSelectors.updateProfile).click();
        cy.get(registrationSelectors.address).invoke('prop','value').should('contain','newAddress');
        cy.get(registrationSelectors.phone).invoke('prop','value').should('contain', '12345');
        cy.get(registrationSelectors.postcode).invoke('prop','value').should('contain','33-333');
        cy.get(registrationSelectors.city).invoke('prop','value').should('contain','newCity');
        cy.get(registrationSelectors.state).invoke('prop','value').should('contain','newCitizen');
        cy.get(registrationSelectors.selectCountry).invoke('prop','value').should('contain','ES');
        cy.get(passwordRecoverSelectors.errorAlert, {timeout:5000})
        .should('contain', ' Your profile is successfully updated! ')
    
    }

}
export const userMenu  = new UserMenu();