const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    specPattern: `cypress/e2e/**/*.cy.js`,
    baseUrl: process.env.CYPRESS_BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
      video: true,
    },
  },

});
