export class Negociation {

  constructor(
    private readonly _date: Date, 
    public readonly quantity: number, 
    public readonly value: number
  ) {}

  get date() : Date {
    const date = new Date(this._date.getTime());
    return date;
  }

  get volume() : number {
    return this.value * this.quantity;
  }

  public static createAt(dateString: string, quantityString: string, valueString: string): Negociation {
    const exp = /-/g;
    const date = new Date(dateString.replace(exp, ','));
    const quantity = parseInt(quantityString);
    const value = parseFloat(valueString);
    const negociation = new Negociation(date, quantity, value);

    return negociation;
  }
}