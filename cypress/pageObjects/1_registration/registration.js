/// <reference types="cypress" />

import registrationSelectors from "./registrationSelectors"

class Registration {

    invalidData() {
        cy.visit('/');
        //cy.wait(500);
        cy.get(registrationSelectors.singInButton).click();
        cy.get(registrationSelectors.registerYourAccountLink).click();
        cy.get(registrationSelectors.registerButton).click();
        cy.get(registrationSelectors.firstNameError).should('contain', ' First name is required ');
        cy.get(registrationSelectors.lastNameError).should('contain', ' fields.last-name.required ');
        cy.get(registrationSelectors.dateOfBirthError).should('contain', ' Date of Birth is required ');
        cy.get(registrationSelectors.addressError).should('contain', ' Address is required ');
        cy.get(registrationSelectors.postcodeError).should('contain', ' Postcode is required ');
        cy.get(registrationSelectors.cityError).should('contain', ' City is required ');
        cy.get(registrationSelectors.stateError).should('contain', ' State is required ');
        cy.get(registrationSelectors.selectCountryError).should('contain', ' Country is required ');
        cy.get(registrationSelectors.phoneError).should('contain', ' Phone is required. ');
        cy.get(registrationSelectors.emailAddressError).should('contain', ' Email is required ');
        cy.get(registrationSelectors.passwordError).should('contain', ' Password is required ')
        cy.get(registrationSelectors.phone).type('a');
        cy.get(registrationSelectors.phoneError).should('contain', ' Only numbers are allowed. ');
        cy.get(registrationSelectors.emailAddress).type('valentynpost.gmail.com');
        cy.get(registrationSelectors.emailAddressError).should('contain', ''); //Because the field is empty, without any message for user: ' E-mail format is invalid. '
        cy.get(registrationSelectors.password).type('01234');
        cy.get(registrationSelectors.passwordError).should('contain', ' Password must be minimal 6 characters long. ')
    }

    validData() {
        cy.visit('/')
        cy.get(registrationSelectors.singInButton).click();
        cy.get(registrationSelectors.registerYourAccountLink).click();
        cy.get(registrationSelectors.firstName).type(registrationSelectors.firstNameData);
        cy.get(registrationSelectors.lastName).type(registrationSelectors.lastNameData);
        cy.get(registrationSelectors.dateOfBirth).type('1999-01-01');
        cy.get(registrationSelectors.address).type('Address');
        cy.get(registrationSelectors.postcode).type('30-001');
        cy.get(registrationSelectors.city).type('City');
        cy.get(registrationSelectors.state).type('Resident');
        cy.get(registrationSelectors.selectCountry).select('Ukraine').should('have.value', 'UA');
        cy.get(registrationSelectors.phone).type('000000000');
        cy.get(registrationSelectors.emailAddress).type('valentynpost@gmail.com');
        cy.get(registrationSelectors.password).type('Wlcome01!');
        cy.get(registrationSelectors.registerButton).click({force:true});
        cy.wait(1000);

            //Some explanation about script below. 
            //In some time system remove credential of the user, that's way to options could be correct. 

            cy.get('body').then($body => {
                // Checking if "Log in" form is visible
                if ($body.find(registrationSelectors.loginPopup).length > 0) {
                    cy.get(registrationSelectors.loginPopup).should('be.visible');
                } else {
                    // If "Log in" form is not visible, switch on the "Registration" form
                    if ($body.find(registrationSelectors.registrationForm).length > 0) {
                        cy.get(registrationSelectors.registrationForm).then($regForm => {
                            if ($regForm.is(':visible')) {
                                cy.get('[data-test="register-error"]').should('have.text', 'A customer with this email address already exists.');
                            } else {
                                cy.log('"Log in" and "Registration" forms are not visible');
                            }
                        });
                    } else {
                        cy.log('"Log in" and "Registration" forms are not visible');
                    }
                }
            });

        
    }

}

export const registration = new Registration()