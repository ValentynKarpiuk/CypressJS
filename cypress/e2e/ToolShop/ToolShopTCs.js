/// <reference types="cypress" />

import { registration } from "../../pageObjects/registration/registration"

describe('Registration', () =>{

    it('Registration failed - empty fields', () => {
        registration.invalidData()
    });

    it('Registration complete - valid data', () => {
        registration.validData()
    })

})