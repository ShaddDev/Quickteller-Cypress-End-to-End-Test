import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";
// import { forgotPassPage } from "@pages/ForgotPassPage";

Given("A user is on the Quickteller landing page", () => {
  loginPage.visitQuicktellerApp();
});

When("the user types in their correct username and password", () => {
    loginPage.typeUsernameAndPassword()
    loginPage.clickLoginBtn()
  });

  Then("the user should be logged in to the app", () => {
    loginPage.verifySuccessfulLogin();

  });


  // Scenario: User logs in with invalid credentials

  // Then("the user should see an error message", () => {
  //   forgotPassPage.invalidMessage()
  // })

    
  