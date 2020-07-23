// eslint-disable-next-line no-unused-vars
class SearchContainer {
  constructor(selector) {
    this.contairer = document.querySelector(selector);
    this.searchUser = document.querySelector('.search__user-input');
    this.searchRepo = document.querySelector('.search__repo-input');
    this.searchButton = document.querySelector('.search__button');
  }

  queryString() {
    return `${this.searchUser.value}/${this.searchRepo.value}`;
  }

  searchButton() {
    return this.searchButton;
  }
}
