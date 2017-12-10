module.exports = function oneliner(str) {
  return (str.raw? str.raw[0] : str).replace(/[\r\n\t ]+/g, ' ');
};
