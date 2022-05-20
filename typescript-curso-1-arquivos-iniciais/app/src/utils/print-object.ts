import { Printable } from "./printable.js";

export function printObject(...objects: Array<Printable>) {
  for (let object of objects) {
    console.log(object.toText());    
  }
}
