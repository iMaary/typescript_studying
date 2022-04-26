import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { MessageView } from "../views/message-view.js";
import { NegociationsView } from "../views/negociations-view.js";
export class NegociationController {
    constructor() {
        this.negociations = new Negociations();
        this.negociationsView = new NegociationsView('#negociationsView');
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negociationsView.update(this.negociations);
    }
    adding() {
        const negociation = this.doNegociation();
        if (negociation.date.getDay() > 0 && negociation.date.getDay() < 6) {
            this.negociations.pushNegociation(negociation);
            this.cleanForm();
            this.updateView();
        }
        else {
            this.messageView.update('Negociations on weekdays only!');
        }
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
    updateView() {
        this.negociationsView.update(this.negociations);
        this.messageView.update('Negociation Successfuly Added!');
    }
}
