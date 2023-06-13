describe('Novo Requerimento', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/requerimentos/novo')
  })

  it('Cria um novo requerimento com sucesso', () => {
    cy.get('select[name="disciplina"]').select('ADS030 - Manutenção de Software e DevOps')
    cy.get('select[name="prova"]').select('A1')
    cy.get('textarea[name="argumentacao"]').type('Argumentação Teste')
    cy.get('form').submit()

    cy.location('pathname').should('eq', '/requerimentos')

    cy.get('.row.border-top.pt-2.pb-2:last-child')
      .should('contain', 'ADS030 - Manutenção de Software e DevOps')
      .should('contain', 'A1')
  })
})
