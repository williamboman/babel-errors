[![Build Status](https://travis-ci.org/williamboman/babel-errors.svg?branch=arrow-func-async)](https://travis-ci.org/williamboman/babel-errors/branches)

```sh
$ npm run babel

> babel-errors@1.0.0 babel /Users/william/Workspace/github/babel-errors
> babel *.js

Error: invalid.js: We don't know what to do with this node type. We were previously a Statement but we can't fit in here?
    at NodePath.insertBefore (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/path/modification.js:62:13)
    at NodePath.unshiftContainer (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/path/modification.js:254:15)
    at Scope.push (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/scope/index.js:1031:41)
    at remap (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/lib/transformation/internal-plugins/shadow-functions.js:82:16)
    at PluginPass.ThisExpression (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/lib/transformation/internal-plugins/shadow-functions.js:22:7)
    at newFn (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/visitors.js:278:19)
    at NodePath._call (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/path/context.js:76:18)
    at NodePath.call (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/path/context.js:48:17)
    at NodePath.visit (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/path/context.js:106:12)
    at TraversalContext.visitQueue (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babel-traverse/lib/context.js:155:16)
```
