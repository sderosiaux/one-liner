module.exports = function oneliner(str) {
  return str.replace(/[\r\n\t ]+/g, ' ');
};
