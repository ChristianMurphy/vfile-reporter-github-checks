"use strict";

module.exports = reporter;

function processMessage({ file, location, message }) {
  return {
    filename: file,
    start_line: location.start.line,
    end_line: location.end.line,
    warning_level: "warning",
    message
  };
}

function processFile(vfile) {
  if (!vfile.messages) {
    return [];
  }
  return vfile.messages.map(processMessage);
}

function reporter(files, { pretty = null, raw = false } = {}) {
  const annotation = files
    .map(processFile)
    .reduce((acc, col) => acc.concat(col), []);

  if (raw) {
    return annotation;
  }

  return JSON.stringify(annotation, null, pretty);
}
