// const { ApiClient } = require('./api-client.js');

class IssuesParser {
  constructor() {
    this.client = new ApiClient();
  }

  async get(query) {
    try {
      const response = await (this.client.get(query));
      const rowIssues = response.filter((e) => !e.pull_request);
      const result = rowIssues.map((e) => new Issue(e));
      return result;
    } catch {
      throw new PropertyError('Repo or User not found');
    }
  }
}

// module.exports = { IssuesParser };
