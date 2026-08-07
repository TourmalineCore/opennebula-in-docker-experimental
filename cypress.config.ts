import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    specPattern: `cypress/e2e/**/*.cy.ts`,
    baseUrl: process.env.CYPRESS_BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      USER_LOGIN: process.env.USER_LOGIN,
      USER_PASSWORD: process.env.USER_PASSWORD
    },
    video: true,
    screenshotOnRunFailure: true,
  },
})
