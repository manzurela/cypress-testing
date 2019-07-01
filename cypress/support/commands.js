// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('typeInIframe', (elementSelector, textToType) => {
    return cy
      .iframe('[id="paymentsParentDivIdIframe"]', elementSelector).as('iFrame')
      .then($iframe => {
        cy.get('@iFrame')
        .find(elementSelector).first()    
        .type(textToType, {force: true}) 
      })
  })

  Cypress.Commands.add('iframe', (iframeSelector, elSelector) => {
    return cy
      .get(`iframe${iframeSelector || ''}`, { timeout: 10000 })
      .should($iframe => {
        expect($iframe.contents().find(elSelector||'body')).to.exist
      })
      .then($iframe => {
        return cy.wrap($iframe.contents().find('body'))
      })
  })



