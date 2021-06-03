module.exports = {
  plugins: ['chai-friendly'],
  rules: {
    'no-undef': 1,
  },
  globals: {
    beforeEach: true,
    describe: true,
    context: true,
    Cypress: true,
    cy: true,
    it: true,
  },
}
