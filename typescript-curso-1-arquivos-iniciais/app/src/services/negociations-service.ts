import { CurrentNegociations } from "../interfaces/current-negociations.js";
import { Negociation } from "../models/negociation.js";

export class NegociationsService {
   
  public getCurrentNegociations(): Promise<Negociation[]> {
    return fetch('http://localhost:8080/dados')
      .then(res => res.json())
      .then((data: CurrentNegociations[]) => {
        return data.map(current_data => {
          return new Negociation(new Date(), current_data.quantity, current_data.amount);
        });
      });
  }

}
