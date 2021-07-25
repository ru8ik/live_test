describe('Rubik Test',() => {
    it('oolo login - logout',()=> {
    //cy.viewport(1200, 980)  (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'pubreporting@investingchannel.com', 'DataBeat@IC1234', '2927fb44b499251f76490047fad2f7e227d17235', 'a87d7e3197ccb064dc0c2e73f675528902d2fc87', NULL, NULL)
    cy.visit('https://dashboard.oolo.io')

    cy.contains('Welcome')
    cy.url().should('include', 'login')
    cy.get('input[name="email"]')
      .type('rubik@oolo.io')
      .should('have.value', 'rubik@oolo.io')

    cy.get('input[name="password"]')
      .type('123456.Com')
      .should('have.value', '123456.Com')
      cy.contains('Sign In').click()  

      cy.url().should('include', 'dashboard.oolo.io/')


      

      cy.wait(2000)
      cy.get('.MuiAvatar-fallback', { timeout: 10000 }).click()  
      cy.get('.MuiListItem-button').click()
      cy.url().should('include', 'login')
  


    })
})

