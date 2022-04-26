import { NegociationController } from './controllers/negociation-controller.js';

const controller = new NegociationController();
const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adding();
  });
} else {
  throw Error('It is not possible init the application. Please verify if the form exists');
}
