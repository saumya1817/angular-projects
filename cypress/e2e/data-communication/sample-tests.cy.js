/// <reference types="cypress" />
describe('Check Page Load', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:4200/')
    });

    it('displays heading', ()=>{
        cy.get('.container h1').should('contain.text', 'Data Communication Using Input Output');
    });

    it('displays input text box', ()=>{
        cy.get('.container .parentDiv .parentInput').should('exist');
    });

    it('displays button to load child', ()=>{
        cy.get('.container .parentDiv .parentSubmit').should('exist');
    });

    it('check button text', ()=>{
        cy.get('.container .parentDiv .parentSubmit').should('contain.value', 'Load Child Component');
    });

    it('click on button', ()=>{
        cy.get('.container .parentDiv .parentSubmit').click()
    });
});