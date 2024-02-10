it("Web Test", () => {
    const userName = "standard_user"
    const passWord = "secret_sauce"
    const btnLogin = "#log-in"
    
    cy.visit("https://demo.applitools.com/");
    cy.get('#username').should('be.visible').and('be.enabled')
    cy.get('#username').click().type(userName)
    cy.get('#password').click().type(passWord)
    cy.get(btnLogin).click()

    cy.get('#time').should('have.text', 'Your nearest branch closes in: 30m 5s')
})


