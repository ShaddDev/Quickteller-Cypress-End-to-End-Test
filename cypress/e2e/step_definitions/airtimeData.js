import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { airtimeDataPage } from "@pages/AirtimeDataPage";

When ("the user navigates to the airtime recharge section and follows the prompt", () => {
    // airtimeDataPage.buyAirtimeWithCard
    airtimeDataPage.buyAirtimeWithEcash();
    airtimeDataPage.pin();
})