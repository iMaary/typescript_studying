export class Negociation {
    constructor(date, quantity, value) {
        this.date = date;
        this.quantity = quantity;
        this.value = value;
    }
    get volume() {
        return this.value * this.quantity;
    }
}
