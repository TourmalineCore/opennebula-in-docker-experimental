import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    experimentalStudio:true,
    specPattern: `cypress/e2e/**/*.cy.ts`,
    baseUrl: "http://localhost:2616",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      USER_LOGIN: "oneadmin",
      USER_PASSWORD: "admin"
    },
    video: true,
    screenshotOnRunFailure: true,
  },
})
