import { Negociations } from "../models/negociations.js";
import { View } from "./view.js";

export class NegociationsView extends View<Negociations> {

  template(model : Negociations) : string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model.list().map(negociation => {
            return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(negociation.date)}</td>
                <td>${negociation.quantity}</td>
                <td>${negociation.value}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }
  update(model : Negociations) : void {
    const template = this.template(model);
    console.log(template);
    this.element.innerHTML = template;
  }
}