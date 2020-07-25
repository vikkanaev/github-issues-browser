// eslint-disable-next-line no-unused-vars
class Loader {
  constructor(selector) {
    this.contairer = document.querySelector(selector);
  }

  activate() {
    this.contairer.style.display = 'block';
  }

  deactivate() {
    this.contairer.style.display = 'none';
  }
}
