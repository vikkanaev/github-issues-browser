/* global SearchContainer, ResultContainer, Loader, IssuesParser, _ */
const searchContainer = new SearchContainer('.search');
const resultContainer = new ResultContainer('.search-result');
const loader = new Loader('.loader');
const parser = new IssuesParser();

function handleResult(result) {
  resultContainer.renderResult(result);
  loader.deactivate();
}

function handleError(err) {
  resultContainer.renderError(err);
  loader.deactivate();
}

function handleInput() {
  resultContainer.clear();
  loader.activate();
  parser.get(searchContainer.queryString())
    .then((result) => handleResult(result))
    .catch((err) => handleError(err));
}

searchContainer.searchButton.addEventListener('click', _.debounce(_.throttle(handleInput, 1000)));
