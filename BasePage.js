export class BasePage {
	findFirstExistingSelector(selectors) {
		return cy.get("body").then(($body) => {
			const found = selectors.find((selector) => $body.find(selector).length > 0);

			expect(found, `Expected one selector to exist: ${selectors.join(", ")}`).to.exist;
			return found;
		});
	}

	typeIfExists(selectors, value, options = {}) {
		return cy.get("body").then(($body) => {
			const selector = selectors.find((item) => $body.find(item).length > 0);

			if (selector) {
				cy.get(selector).first().clear().type(value, options);
			}
		});
	}

	clickFirstByText(regex) {
		return cy.contains('button, a, [role="button"]', regex).first().click();
	}
}
