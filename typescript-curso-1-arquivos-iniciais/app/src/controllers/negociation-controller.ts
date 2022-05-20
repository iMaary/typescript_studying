import { loginExecutionTime } from "../decorators/login-execution-time.js";
import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { WeekDays } from "../enums/seven-days.js";
import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { MessageView } from "../views/message-view.js";
import { NegociationsView } from "../views/negociations-view.js";
import { NegociationsService } from "../services/negociations-service.js";
import { printObject } from "../utils/print-object.js";

export class NegociationController {
  @domInjector('#data')
  private inputDate: HTMLInputElement;

  @domInjector('#quantidade')
  private inputQuantity: HTMLInputElement;

  @domInjector('#valor')
  private inputValue: HTMLInputElement;

  private negociations = new Negociations();
  private negociationsView = new NegociationsView('#negociationsView');
  private messageView = new MessageView('#messageView');
  private negociationsService = new NegociationsService(); 

  constructor() {
    this.negociationsView.update(this.negociations);
  }

  @inspect
  @loginExecutionTime()
  public adding() : void {
    const negociation = Negociation.createAt(
      this.inputDate.value,
      this.inputQuantity.value,
      this.inputValue.value
    );

    if (!this.isWeekday(negociation.date)) {
      this.messageView.update('Negociations on weekdays only!');
      return;
    }
    this.negociations.pushNegociation(negociation);

   printObject(negociation, this.negociations);

    this.cleanForm();
    this.updateView();
  }
  
  public importData(): void {
    this.negociationsService
      .getCurrentNegociations()
      .then(current_negociations => {
        for (let negociation of current_negociations) {
          this.negociations.pushNegociation(negociation);
        }
        this.negociationsView.update(this.negociations);
      });
  }

  private isWeekday(date: Date) {
    return date.getDay() > WeekDays.SUNDAY && date.getDay() < WeekDays.SATURDAY;
  }

  private cleanForm() : void {
    this.inputDate.value = '';
    this.inputQuantity.value = '';
    this.inputValue.value = '';
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negociationsView.update(this.negociations);
    this.messageView.update('Negociation Successfuly Added!');
  }
}