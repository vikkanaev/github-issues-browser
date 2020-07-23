/* global IssueItemsCreator, ParserError */
// eslint-disable-next-line no-unused-vars
class ResultContainer {
  constructor(selector) {
    this.contairer = document.querySelector(selector);
  }

  renderResult(result) {
    if (result.length === 0) {
      this.contairer.innerHTML = 'No issue in this repo';
    } else {
      const data = new IssueItemsCreator({ data: result }).create();
      this.contairer.innerHTML = '';
      data.forEach((element) => {
        this.contairer.append(element);
      });
    }
  }

  renderError(err) {
    let erroreMessage = 'No issue for display!';

    if (err instanceof ParserError) {
      erroreMessage = err.message;
    }
    this.contairer.innerHTML = erroreMessage;
  }

  clear() {
    this.contairer.innerHTML = '';
  }
}
