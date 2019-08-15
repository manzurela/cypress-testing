
import Config from './config'
import { checkSearchBar, checkFooter } from '../googleStoreSanity/utils'

describe('home page test',()=>{
    before(function(){
        cy.visit(Config.home)
        cy.get(Config.topLogo).should('be.visible')
    })


    it('should validate Search Bar',function() {
        checkSearchBar()
    })

    it('should validate help link on top nav', function(){
        cy.get('#desktop-help-button > .nav-link > .highlightable').should('be.visible')
    })

    it('should validte cart on top nav',function(){
        cy.get(':nth-child(7) > .nav-link > .highlightable').should('be.visible')
    })


    it('should go footer and validate sign in link',function(){
        checkFooter()
        

        
    })
})