class AirtimeDataPage{
    card = {
        airtime: () => cy.get('#sidebar__nav__link__airtime > .sidebar__icons'),
        mobileNo: () => cy.get('#react-select-2--value > .Select-placeholder'),
        amount: () => cy.get('#amount'),
        buyAirtimeBtn: () => cy.get('#buyAirtimeForm > .btn-submit > #buyAirtimeButton'),
        cardPay: () => cy.get(':nth-child(2) > .payment_option_card_type > .new_payment_option > h5'),
        cardNo: () => cy.get('#react-select-5--value > .Select-placeholder'),
        // accountType: () => cy.get('#accountType > .select--input > .Select > .Select-control > .Select-arrow-zone'),
        // savings: () => cy.get('#react-select-6--value-item'),
        expiry: () => cy.get('#expiry'),
        cvv: () => cy.get('#cvv'),
    }

    eCash = {
        airtime: () => cy.get('#sidebar__nav__link__airtime > .sidebar__icons'),
        mobileNo: () => cy.get('#react-select-2--value > .Select-placeholder'),
        amount: () => cy.get('#amount'),
        buyAirtimeBtn: () => cy.get('#buyAirtimeForm > .btn-submit > #buyAirtimeButton'),
        eCashPay: () => cy.get(':nth-child(1) > .payment_option_card_type > .new_payment_option > h5')
    }

    pines = {
        zero: () => cy.get('.clearfix > :nth-child(1) > .btn'),
        seven: () => cy.get('.clearfix > :nth-child(5) > .btn'),
        one: () => cy.get(':nth-child(2) > .btn'),
        three: () => cy.get(':nth-child(8) > .btn'),
        pay: () => cy.get('#webpayPay')
    }

    // buyAirtimeWithCard (){
    //     this.card.airtime().click();
    //     this.card.mobileNo().type("08100066942");
    //     this.card.amount().type("100");
    //     this.card.buyAirtimeBtn().click();
    //     this.card.cardPay().click();
    //     this.card.cardNo().type(Cypress.env("cardNo"));
    //     // this.card.accountType().select();
    //     // this.card.savings().click();
    //     this.card.expiry().type(Cypress.env("expiry"));
    //     this.card.cvv().type(Cypress.env("cvv"))
        
    // }

    buyAirtimeWithEcash () {
        this.eCash.airtime().click();
        this.eCash.mobileNo().type("08100066942");
        this.eCash.amount().type("100");
        this.eCash.buyAirtimeBtn().click();
        this.eCash.eCashPay().click();
    }

    pin () {
        this.pines.zero().click();
        this.pines.seven().click();
        this.pines.one().click();
        this.pines.three().click();
        this.pines.pay().click();
    }
}

export const airtimeDataPage = new AirtimeDataPage();