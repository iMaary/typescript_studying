import { Printable } from "../utils/printable.js";

export class Negociation implements Printable {

  constructor(
    private readonly _date: Date, 
    public readonly quantity: number, 
    public readonly value: number
  ) {}

  public static createAt(dateString: string, quantityString: string, valueString: string): Negociation {
    const exp = /-/g;
    const date = new Date(dateString.replace(exp, ','));
    const quantity = parseInt(quantityString);
    const value = parseFloat(valueString);
    const negociation = new Negociation(date, quantity, value);

    return negociation;
  }

  get date() : Date {
    const date = new Date(this._date.getTime());
    return date;
  }

  get volume() : number {
    return this.value * this.quantity;
  }

  public toText(): string {
    return `
      Date: ${this._date},
      Quantity: ${this.quantity},
      Value: ${this.value}
    `;
  }

  public isEqual(negociation: Negociation): boolean {
     return this.date.getDate() == negociation.date.getDate()
              && this.date.getMonth() == negociation.date.getMonth()
              && this.date.getFullYear() == negociation.date.getFullYear();
  }
}