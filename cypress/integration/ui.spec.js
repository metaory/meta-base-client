const faker = require('faker')
import { log } from '../support/utils'
// ////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////// //
// describe('loads the app', () => {
//   it('loads', () => {
//     // cy.visit('http://127.0.1.1:3000')
//     cy.visit('http://127.0.0.1:3000')
//   })
//   // ------------------------------------------------------------------------ //
//   it('look for titles', () => {
//     cy.log('titles exists')
//     cy.contains('meta')
//     cy.contains('index')
//   })
// })
// ////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////// //
describe('loads the app', () => {
  it('Navigate to www.trokka.com in a browser', () => {
    cy.visit('http://stage.trokka.com')
    // cy.visit('http://127.0.1.1:3000')
    // cy.visit('http://127.0.0.1:3000')
  })
  // ------------------------------------------------------------------------ //
  it('Enter Mobile Number in Mobile Number field', () => {
    cy
      .get(
        '.justify-around > .q-field > :nth-child(1) > .q-field-content > .q-if > .q-if-inner > .col',
      )
      .click()
      .type('foobar')
    // cy
    //   .contains('.q-field-error')
      //     cy.get('[data-cy=dummy-fill-btn]').as('fill-btn')
//     cy.get('[data-cy=dummy-reset-btn]').as('reset-btn')
  })
//   // ======================================================================== //
//   context('initial state', () => {
//     it('form fields', () => {
//       cy
//         .get('@foo-input')
//         .should('be.empty')
//         .and('not.be.disabled')
//       cy
//         .get('@bar-input')
//         .should('be.empty')
//         .and('not.be.disabled')
//     })
//     // ---------------------------------------------------------------------- //
//     it('form buttons', () => {
//       cy
//         .get('@fill-btn')
//         .should('be.visible')
//         .and('not.have.class', 'disabled')
//       cy
//         .get('@reset-btn')
//         .should('be.visible')
//         .should('have.class', 'disabled')
//     })
//   })
//   // ======================================================================== //
//   context('inputs', () => {
//     const dummyText1 = faker.name.findName()
//     const dummyText2 = faker.name.findName()
//     it('type random on foo field', () => {
//       cy
//         .get('@foo-input')
//         .click()
//         .type(dummyText1)
//     })
//     // ---------------------------------------------------------------------- //
//     it('reset button should be enabled', () => {
//       cy
//         .get('@reset-btn')
//         .should('be.visible')
//         .should('not.have.class', 'disabled')
//     })
//     // ---------------------------------------------------------------------- //
//     it('title test', () => {
//       log('title should show ', dummyText1)
//       cy
//         .get('@title')
//         .should('be.visible')
//         .and('have.text', dummyText1)
//     })
//     // ---------------------------------------------------------------------- //
//     it('type random on bar field', () => {
//       cy
//         .get('@bar-input')
//         .click()
//         .type(dummyText2)
//     })
//     // ---------------------------------------------------------------------- //
//     it('title test', () => {
//       log('title should show ', dummyText1 + ' ' + dummyText2)
//       cy
//         .get('@title')
//         .should('be.visible')
//         .and('have.text', dummyText1 + ' ' + dummyText2)
//     })
  })
//   // ======================================================================== //
//   context('resets', () => {
//     it('hit reset', () => {
//       cy.get('@reset-btn').click()
//     })
//     // ---------------------------------------------------------------------- //
//     it('reset button should be disabled', () => {
//       cy
//         .get('@reset-btn')
//         .should('be.visible')
//         .should('have.class', 'disabled')
//     })
//     // ---------------------------------------------------------------------- //
//     it('title', () => {
//       cy.get('@title').should('be.empty')
//       // cy.wait(10000)
//       // process.stdin.resume()
//     })
//   })
//   // ======================================================================== //
// })
// // ////////////////////////////////////////////////////////////////////////// //
// // ////////////////////////////////////////////////////////////////////////// //
