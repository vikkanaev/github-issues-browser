import ParserError from '../base/parser-error';

class ResultContainer {
  constructor(selector) {
    this.contairer = document.querySelector(selector);
  }

  renderResult(result) {
    if (result.length === 0) {
      this.contairer.innerHTML = 'No issue in this repo';
    } else {
      const issues = this.createIssues({ data: result });
      this.clear();
      issues.forEach((element) => {
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

  createIssues({ data }) {
    const result = data.map((e) => this.createIssue(e));
    return result;
  }

  createIssue(params) {
    this.issueContainer = document.createElement('div');
    this.issueContainer.innerHTML = `
      <div>
        <b>${params.title}</b><br>
        #${params.number} opened at ${params.created_at} by ${params.autor}
      </div>`;
    this.issueContainer.classList.add('search-result__issue');
    return this.issueContainer;
  }

  clear() {
    this.contairer.innerHTML = '';
  }
}

export default ResultContainer;
