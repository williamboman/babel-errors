[![Build Status](https://travis-ci.org/williamboman/babel-errors.svg?branch=this-before-super)](https://travis-ci.org/williamboman/babel-errors/branches)

```sh
$ ./node_modules/.bin/babel index.js
SyntaxError: index.js: 'this' is not allowed before super() (This is an error on an internal node. Probably an internal error)
undefined
```

```js
class Parent {
    constructor() {}
}

class Child extends Parent {
    scopedFunctionWithThis = () => {
        this.name = {};
    }

    constructor() {
        super();

        // This works fine though
        // this.scopedFunctionWithThis = () => {
        //     this.name = {};
        // };
    }
}
```
