import sortingSelectors from "../6_sorting/sortingSelectors";
import priceRangeSelectors from "./priceRangeSelectors";

class PriceRange {

    between1and5() {

        cy.visit('/');

        // Move the minimum slider n steps

        cy.get(sortingSelectors.selectOption).select('price,asc').should('have.value', 'price,asc');

        cy.get(priceRangeSelectors.minSlider).click()
        cy.get(priceRangeSelectors.minSliderAct).click({ force: true }).type("{leftarrow}");
        const min = 2;  // the number of steps 
        for (let i = 0; i < min; i++) {
            cy.get(priceRangeSelectors.minSliderAct).click({ force: true }).type("{rightarrow}");
        }
        const currentValue = 100;
        const targetValue = 10;
        const increment = 2;
        const steps = (currentValue - targetValue) / increment;
        const arrows = '{leftarrow}'.repeat(steps);
        cy.get(priceRangeSelectors.maxSlider).click()
        cy.get(priceRangeSelectors.maxSliderAct)
            .should('have.attr', 'aria-valuenow', 100)
            .type(arrows)

        cy.get(priceRangeSelectors.maxSliderAct)
            .should('have.attr', 'aria-valuenow', 10)

        cy.wait(3000)

        cy.get(priceRangeSelectors.minSliderValue).should('have.text', 4)
        cy.get(priceRangeSelectors.maxSliderValue).should('have.text', 10)

        cy.get(priceRangeSelectors.minSlider).click({ force: true })

        cy.wait(3000)

        // Pętla, która będzie działać, dopóki elementy istnieją
        cy.get(sortingSelectors.productPrice).each(($currentElement) => {
            // Pobieramy tekst wartości z elementu
            cy.wrap($currentElement).invoke('text').then((currentValueText) => {
                // Upewniamy się, że currentValueText jest tekstem
                const trimmedText = currentValueText.trim();
                if (typeof trimmedText === 'string') {
                    // Usuwamy symbol dolara, jeśli istnieje, i konwertujemy na liczbę
                    const currentValue = parseFloat(trimmedText.replace('$', ''));
                    // Sprawdzamy, czy wartość mieści się w zakresie [4, 10]
                    expect(currentValue, { timeout: 1000 }).to.be.gte(4);  // Asercja: wartość >= 4
                    expect(currentValue, { timeout: 1000 }).to.be.lte(10);  // Asercja: wartość <= 10
                } else {
                    // Logujemy błąd, jeśli currentValueText nie jest ciągiem tekstowym
                    cy.log(`Oczekiwano tekstu, ale otrzymano: ${currentValueText}`);
                }
            });
        });

    }
}
export const priceRange = new PriceRange

/* Variant 1 //only interact with ui without changing value and don't effect to filtering
cy.get(sortingSelectors.selectOption).select('price,asc').should('have.value','price,asc');
cy.get('[class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-selection-bar"]')
.invoke('attr', 'style', 'left: 16px; width: 40px;')
.invoke('attr', 'aria-valuenow', '0')
 
cy.get('span[class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min"]').click()
cy.get('span[class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min ngx-slider-active"]')
.invoke('attr', 'style', 'left: 0px;')
.invoke('attr', 'aria-valuenow', '0' )
.invoke('attr', 'aria-valuetext', '0')
.invoke('attr', 'aria-valuemax', '200')
.invoke('attr', 'aria-valuemin', '0')
.trigger('ngx-slider-active.change');

cy.get('span[class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max"]').click()
cy.get('span[class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max ngx-slider-active"]')
.invoke('attr', 'style', 'left: 40px;')
.invoke('attr', 'aria-valuenow', '35' )
.invoke('attr', 'aria-valuetext', '35')
.invoke('attr', 'aria-valuemax', '200')
.invoke('attr', 'aria-valuemin', '0')
.trigger('npx-slider.ngx-slider.animate');

cy.get('span[class="ngx-slider-span ngx-slider-bubble ngx-slider-model-value"]')
.invoke('attr', 'style', 'left: 9px')
.invoke('text','0')

cy.get('span[class="ngx-slider-span ngx-slider-bubble ngx-slider-model-high"]')
.invoke('attr', 'style', 'left: 44px')
.invoke('text', '35')

cy.get('[class="ngx-slider-span ngx-slider-bubble ngx-slider-model-value"]')
.invoke('attr', 'text', '0')*/

/* Variant 2
cy.visit('/');

// Move the minimum slider to 4
cy.get(sortingSelectors.selectOption).select('price,asc').should('have.value', 'price,asc');
 
// Calculate the position to drag the minimum slider to reach 4
const minSliderWidth = 100; // Adjust this value based on the slider's width or your page's layout
const minValue = 4;
const minPosition = (minValue / 100) * minSliderWidth; // Normalize based on your slider's range
 

cy.get(priceRangeSelectors.minSlider).click()
cy.get(priceRangeSelectors.minSliderAct)
    .trigger('mousedown', { button: 0 })
    .trigger('mousemove', { clientX: minPosition })
    .trigger('mouseup');
 
// Move the maximum slider to 10
const maxSliderWidth = 100; // Adjust this value based on the slider's width or your page's layout
const maxValue = 10;
const maxPosition = (maxValue / 100) * maxSliderWidth; // Normalize based on your slider's range
cy.get(priceRangeSelectors.maxSlider).click()
cy.get(priceRangeSelectors.maxSliderAct)
    .trigger('mousedown', { button: 0 })
    .trigger('mousemove', { clientX: maxPosition })
    .trigger('mouseup');*/
