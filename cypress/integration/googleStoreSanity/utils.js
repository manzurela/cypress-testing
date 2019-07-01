import Config from './config'


//Frequently used functions across tests and pages

export const getPhones = () => {
    return cy.get(Config.phones)
}

export const checkSearchBar = () => {
    cy.get('.header-search-icon > .highlightable > svg').
    should('be.visible')
}

export const  checkFooter = () => {
    cy.contains('Log in & Sign Up').scrollIntoView().as('Login&SignIn')
    cy.get('@Login&SignIn').should('be.visible')
}

export const allPhones = () => {
    cy.get
    ('[data-state="active"][style=""] > .subnav-container > .left-side > .heading > .cta-button')
    .click()
    cy.url().should('include','category/phones')
}

export const tradeOldPhones = () => {
    cy.get('.mqn2-b1l > .mqn2-aco').scrollIntoView().as('Trade')
    cy.get('@Trade').should('be.visible')
}