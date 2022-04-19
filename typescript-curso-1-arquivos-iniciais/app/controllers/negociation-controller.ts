import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { MessageView } from "../views/message-view.js";
import { NegociationsView } from "../views/negociations-view.js";

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negociations = new Negociations();
  private negociationsView = new NegociationsView('#negociationsView');
  private messageView = new MessageView('#messageView');

  constructor() {
    this.inputDate = document.querySelector('#data');
    this.inputQuantity =  document.querySelector('#quantidade');
    this.inputValue =  document.querySelector('#valor');
    this.negociationsView.update(this.negociations);
  }

  adding() : void {
    const negociation = this.doNegociation();

    this.negociations.pushNegociation(negociation);
    this.negociationsView.update(this.negociations);
    this.messageView.update('Negociation Successfuly Added!');
    this.cleanForm();
  }

  doNegociation() : Negociation {
    const exp = /-/g;
    const date = new Date(this.inputDate.value.replace(exp, ','));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);
    const negociation = new Negociation(date, quantity, value);

    return negociation;
  }

  cleanForm() : void {
    this.inputDate.value = '';
    this.inputQuantity.value = '';
    this.inputValue.value = '';
    this.inputDate.focus();
  }
}