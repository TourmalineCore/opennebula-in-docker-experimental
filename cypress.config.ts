import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    specPattern: `cypress/e2e/**/*.cy.ts`,
    baseUrl: process.env.CYPRESS_BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    },
    video: true,
    screenshotOnRunFailure: true,
  },
})
