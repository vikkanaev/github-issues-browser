/* eslint-disable no-unused-vars */
class IssueItemsCreator {
  constructor({ data }) {
    this.data = data;
    this.createIssue = (params) => {
      const issueContainer = document.createElement('div');
      issueContainer.innerHTML = `
      <div>
        <b>${params.title}</b><br>
        #${params.number} opened at ${params.created_at} by ${params.autor}
      </div>`;
      issueContainer.classList.add('search-result__issue');
      return issueContainer;
    };
  }

  create() {
    const result = this.data.map((e) => this.createIssue(e));
    return result;
  }
}
