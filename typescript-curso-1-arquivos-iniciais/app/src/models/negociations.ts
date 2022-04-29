import { Negociation } from "./negociation.js";

export class Negociations {
  private negociations : Negociation[] = [];

  public pushNegociation(negociation : Negociation) {
    this.negociations.push(negociation);
  }

  public list() : readonly Negociation[] {
    return this.negociations;
  }
}
