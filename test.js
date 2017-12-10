const oneliner = require('.')

const tap = require('tap')

const oneline = oneliner(`Hey !
This is my text file
with a lot of blabla and some code:
  function t(a, b) {
    return a + b;
  }`)

tap.equal(oneline, 'Hey ! This is my text file with a lot of blabla and some code: function t(a, b) { return a + b; }')

const another = oneliner`This is amazing.
It truly is phenomenal
based on what they say`

tap.equal(another, 'This is amazing. It truly is phenomenal based on what they say')
