import { faker } from "@faker-js/faker";
import 'cypress-iframe';
import 'cypress-file-upload';

export class PartnersPage {

  navigateToPartners() {
    cy.visit("/partners");
  }

  clickPartners() {
    cy.get(':nth-child(5) > .KddQD').should("be.visible").click();
    cy.get('#partners-menu-item').should("be.visible").click();
  }

  createNewPartnerButton() {
    cy.get('.n6aSR').should("be.visible").click();
  }

  fillInPartnerForm(partner) {
    // Generate and enter random partner name
   /// cy.get('#name-field').type("AutoP" + faker.string.alphanumeric(5));
    const partnerName = "AutoP" + faker.string.alphanumeric(5);
    cy.get('#name-field').type(partnerName);

    // Select Partner Type as 'Service'
    cy.get('#partner-type-field').click();
    cy.get('.ant-select-item.ant-select-item-option.ant-select-item-option-active .UwDzR')
      .should("contain", "Service")
      .click();

    // Select offered services
    cy.get('.ZZFVf > .ant-select').click();
    cy.get('.ant-select-item-option-content')
      .contains("Шлайфане на глава")
      .should("be.visible")
      .click();
    cy.get(':nth-child(2) > .ant-select-item-option-content > .bSDbF')
      .contains("Смяна на масло")
      .should("be.visible")
      .click();
    cy.press("Tab");

    // Select Subscription Type
    cy.xpath('//input[@id="subscription-tier-field"]').click();
    cy.xpath('//span[normalize-space()="Automation Subscription Tier 60721"]')
      .should("be.visible")
      .click();

    // Enter Address
    cy.get('#address-field').type("Sofia Bulgaria");
    cy.xpath('//div[@class="pac-container pac-logo hdpi"]//div[1]').click();

    // Enter Phone
    cy.get('input[id="phone-field"]').type("0888419415");

    // Enter Contact Person
    cy.get('#contact-person-field').type("Ivan Mihaylov");

    // Enter Description
    cy.get('#description-field').type("This is a test partner created by Cypress automation script.");

    // Upload Partner Logo
    cy.get('input[name="file-upload"]').selectFile('cypress/fixtures/Images/test-image.png', { force: true });
    cy.wait(2000);

    // Save the logo in the modal
    cy.contains('.ant-modal:visible button', 'Save').click();
    cy.wait(2000);

    // Save the partner form
    cy.get('.ant-modal-root .ant-btn-primary').contains('Save').click({ force: true });

    return partnerName;

  };
};
