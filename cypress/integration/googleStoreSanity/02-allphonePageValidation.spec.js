
import Config from './config'
import { getPhones, allPhones, tradeOldPhones } from './utils'

describe('All phone page test',()=>{
    before(function(){
        cy.visit(Config.home)
        cy.get(Config.topLogo).should('be.visible')
    })


    it('should go to phone section',function() {
        getPhones()
        .click()
    })

    it('should go to phones page', function(){
        allPhones()
    })

    it('should verify trade your old phone',function(){
        tradeOldPhones()
    })

    it('should verify finance your pixel link',function(){
        cy.get(':nth-child(2) > .mqn2-aco').scrollIntoView().as('Finance')
        cy.get('@Finance').should('be.visible')
    })


    it('should verify preferred care protection option',function(){
        cy.get(':nth-child(3) > .mqn2-aco').scrollIntoView().as('Care')
        cy.get('@Care').should('be.visible')
    })
    it('should verify free shipping info', function(){
        cy.get('.mqn2-b1m > .mqn2-aco').scrollIntoView().as('FreeShipping')
        cy.get('@FreeShipping').should('be.visible')
    })



})