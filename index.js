module.exports = (path) =>
  path.replace(/(https?:\/\/)|(\/)+/g, '$1$2');
