import { escape } from "../decorators/escape.js";
import { Negociations } from "../models/negociations.js";
import { View } from "./view.js";

export class NegociationsView extends View<Negociations> {

  @escape
  protected template(model : Negociations) : string {
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
                <td>${this.ToFormat(negociation.date)}</td>
                <td>${negociation.quantity}</td>
                <td>${negociation.value}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }
  // update(model : Negociations) : void {
  //   const template = this.template(model);
  //   console.log(template);
  //   this.element.innerHTML = template;
  // }

  private ToFormat(date: Date) {
    return new Intl.DateTimeFormat().format(date);
  }
}
