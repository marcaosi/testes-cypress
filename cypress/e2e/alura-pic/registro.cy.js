describe("Teste de registro de usuário", () => {
    beforeEach(() => {
        cy.visit("https://alura-fotos.herokuapp.com/")
    })

    it("Verifica mensagens de validação", () => {
        cy.contains("a", "Register now").click()
        
        cy.contains("button", "Register").click()
        cy.contains("ap-vmessage", "Email is required!").should("be.visible")

        cy.contains("button", "Register").click()
        cy.contains("ap-vmessage", "Full name is required!").should("be.visible")
        cy.contains("ap-vmessage", "User name is required!").should("be.visible")
        cy.contains("ap-vmessage", "Password is required!").should("be.visible")
    })

    it("Verifica e-mail inválido", () => {
        cy.contains("a", "Register now").click()

        cy.get("input[formcontrolname=email]").type("email")
        cy.contains("button", "Register").click()
        cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible")
    })

    it("Verifica senha inválida", () => {
        cy.contains("a", "Register now").click()

        cy.get("input[formcontrolname=password]").type("123")
        cy.contains("button", "Register").click()
        cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible")
    })
})