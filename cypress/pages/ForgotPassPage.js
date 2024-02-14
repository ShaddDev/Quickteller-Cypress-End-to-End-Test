// class ForgotPassPage {
//     elements = {
//         invalidText: () => cy.get('.toast__text'),
//         forgotPass: () => cy.get('.account-form__forgot'),
//         emailInputField: () => cy.get('.base-input'),
//         resetPass: () => cy.get(':nth-child(3) > .btn')
//     }

//     invalidMessage (){
//         this.elements.invalidText().should("be.visible")
//     }

//     forgotPassBtn () {
//         this.elements.forgotPass().click();
//     }

//     resetPass () {
        
//         this.elements.resetPass().click();
//     }
// }

// export const forgotPassPage = new ForgotPassPage();