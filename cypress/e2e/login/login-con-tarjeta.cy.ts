describe('Login con tarjeta', () => {

  const usuario =  {
    tarjeta : '4243216155',
    documento: '72255243',
    tipoDocumento: 2
  }

  it('visitamos pagina de login', () => {
    cy.visit('auth');
  })

  it('login correcto',() => {
    cy.get('#mat-input-0').type(usuario.tarjeta)
    cy.get('#mat-input-1').type(usuario.documento)
    if(usuario.tipoDocumento == 1){
      cy.get('#mat-select-value-1').click()
      cy.get('#mat-option-0').click()
    }else {
      cy.get('#mat-select-value-1').click()
      cy.get('#mat-option-1').click()
    }
    cy.get('#mat-input-0').should('have.value', '**-****-****')
    cy.get('#mat-input-1').should('have.value', '********')
    cy.get('#btn-login-con-tarjeta').contains('Ingresar')
    cy.get('#btn-login-con-tarjeta').click()
  })

})
