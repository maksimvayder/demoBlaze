/// <reference types='cypress' />
import { faker } from '@faker-js/faker';

describe('Demoblaze E2E Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  const generateUser = {
    email: faker.internet.email(),
    password: Math.ceil(Math.random() * 1000)

  };

  it('should register a new user', () => {
    cy.get('#signin2').click();
    cy.get('#sign-username').type(generateUser.email);
    cy.get('#sign-password').type(generateUser.password);
    cy.get('button[onclick="register()"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Sign up successful.');
    });
  });

  it('should login with the registered user', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type('newuser');
    cy.get('#loginpassword').type('password123');
    cy.get('button[onclick="logIn()"]').click();
    cy.get('#nameofuser').should('contain', 'Welcome newuser');
  });

  it('should add Samsung Galaxy s6 to the cart', () => {
    cy.get('.card-title').contains('Samsung galaxy s6').click();
    cy.get('.btn-success').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added');
    });
    cy.get('#cartur').click();
    cy.get('.success').should('contain', 'Samsung galaxy s6');
  });
});
