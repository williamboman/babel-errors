[![Build Status](https://travis-ci.org/williamboman/babel-errors.svg?branch=export-default-subclass1)](https://travis-ci.org/williamboman/babel-errors/branches)

```sh
$ npm run babel-node

> babel-errors@1.0.0 babel-node /Users/william/Workspace/github/babel-errors
> babel-node Client.js

/Users/william/Workspace/github/babel-errors/node_modules/babel-core/lib/transformation/file/index.js:542
      throw err;
      ^

SyntaxError: /Users/william/Workspace/github/babel-errors/Person.js: 'this' is not allowed before super() (This is an error on an internal node. Probably an internal error)
    at File.buildCodeFrameError (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/lib/transformation/file/index.js:409:15)
    at NodePath.buildCodeFrameError (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/path/index.js:143:26)
    at [object Object].ThisExpression (/Users/william/Workspace/github/babel-errors/node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-es2015-classes/lib/vanilla.js:73:20)
    at NodePath._call (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/path/context.js:72:18)
    at NodePath.call (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/path/context.js:44:17)
    at NodePath.visit (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/path/context.js:102:12)
    at TraversalContext.visitQueue (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/context.js:151:16)
    at TraversalContext.visitMultiple (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/context.js:106:17)
    at TraversalContext.visit (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/context.js:193:19)
    at Function.traverse.node (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/index.js:141:17)
```
