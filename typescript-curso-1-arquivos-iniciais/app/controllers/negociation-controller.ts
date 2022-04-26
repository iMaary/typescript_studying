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

  public adding() : void {
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

  private doNegociation() : Negociation {
    const exp = /-/g;
    const date = new Date(this.inputDate.value.replace(exp, ','));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);
    const negociation = new Negociation(date, quantity, value);

    return negociation;
  }

  private cleanForm() : void {
    this.inputDate.value = '';
    this.inputQuantity.value = '';
    this.inputValue.value = '';
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negociationsView.update(this.negociations);
    this.messageView.update('Negociation Successfuly Added!');
  }
}