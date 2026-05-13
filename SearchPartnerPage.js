import { faker } from "@faker-js/faker";
import 'cypress-iframe';
import 'cypress-file-upload';

export class SearchPartnerPage {

// Search for partner and edit
    searchForPartnerAndEdit ()
    {
       //Click on the search field and enter the partner name
        cy.get('.TCIJK').should("be.visible").click();
        cy.get('.TCIJK').type("AutoP");
        
        //Click on the three dots and select Edit
      //  cy.get('[data-row-key="5f78b0cd-cf6d-4d7b-86e4-6c70657e5594"] > :nth-child(7) > .YNRWQ > :nth-child(1) > .ant-menu > .ant-menu-submenu >').click();
          // Click the three dots menu
      cy.get('#action-button').click();
      cy.get('#edit-button').should("be.visible").click();
        
        //Edit Field - Contact Person and save
        cy.get('#contact-person-field').clear().type("Petar Mihaylov");
        
        //Click Save 
        //cy.get('.ant-modal-root .ant-btn-primary').contains('Save').click();
        cy.get('.ant-modal-root .ant-btn-primary').contains('Save').click({ force: true });
        cy.wait(2000);
    }

};
