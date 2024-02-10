/// <reference types="Cypress" />

context('Dev finances Agilizei', () => {

//hooks
// trechos que executam antes e depois do teste
// before antes de todos os testes
// beforeEach antes de cada teste
// after depois de todos os testes
// afterEach depois de cada teste

    beforeEach(() => {
        cy.visit('https://dev-finance.netlify.app');    
        cy.get('#data-table tbody tr').should('have.length', 0)
    }
    
    )
    it.only('Cadastrar entradas', () => {

        

        cy.get('#transaction .button').click() //id + classe
        cy.get('#description').type('Mesada') //id
        cy.get('[name=amount]').type(12) // atributos
        cy.get('[type="date"]').type('2021-03-21') // atributos
        cy.get('button').contains('Salvar').click() // tipo e valor

        cy.get('#data-table tbody tr').should('have.length', 1)
    });
//cadastrar saídas

it('Cadastrar saidas', () => {
    cy.visit('https://dev-finance.netlify.app/#');

    cy.get('#transaction .button').click() //id + classe
    cy.get('#description').type('Mesada') //id
    cy.get('[name=amount]').type(-12) // atributos
    cy.get('[type="date"]').type('2021-03-21') // atributos
    cy.get('button').contains('Salvar').click() // tipo e valor

    cy.get('#data-table tbody tr').should('have.length', 1)
})

    it.only('Remover entradas e saidas', () => {
        const entrada = 'Mesada'
        const saida = 'KinderOvo'

        cy.get('#transaction .button').click() //id + classe
        cy.get('#description').type('entrada') //id
        cy.get('[name=amount]').type(100) // atributos
        cy.get('[type="date"]').type('2021-03-21') // atributos
        cy.get('button').contains('Salvar').click() // tipo e valor

        cy.get('#transaction .button').click() //id + classe
        cy.get('#description').type('saida') //id
        cy.get('[name=amount]').type(-35) // atributos
        cy.get('[type="date"]').type('2021-03-21') // atributos
        cy.get('button').contains('Salvar').click() // tipo e valor

        cy.contains(entrada)


    });
    
});