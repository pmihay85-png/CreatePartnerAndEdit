import { LoginPage } from "../pages/LoginPage.js";
import {BasePage} from "../pages/BasePage.js";
import { PartnersPage } from "../pages/PartnersPage.js";
import {SearchPartnerPage} from "../pages/SearchPartnerPage.js";

import { faker } from "@faker-js/faker";
import 'cypress-xpath';
import fixture from '../fixtures/test-image.js';
import 'cypress-file-upload';

describe("Partners - Create Partner and Edit Partner", () => {
    it("log in with valid credentials, create a new partner and then edit", () => {
        const loginPage = new LoginPage();
        const partnersPage = new PartnersPage();
        const searchPartnerPage = new SearchPartnerPage();
        
        const email = Cypress.env("username");
        const password = Cypress.env("password");
		
        const partnerName = "AutoP" + faker.string.alphanumeric(5);
		const partner = {};
		
		//Login with valid credentials
        loginPage.visit();
        loginPage.login(email, password);
        loginPage.assertLoggedIn();
		
		//Navigate to Partners page and Fill in the Create Partner form
        partnersPage.navigateToPartners();
        partnersPage.clickPartners();
		partnersPage.createNewPartnerButton();
		partnersPage.fillInPartnerForm(partner);
        searchPartnerPage.searchForPartnerAndEdit();
        
    });
});