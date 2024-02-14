import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { sendReceiveMoneyPage } from "@pages/SendReceiveMoneyPage";

When ("the user navigates to the send receive section and follows the prompt", () => {
    sendReceiveMoneyPage.transferToAcct();
})