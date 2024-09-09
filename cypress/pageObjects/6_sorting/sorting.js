import sortingSelectors from "./sortingSelectors";


class Sorting {

    byNameAsc() {

        cy.visit('/');
        cy.get(sortingSelectors.selectOption).select('name,asc').should('have.value', 'name,asc');
        cy.wait(2000)

        cy.get(sortingSelectors.productName).eq(0).invoke('text').then((text) => {
            expect(text.trim()).to.match(/^[A]/)
        })

        cy.get(sortingSelectors.productName).eq(0).invoke('text').then((text1) => {
            cy.get(sortingSelectors.productName).eq(1).invoke('text').then((text2) => {

                const firstChar1 = text1.trim().charAt(0).toUpperCase();
                const firstChar2 = text2.trim().charAt(0).toUpperCase();

                if (firstChar1 !== firstChar2) {
                    expect(firstChar1.charCodeAt(0)).to.be.lessThan(firstChar2.charCodeAt(0))

                } else {
                    // If the letters are the same 
                    cy.log('First characters are the same, cannot compare based on first letter only.');
                }


            })
        })

    }

    byPriceAsc() {

        cy.visit('/');
        cy.get(sortingSelectors.selectOption).select('price,asc').should('have.value', 'price,asc');
        cy.wait(1000);
        cy.get(sortingSelectors.productPrice).eq(0).invoke('text').then((text1) => {
            cy.get(sortingSelectors.productPrice).eq(1).invoke('text').then((text2) => {
                // Remove any non-numeric characters, such as currency symbols
                const price1 = parseFloat(text1.trim().replace(/[^0-9.-]+/g, '')).toFixed(2);
                const price2 = parseFloat(text2.trim().replace(/[^0-9.-]+/g, '')).toFixed(2);

                expect(parseFloat(price1)).to.be.at.most(parseFloat(price2))
            })
        })

    }



}
export const sorting = new Sorting();