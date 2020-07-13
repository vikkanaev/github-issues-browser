// const { IssuesParser } = require('./issues-parser.js');

const parser = new IssuesParser();
const searchUser = document.querySelector('.search__user-input');
const searchRepo = document.querySelector('.search__repo-input');
const searchButton = document.querySelector('.search__button');

const loader = document.querySelector('.loader');
const resultContainer = document.querySelector('.search-result');

const handleInput = () => {
  const userName = searchUser.value;
  const repoName = searchRepo.value;
  // TODO: выводить сообщение пока не заполнены userName и repoName. Поиск не начинать
  // написать addEventListener на change полей searchUser и searchRepo
  loader.style.display = 'block';
  resultContainer.innerHTML = '';

  const queryString = `${userName}/${repoName}`;
  parser.get(queryString)
    .then((result) => renderIssues(result))
    .catch((err) => stopRender(err));
};

const renderIssues = function (result) {
  if (result.length === 0) {
    resultContainer.innerHTML = 'No issue in this repo';
  } else {
    const data = new IssueItemsCreator({ data: result }).create();
    resultContainer.innerHTML = '';
    data.forEach((element) => {
      resultContainer.append(element);
    });
  }
  loader.style.display = 'none';
};

const stopRender = function (err) {
  let erroreMessage = 'No issue for display!';

  if (err instanceof PropertyError) {
    erroreMessage = err.message;
  }
  resultContainer.innerHTML = erroreMessage;
  loader.style.display = 'none';
};

searchButton.addEventListener('click', _.debounce(_.throttle(handleInput, 1000)));
