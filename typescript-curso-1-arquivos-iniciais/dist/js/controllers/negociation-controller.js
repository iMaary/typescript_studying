import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
export class NegociationController {
    constructor() {
        this.negociations = new Negociations();
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    adding() {
        const negociation = this.doNegociation();
        this.negociations.pushNegociation(negociation);
        console.log(this.negociations.list());
        this.cleanForm();
    }
    doNegociation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        const negociation = new Negociation(date, quantity, value);
        return negociation;
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
