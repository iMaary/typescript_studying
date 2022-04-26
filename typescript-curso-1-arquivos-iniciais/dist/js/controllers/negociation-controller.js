import { WeekDays } from "../enums/seven-days.js";
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
        if (!this.isWeekday(negociation.date)) {
            this.messageView.update('Negociations on weekdays only!');
            return;
        }
        this.negociations.pushNegociation(negociation);
        this.cleanForm();
        this.updateView();
    }
    isWeekday(date) {
        return date.getDay() > WeekDays.SUNDAY && date.getDay() < WeekDays.SATURDAY;
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
