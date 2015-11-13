[![Build Status](https://travis-ci.org/williamboman/babel-errors.svg?branch=export-default-subclass1)](https://travis-ci.org/williamboman/babel-errors/branches)

```sh
$ npm run babel-node

> babel-errors@1.0.0 babel-node /Users/william/Workspace/github/babel-errors
> babel-node Client.js

/Users/william/Workspace/github/babel-errors/node_modules/babel-core/lib/transformation/file/index.js:542
      throw err;
      ^

SyntaxError: /Users/william/Workspace/github/babel-errors/Person.js: Unexpected token (3:22)
  1 | import Base from './Base';
  2 |
> 3 | export default Person extends Base {}
    |                       ^
  4 |
    at Parser.pp.raise (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babylon/lib/parser/location.js:24:13)
    at Parser.pp.unexpected (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babylon/lib/parser/util.js:91:8)
    at Parser.pp.semicolon (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babylon/lib/parser/util.js:78:38)
    at Parser.pp.parseExport (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babylon/lib/parser/statement.js:862:25)
    at Parser.pp.parseStatement (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babylon/lib/parser/statement.js:137:90)
    at Parser.pp.parseBlockBody (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babylon/lib/parser/statement.js:529:25)
    at Parser.pp.parseTopLevel (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babylon/lib/parser/statement.js:31:8)
    at Parser.parse (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babylon/lib/parser/index.js:98:17)
    at Object.parse (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/node_modules/babylon/lib/index.js:46:50)
    at File.parse (/Users/william/Workspace/github/babel-errors/node_modules/babel-core/lib/transformation/file/index.js:474:24)

#...
```
