export default {

    singInButton: '[data-test="nav-sign-in"]',
    registerYourAccountLink: '[data-test="register-link"]',
    firstName: '[id="first_name"]' ,
    lastName: '[id="last_name"]' ,
    dateOfBirth: '[id="dob"]' , //type="date"
    address: '[id="address"]' ,
    postcode: '[id="postcode"]' ,
    city: '[id="city"]',
    state: '[id="state"]',
    selectCountry: '[id="country"]', // select
    phone: '[id="phone"]', 
    emailAddress: '[id="email"]',
    password: '[data-test="password"]',
    registerButton: '[class="btnSubmit mb-3"]',
    loginPopup: '[class="col-lg-6 auth-form"]',
    registrationForm: '[class="col-lg-8 auth-form"]',

    // alert-danger
    firstNameError: '[data-test="first-name-error"]',
    lastNameError: '[data-test="last-name-error"]',
    dateOfBirthError: '[data-test="dob-error"]',
    addressError: '[data-test="address-error"]',
    postcodeError: '[data-test="postcode-error"]',
    cityError: '[data-test="city-error"]',
    stateError: '[data-test="state-error"]',
    selectCountryError: '[data-test="country-error"]',
    phoneError: '[data-test="phone-error"]', 
    emailAddressError: '[data-test="email-error"]',
    passwordError: '[data-test="password-error"]',
    helpBlocker: '[class="help-block"]',
    // this selector was used before changes: invalidFormatText: ' E-mail format is invalid ',
    invalidFormatText: 'The selected email is invalid.',

    //correct data for registration/login
    firstNameData: 'Valentyn',
    lastNameData: 'Ka',
    emailData: 'valentynpost@gmail.com',
    passwordData: 'Wlcome01!',
    
    // invalid data for error pop-up
    invalidEmailData: 'alentynpost@gmail.com',
    incorrectEmailFormat: 'valentynpost.gmail.com',
    



}