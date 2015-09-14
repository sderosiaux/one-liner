export default function oneliner(str) {
  return str.replace(/[\r\n\t ]+/g, ' ');
}


const t = oneliner(`Hey !
This is my text file
  with a lot of blabla and some code:
    function t(a, b) {
      return a + b;
    }`);

console.log(t);
