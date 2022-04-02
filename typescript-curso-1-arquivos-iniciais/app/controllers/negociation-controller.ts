import { Negociation } from "../models/negociation.js";

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;

  constructor() {
    this.inputDate = document.querySelector('#data');
    this.inputQuantity =  document.querySelector('#quantidade');
    this.inputValue =  document.querySelector('#valor');
  }

  adding() : void {
    const negociation = this.doNegociation();

    console.log(negociation);
  }

  doNegociation() : Negociation {
    const exp = /-/g;
    const date = new Date(this.inputDate.value.replace(exp, ','));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);
    const negociation = new Negociation(date, quantity, value);

    return negociation;
  }
}