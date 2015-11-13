[![Build Status](https:/travis-ci.org/williamboman/babel-errors.svg?branch=export-default-subclass1)](https:/travis-ci.org/williamboman/babel-errors/branches)

```sh
$ npm run babel-node

> babel-errors@1.0.0 babel-node /path-to-lib/babel-errors/babel-errors
> babel-node Client.js

/path-to-lib/babel-errors/node_modules/babel-register/node_modules/babel-core/lib/transformation/file/index.js:541
      throw err;
      ^

SyntaxError: /path-to-lib/babel-errors/Person.js: 'this' is not allowed before super() (This is an error on an internal node. Probably an internal error)
    at File.buildCodeFrameError (/path-to-lib/babel-errors/node_modules/babel-register/node_modules/babel-core/lib/transformation/file/index.js:408:15)
    at NodePath.buildCodeFrameError (/path-to-lib/babel-errors/node_modules/babel-traverse/lib/path/index.js:143:26)
    at [object Object].ThisExpression (/path-to-lib/babel-errors/node_modules/babel-plugin-transform-es2015-classes/lib/vanilla.js:73:20)
    at NodePath._call (/path-to-lib/babel-errors/node_modules/babel-traverse/lib/path/context.js:72:18)
    at NodePath.call (/path-to-lib/babel-errors/node_modules/babel-traverse/lib/path/context.js:44:17)
    at NodePath.visit (/path-to-lib/babel-errors/node_modules/babel-traverse/lib/path/context.js:102:12)
    at TraversalContext.visitQueue (/path-to-lib/babel-errors/node_modules/babel-traverse/lib/context.js:151:16)
    at TraversalContext.visitMultiple (/path-to-lib/babel-errors/node_modules/babel-traverse/lib/context.js:106:17)
    at TraversalContext.visit (/path-to-lib/babel-errors/node_modules/babel-traverse/lib/context.js:193:19)
    at Function.traverse.node (/path-to-lib/babel-errors/node_modules/babel-traverse/lib/index.js:141:17)

npm ERR! Darwin 14.5.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "run" "babel-node"
npm ERR! node v5.0.0
npm ERR! npm  v3.3.6
npm ERR! code ELIFECYCLE
npm ERR! babel-errors@1.0.0 babel-node: `babel-node Client.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the babel-errors@1.0.0 babel-node script 'babel-node Client.js'.
npm ERR! This is most likely a problem with the babel-errors package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     babel-node Client.js
npm ERR! You can get their info via:
npm ERR!     npm owner ls babel-errors
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /path-to-lib/babel-errors/npm-debug.log
#...
```
