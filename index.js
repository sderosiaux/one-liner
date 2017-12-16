module.exports = function oneliner(str) {
  return (str.raw ? str.join('') : str).replace(/[\r\n\t ]+/g, ' ')
}
