
import Config from './config'
import { getPhones } from './utils'

describe('Pixel3a checkout test',()=>{
    before(function(){
        cy.visit(Config.home)
        cy.get(Config.topLogo).should('be.visible')
    })


    it('should go to phone section',function() {
        getPhones().click()
    })

    it('should go to pixel3a', function(){
        cy.
        get('[data-state="active"][style=""] > .subnav-container > .left-side > .heading > .cta-button',
        { timeout: 10000 })
        .click()
        cy.url().should('include','category/phones')
    })

    it('should tap Pixel 3a buy now button',function(){
        cy.
        get('#meet-pixel-3a-promo > .mqn2-ap9 > .mqn2-ajw > .mqn2-ajy > .mqn2-ak4 > .mqn2-aao',
        { timeout: 10000 })
        .click()
        
    })

    it('should tap Pixel 3A select button',function(){
        cy.
        get('div.mqn-lobby__cards-container > div:first-of-type div.mqn-button',
        { timeout: 10000 }).click()  
    })

    it ('land on carrier selection page and should get the unlocked version',function(){
        cy.
        get('div.mqn-h-cards__container__inner > div:first-of-type',
        { timeout: 10000 }).click()
    })

    it('should land on color selection page',function(){
        cy.contains('Which color?').should('be.visible')
        
    })
    // The following test cases try to check whether 
    //an user can go back and select carrier options again
    it('should go back to the carrier selection page and again get the unlocked version',function(){

        cy.get('[jsaction="JIbuQc:V3upec"] > .mdc-button').scrollIntoView().as('BackBtn')
        cy.get('@BackBtn').click({force:true})
        cy.wait(3000) //have to change this explicit wait later
        
    })
    
    it('should verify Verizon and Google Fi option',function(){
        cy.contains('Verizon').should('be.visible')
        cy.contains('Meet a different kind of phone').should('be.visible')
    })

    it('should select Unlocked carrier option again',function(){
       
        cy.get('[jsaction="JIbuQc:NPBnCf"] > .mdc-button',).
        scrollIntoView().as('Next')
        cy.get('@Next').click()
    })

    it.skip('should select the Black color',function(){
        cy.wait(5000) //have to change this explicit wait later
        cy.get('div.mqn-lobby-swatch__cards-container > div:first-of-type div.mqn-button')
        .scrollIntoView().as('Black')
        cy.get('@Black').click()
    })

    it('should select White color', function(){
        cy.wait(5000)
        cy.xpath('//*[@id="mqn-slick-gallery"]/div[3]/div/div[2]/div[2]/div').
        click({force:true})
    })

    it('lands on services page',function(){
        cy.wait(2000)
        cy.contains('Extra Services').as('Services')
        cy.get('@Services').should('be.visible')
           
    })

    it('should skip the services',function(){
        cy.get('.mqn-headline__button > .mqn-button').click()
        
    })
    it('should land on review your choice and continue page',function(){
        
        cy.contains('Review your choices').as('Review')
        cy.get('@Review').should('be.visible')
        
    
    })

    it('should add to cart',function(){
        cy.wait(7000) //elements take too long to load. Need to find 
        //a better way to handle this
        
        cy.get('.cta-button-container > .mdc-button').should('be.visible').click({force:true})
        cy.wait(3000)
    })

    it('verify the phone is Unlocked indeed and proceed to the cart ',function(){
        cy.wait(7000) //elements take too long to load and needed explicit wait, 
        //need to find a better way to handle this
         cy.contains('Unlocked').should('be.visible')
         cy.get('[jsaction="JIbuQc:IXVHne"] > .mdc-button').click({force:true})
         cy.wait(7000)
     })

    it('should verify shopping cart and proceed to checkout',function(){
        cy.wait(2000)
        //need to find a better way instead of explicit wait
        cy.contains('Shopping cart').should('be.visible')
        cy.get('.cart-checkout-section button.check-out-button.guest-checkout-button')
        .click({force:true})

        cy.wait(3000)
    })

    it('should be on checkout page',function(){
        cy.get('.header-text-7').as('CheckoutTxt')
        cy.get('@CheckoutTxt').should('be.visible')
    })
   

    it('should enter save changes button to trigger error', function(){
        cy.typeInIframe.find('div.b3-submit-button').scrollIntoView().as('SaveChanges')
        cy.get('@SaveChanges').click({force:true})
         //trigger error messages in the iframe, zip code error validation
        cy.typeInIframe.find('p.b3id-input-error').should('have.text','ZIP code is required')
    })

     
    
    it('should enter email',function(){
        
        cy.typeInIframe(Config.guestEmailPlaceHolder,Config.guestEmail)
        
        cy.typeInIframe(Config.guestEmailConfirmPlaceHolder,Config.guestEmail)
       
    })

    //in the follwoing test cases fill up the address 
    
    it('should fill up the name, address',function(){
        cy.typeInIframe(Config.namePlaceHolder,Config.name)
        cy.typeInIframe(Config.shippingAddressPlaceHolder,Config.shippingAddress)
    })
    it('should fill up city, state, zip', function(){
        cy.typeInIframe(Config.cityPlaceHolder,Config.city)
        cy.typeInIframe(Config.statePlaceHolder,Config.state)
        cy.typeInIframe(Config.zipPlaceHolder,Config.zip)
    })

    it('should fill up the phone number', function(){
        cy.typeInIframe(Config.guestPhNumberPlaceHolder,Config._phNumber)
    })

    it('should enter save changes button to confirm that error is gone', function(){
        cy.typeInIframe.find('div.b3-submit-button').scrollIntoView().as('SaveChanges')
        cy.get('@SaveChanges').click({force:true})
        
        cy.typeInIframe.find('p.b3id-input-error').should('have.text','ZIP code is required')
    })

    it('should validate that error message is gone', function(){
        cy.typeInIframe.find('p.b3id-input-error').should('have.text','ZIP code is required')
    })
   

   
})