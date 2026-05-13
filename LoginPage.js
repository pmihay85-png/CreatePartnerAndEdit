export class LoginPage {
	visit() {
		cy.visit("/");
	}

	login(email, password) {
		cy.get('[style="margin-bottom: 0px; row-gap: 0px;"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .noKbt > .ant-input').type(email);
		cy.get('input[type="password"]').type(password, { log: false });
		cy.get('button[type="submit"]').click();
	}

	assertLoggedIn() {
		cy.url({ timeout: 20000 }).should("not.include", "login");
	}
}
    

   