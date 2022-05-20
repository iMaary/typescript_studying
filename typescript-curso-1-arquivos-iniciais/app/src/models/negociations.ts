import { Printable } from "../utils/printable.js";
import { Negociation } from "./negociation.js";

export class Negociations extends Printable {
  private negociations : Negociation[] = [];

  public pushNegociation(negociation : Negociation) {
    this.negociations.push(negociation);
  }

  public list() : readonly Negociation[] {
    return this.negociations;
  }

  public toText(): string {
    return JSON.stringify(this.negociations, null, 2);
  }
}
