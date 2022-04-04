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
}