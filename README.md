# Avtoikonom - Cypress E2E Testing Suite

Automated end-to-end testing suite for the Avtoikonom admin platform built with Cypress.

## Project Overview

This project contains automated tests for the Avtoikonom partner management system, including partner creation, login workflows, file uploads, and partner search/edit functionality.

**Base URL:** `https://dev.admin.avtoikonom.com`

## Tech Stack

- **Cypress** - E2E testing framework
- **JavaScript/ES6** - Test scripting
- **Faker.js** - Test data generation
- **Page Object Model** - Test structure pattern

## Project Structure

```
cypress/
├── e2e/                 # Test specifications
│   └── CreatePartner.cy.js
├── pages/               # Page Object Model classes
│   ├── BasePage.js
│   ├── LoginPage.js
│   ├── PartnersPage.js
│   └── SearchPartnerPage.js
├── fixtures/            # Test data and images
│   ├── test-image.js
│   └── Images/test-image.png
├── support/             # Helper files and commands
│   ├── e2e.js
│   └── commands.js
└── cypress.config.js    # Cypress configuration
```

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure credentials:**
   - Update `cypress.config.js` with test credentials in the `env` section
   - Current test user: `test_qa@example.com`

## Running Tests

```bash
# Open Cypress Test Runner
npx cypress open

# Run all tests headlessly
npx cypress run

# Run specific test
npx cypress run --spec "cypress/e2e/CreatePartner.cy.js"

# Run tests in headed mode
npx cypress run --headed --spec "cypress/e2e/CreatePartner.cy.js"
```

## Test Cases

### Create Partner Test
- **File:** `cypress/e2e/CreatePartner.cy.js`
- **What it does:**
  1. Logs in with valid credentials
  2. Navigates to Partners section
  3. Creates a new partner with:
     - Auto-generated partner name
     - Partner type (Service)
     - Selected services (Шлайфане на глава, Смяна на масло)
     - Subscription tier
     - Address (with Google Places autocomplete)
     - Phone number
     - Contact person
     - Description
     - Logo upload (test-image.png)
     - Clicks "Save" after the logo is uploaded
     - Clicks "Save" to save the newly created Partner
  4. Searches for the newly created partner by name
  5. Edits the partner's contact person field
  6. Saves the changes

### Page Objects

#### PartnersPage.js
Methods for creating and managing partners:
- `navigateToPartners()` - Navigate to partners page
- `clickPartners()` - Click partners menu item
- `createNewPartnerButton()` - Click create new partner button
- `fillInPartnerForm(partner)` - Fill in all partner form fields and upload logo
  - Generates random partner name using Faker.js
  - Uploads logo image from fixtures
  - Returns: `partnerName` (for use in search/validation)
- `searchPartner(partnerName)` - Search for a partner using the search field
- `validatePartnerExists(partnerName)` - Verify partner appears in search results

#### SearchPartnerPage.js
Methods for searching and editing partners:
- `searchForPartnerAndEdit()` - Search for a partner by name and edit its details

## Selectors & Key Elements

### PartnersPage
- Partner Name Field: `#name-field`
- Partner Type Field: `#partner-type-field`
- Address Field: `#address-field`
- Phone Field: `input[id="phone-field"]`
- Contact Person Field: `#contact-person-field`
- Description Field: `#description-field`
- File Upload: `input[name="file-upload"]`

### SearchPartnerPage
- Search Field: `#search-partners`
- Action Menu (three dots): `#action-button`

## Dependencies

- `@faker-js/faker` - Generates random test data
- `cypress-file-upload` - File upload handling
- `cypress-xpath` - XPath selector support
- `cypress-iframe` - iframe handling

## Known Issues & Debugging

### Image Upload
If image upload fails:
1. Ensure `cypress/fixtures/Images/test-image.png` exists
2. Use selector `input[name="file-upload"]` for file inputs
3. Check selector with `cy.get('input[name="file-upload"]').debug()`

### Modal Save Buttons
When multiple "Save" buttons exist (modal + form):
- Use `.ant-modal:visible` to scope to the visible modal
- Or use `.ant-modal-root` to target the modal context
- Example: `cy.contains('.ant-modal:visible button', 'Save').click()`

### Search Results
- Use `.ant-table-body` selector to verify partner appears in results table
- Wait for search results with `cy.wait(1000)` after typing

## Environment Variables

Located in `cypress.config.js`:
- `username` - Test login email
- `password` - Test login password

## CI/CD Integration

- **Cypress Cloud Project ID:** `ioif8v`
- MCP Server configured for Cypress Cloud integration (requires `CYPRESS_MCP_TOKEN`)
