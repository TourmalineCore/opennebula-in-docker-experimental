describe(`OpenNebula Happy Path`, () => {

  it(``, () => {
    cy.visit("/fireedge/sunstone")

    cy.getByData("login-user")
      .click()
      .type("oneadmin")
  })

})
