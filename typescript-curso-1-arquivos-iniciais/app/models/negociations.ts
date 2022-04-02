import { Negociation } from "./negociation.js";

export class Negociations {
  private negociations : Negociation[] = [];

  pushNegociation(negociation : Negociation) {
    this.negociations.push(negociation);
  }

  list() : readonly Negociation[] {
    return this.negociations;
  }
}
