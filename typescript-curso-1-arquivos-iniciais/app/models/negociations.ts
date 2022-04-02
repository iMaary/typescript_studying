import { Negociation } from "./negociation.js";

export class Negociations {
  private negociations : Array<Negociation> = [];

  pushNegociation(negociation : Negociation) {
    this.negociations.push(negociation);
  }

  list() : Array<Negociation> {
    return [...this.negociations];
  }
}
