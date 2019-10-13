const card_table = 'table.cartTable td:nth-child(3)';
const total_amount_footer_lbl = '.totAmt';
const place_order_btn = 'Place Order';

class CardPage{

    get_table(){
        return cy.get(card_table);
    }

    get_total_amount_footer(){
        return cy.get(total_amount_footer_lbl);
    }

    clickOnNextPage(){
        return cy.contains(place_order_btn).click();
    }

    validate_card_checkout_data(){

        let val_quantity = 0;
        let val_single_price = 0;
        let val_total = 0;
        let val_amount = 0;

        this.get_table().each((element, index) => {
            
            //Ignore header
            if (index > 0){

                //get Quantity
                this.get_table().eq(index).next().prev().then((quantity) => {
                    val_quantity = Number(quantity.text());
                });

                //get Price
                this.get_table().eq(index).next().then((single_price) => {
                    val_single_price = Number(single_price.text());
                });

                //get Total
                this.get_table().eq(index).next().then((total) => {
                    val_total = Number(total.text());
                    val_amount = Number(val_amount) + val_total;
                    expect(val_total).to.eq(val_quantity * val_single_price);
                });
            }
        });

        //get total amount in ther footer page
        this.get_total_amount_footer().then((total_amount_footer)=>{
            const total = Number(total_amount_footer.text().trim());
            expect(total).to.eq(val_amount);
        });
        return this;
    }
};
export default new CardPage();