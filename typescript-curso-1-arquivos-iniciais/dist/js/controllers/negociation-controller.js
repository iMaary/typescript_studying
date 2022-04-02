import { Negociation } from "../models/negociation.js";
export class NegociationController {
    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    adding() {
        const negociation = this.doNegociation();
        console.log(negociation);
    }
    doNegociation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        const negociation = new Negociation(date, quantity, value);
        return negociation;
    }
}
