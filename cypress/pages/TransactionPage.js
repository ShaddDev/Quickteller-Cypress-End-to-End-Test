// class TransactionPage{
//     elements = {
//         transactionClick: () => cy.get('.sidebar__main__list > :nth-child(2) > .sidebar__main__list__item__link'),
//         createInvoice: () => cy.get('.empty-state__actions > .button-icon'),
//         createInvoiceBtn: () => cy.get('.create__footer > .btn'),
//         customerName: () => cy.get('.dropdown-trigger__target > .base-input'),
//         continueBtn: () => cy.get('.create__footer > .btn--primary')
//     }

//     transactionFunct (){
//         this.elements.transactionClick().click();
//     }
//     createInvoiceFunct (){
//         this.elements.createInvoice().click();
//         this.elements.createInvoiceBtn().click();
//         this.elements.customerName().type("Serah Adebayo");
//         this.elements.continueBtn().click();
//     }

// }

// export const transactionPage = new TransactionPage();