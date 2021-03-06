import { Modelio } from "../interfaces/modelio.js";
import { Negociation } from "./negociation.js";

export class Negociations implements Modelio<Negociations> {
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

  public isEqual(negociations: Negociations): boolean {
    return JSON.stringify(this.negociations) === JSON.stringify(negociations.list());
  }
}
