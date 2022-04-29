import { loginExecutionTime } from "../decorators/login-execution-time.js";
import { WeekDays } from "../enums/seven-days.js";
import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { MessageView } from "../views/message-view.js";
import { NegociationsView } from "../views/negociations-view.js";

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negociations = new Negociations();
  private negociationsView = new NegociationsView('#negociationsView', true);
  private messageView = new MessageView('#messageView');

  constructor() {
    this.inputDate = document.querySelector('#data') as HTMLInputElement;
    this.inputQuantity =  document.querySelector('#quantidade') as HTMLInputElement;
    this.inputValue =  document.querySelector('#valor') as HTMLInputElement;
    this.negociationsView.update(this.negociations);
  }

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
    this.cleanForm();
    this.updateView();
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