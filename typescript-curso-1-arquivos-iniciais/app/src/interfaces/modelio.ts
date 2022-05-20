import { Printable } from "../utils/printable.js";
import { Comparable } from "./comparable.js";

export interface Modelio<T> extends Printable, Comparable<T> {

}