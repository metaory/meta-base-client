export const log = (name = '', message = '') =>
  Cypress.log({ name, message: ` ${message} ` })
