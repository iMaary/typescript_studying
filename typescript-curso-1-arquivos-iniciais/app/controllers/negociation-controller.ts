import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negociations = new Negociations();

  constructor() {
    this.inputDate = document.querySelector('#data');
    this.inputQuantity =  document.querySelector('#quantidade');
    this.inputValue =  document.querySelector('#valor');
  }

  adding() : void {
    const negociation = this.doNegociation();

    this.negociations.pushNegociation(negociation);
    console.log(this.negociations.list());
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