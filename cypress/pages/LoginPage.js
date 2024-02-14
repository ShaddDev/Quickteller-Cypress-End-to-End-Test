class LoginPage {
    elements = {
        openApp: () => cy.visit("/login"),
        usernameInputField: () => cy.get('#accountLoginFormUsername'),
        passwordInputField: () => cy.get('#accountLoginFormPassword'),
        loginBtn: () => cy.get('#accountLoginFormButton'),
        LoginSuccess: () => cy.get('#qtLogo')

    };

    visitQuicktellerApp() {
        this.elements.openApp();
    };

    typeUsernameAndPassword(){
        this.elements.usernameInputField().type(Cypress.env("emailaddress"));
        this.elements.passwordInputField().type(Cypress.env("password"));
    };

    clickLoginBtn(){
        this.elements.loginBtn().click();
    };

    // verifySuccessfulLogin() {
    //     this.elements.otpInputField().type("");
    //     this.elements.otpBtn().click();
    // }

    verifySuccessfulLogin(){
        this.elements.LoginSuccess().should("be.visible");
    }
}

export const loginPage = new LoginPage();