import { Negociation } from "./negociation.js";

export class Negociations {
  private negociations : Array<Negociation> = [];

  pushNegociation(negociation : Negociation) {
    this.negociations.push(negociation);
  }

  list() : ReadonlyArray<Negociation> {
    return this.negociations;
  }
}
