const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.admin.avtoikonom.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "ioif8v",
  // ...rest of the Cypress project config

  env: {
    username: "test_qa@example.com",
    password: "test_qa@example.com",
  },

  
  "mcpServers": {
    "Cypress Cloud": {
      "type": "http",
      "url": "https://mcp.cypress.io/mcp",
      "headers": {
        "Authorization": "Bearer ${CYPRESS_MCP_TOKEN}"
      }
    }
  }
}
);

