describe(`OpenNebula Happy Path`, () => {

  it(``, () => {
    cy.visit("http://localhost:2616/fireedge/sunstone")

    cy.getByData("login-user")
      .click()
      .type("oneadmin")
  })

})
