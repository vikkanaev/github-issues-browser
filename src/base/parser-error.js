class ParserError extends Error {
  constructor(message) {
    super();
    // Error.call(this, message);
    this.name = 'ParserError';
    this.message = `Error: ${message}`;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ParserError);
    } else {
      this.stack = (new Error()).stack;
    }
  }
}

export default ParserError;
