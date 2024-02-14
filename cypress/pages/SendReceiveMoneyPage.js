class SendReceiveMoneyPage {
    toAcc = {
        sendRec: () => cy.get('#sidebar__nav__link__transfer > .sidebar__icons'),
        transToAcc: () => cy.get('#sidebar__nav__link__transfer > .sidebar__icons'),
        accctNo:   () => cy.get('#sidebar__nav__link__transfer > .sidebar__icons'),
        fcmb: () => cy.get('#react-select-7--value > .Select-value > .Select-value-label > .select__custom__label'),
        amount: () => cy.get('#amount'),
        mobile: () => cy.get('#receipientMobile')
    }

    transferToAcct () {
        this.toAcc.sendRec().click();
        this.toAcc.transToAcc().click();
        this.toAcc.accctNo().click();
        this.toAcc.fcmb().click();
        this.toAcc.amount().type("20,000");
        this.toAcc.mobile().type("09023454765");
    }
}

export const sendReceiveMoneyPage = new SendReceiveMoneyPage();