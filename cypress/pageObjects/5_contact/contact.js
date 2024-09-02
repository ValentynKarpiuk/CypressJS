import loginSelectors from "../2_login/loginSelectors";
import contactSelectors from "./contactSelectors";

class Contact {

    attachmentIncorrect(){

        cy.get(contactSelectors.menuContact).click();
        cy.get(contactSelectors.subject).select('payments').should('have.value','payments')
        cy.get(contactSelectors.messageBody).type(contactSelectors.messageText)
       // cy.fixture - destined for no empty file
        cy.fixture('textExist.txt', 'utf8').then((fileContent) => {
            cy.log('File content:', fileContent);
            cy.get('[data-test="attachment"]').attachFile({
                fileContent: fileContent,
                fileName:'textExist.txt',
                mimeType: 'text/plain',
            });
        });

        cy.get(contactSelectors.sendButton).click();
        cy.get('[id="attachment_alert"]').should('contain',"File should be empty.")

    }

    paymentQuestion() {

        cy.get(contactSelectors.menuContact).click();
        cy.get(contactSelectors.subject).select('payments').should('have.value','payments')
        cy.get(contactSelectors.messageBody).type(contactSelectors.messageText)

        // creation and uploading empty file
            
        cy.get(contactSelectors.attachment).should('exist').then((input) => {
        const blob = new Blob([''], { type: 'text/plain' });
        const file = new File([blob], 'textEmpty.txt', { type: 'text/plain' });
        
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        input[0].files = dataTransfer.files;
        cy.wrap(input).trigger('change', { force: true });
     });
    
       cy.get(contactSelectors.sendButton).click();
       cy.get(contactSelectors.successPopup, {timeout: 4000}).should('contain','Thanks for your message! We will contact you shortly.')
       cy.get(loginSelectors.userMenu).click()
       cy.get(contactSelectors.myMessages).click();
       cy.get('tbody').contains('tr','payments').find('td').eq(1).should('contain', 'I hope this message finds you well. I am writing t...')
    }


}
export const contact = new Contact();