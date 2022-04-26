import { NegociationController } from './controllers/negociation-controller.js';

const controller = new NegociationController();
const form = document.querySelector('.form') as HTMLInputElement;

form.addEventListener('submit', event => {
  event.preventDefault();
  controller.adding();
});
