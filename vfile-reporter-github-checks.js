'use strict';

module.exports = reporter;

function reporter(files, { pretty = null, raw = false } = {}) {
  const annotation = {}; // TODO

  if (raw) {
    return annotation;
  }

  return JSON.stringify(annotation, null, pretty);
}
