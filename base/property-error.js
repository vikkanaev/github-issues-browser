function PropertyError(message) {
  Error.call(this, message);
  this.name = 'PropertyError';
  this.message = `Error: ${message}`;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, PropertyError);
  } else {
    this.stack = (new Error()).stack;
  }
}

PropertyError.prototype = Object.create(Error.message);
