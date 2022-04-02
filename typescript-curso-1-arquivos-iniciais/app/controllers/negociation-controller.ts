import { Negociation } from "../models/negociation.js";

export class NegociationController {
  private inputDate;
  private inputQuantity;
  private inputValue;

  constructor() {
    this.inputDate = document.querySelector('#data');
    this.inputQuantity =  document.querySelector('#quantidade');
    this.inputValue =  document.querySelector('#valor');
  }

  adding() {
    const negociation = new Negociation(
      this.inputDate.value,
      this.inputQuantity.value,
      this.inputValue.value
    );

    console.log(negociation);
  }
}