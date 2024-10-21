describe('DemoBlaze E2E Tests', () => {  
  const username = 'testnew' + Math.floor(Math.random() * 1000);  
  const password = 'Test1234';  
  
  beforeEach(() => {
      cy.visit('https://www.demoblaze.com/');
  });

  it('Should register a new user', () => {      
      cy.get('#signin2').click();      
      cy.wait(2000);      
      cy.get('#sign-username').type(username);      
      cy.get('#sign-password').type(password);      
      cy.get('button[onclick="register()"]').click();      
      cy.wait(2000);  
  });

  it('Should login with the new user', () => {      
      cy.get('#login2').click();      
      cy.wait(2000);      
      cy.get('#loginusername').type(username);      
      cy.get('#loginpassword').type(password);      
      cy.get('button[onclick="logIn()"]').click(); 
      cy.wait(2000);      
      cy.get('#nameofuser').contains('Welcome ' + username).should('be.visible');  
  });

  it('Should add Samsung Galaxy S6 to the cart', () => {      
      cy.contains('Samsung galaxy s6').click();      
      cy.wait(2000);      
      cy.contains('Add to cart').click();      
      cy.on('window:alert', (str) => {          
          expect(str).to.equal('Product added.');      
      });      
      cy.get('#cartur').click();      
      cy.contains('Samsung galaxy s6').should('be.visible');  
  });
});
