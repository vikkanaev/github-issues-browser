class ApiClient {
  constructor() {
    this.apiUrl = 'https://api.github.com/repos';
    this.xhr = new XMLHttpRequest();
  }

  get(query) {
    const { xhr } = this;
    xhr.abort();
    return new Promise((resolve, reject) => {
      xhr.open('GET', `${this.apiUrl}/${query}/issues?per_page=30`);
      xhr.onload = () => {
        if (xhr.status !== 200) {
          reject(xhr.status);
          return;
        }
        resolve(JSON.parse(xhr.response));
      };
      xhr.send();
    });
  }
}

export default ApiClient;
