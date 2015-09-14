# one-liner
> Transform a string to a one line string by converting and merging line breaks/carriages, tabs, spaces.

## Why

If you want to display some strings in the console that could have potentially
have spaces, line breaks etc. that are not really important.

## Install

```
$ npm install --save one-liner
```

## Usage

```js
var oneliner = require('oneliner');

oneliner(`Hey !
This is my text file
  with a lot of blabla and some code:
    function t(a, b) {
      return a + b;
    }`);

// Output :
// Hey ! This is my text file with a lot of blabla and some code: function t(a, b) { return a + b; }
```

It replaces and collapses `\t\r\n` and spaces.
