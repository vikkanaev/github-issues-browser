class Issue {
  constructor(params) {
    this.number = params.number;
    this.created_at = params.created_at;
    this.title = params.title;
    this.body = params.body;
    this.autor = params.user.login;
  }
}

export default Issue;
