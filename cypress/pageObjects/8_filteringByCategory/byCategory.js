import sortingSelectors from "../6_sorting/sortingSelectors";
import byCategorySelectors from "./byCategorySelectors";

class ByCategory {

    hammer() {

        cy.visit('/');
        cy.wait(1000)
        cy.get(byCategorySelectors.checkbox).eq(1).check({ force: true })
        cy.wait(1000)

        cy.get(sortingSelectors.productName).eq(0).invoke('text').then((text) => {
            expect(text).to.match(/(Hammer)/)
        })

        cy.get(sortingSelectors.productName).eq(0).should('contain.text', 'Hammer');
        cy.get(sortingSelectors.productName).eq(0).invoke('text').should('match', /(Hammer)/);
        cy.get(sortingSelectors.productName).eq(0).contains('Hammer');
        cy.contains(sortingSelectors.productName, 'Hammer');

        cy.get(sortingSelectors.productName).each(($prod) => {
            cy.wrap($prod)
                .invoke('text')
                .then((text) => {
                    expect(text).to.match(/(Hammer|Sledgehammer)/);
                });
        });

    }

}

export const byCategory = new ByCategory()