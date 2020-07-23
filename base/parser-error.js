function ParserError(message) {
  Error.call(this, message);
  this.name = 'ParserError';
  this.message = `Error: ${message}`;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ParserError);
  } else {
    this.stack = (new Error()).stack;
  }
}

ParserError.prototype = Object.create(Error.message);
