describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.99.co', {
      headers: {
          'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      }
  });
  })
})