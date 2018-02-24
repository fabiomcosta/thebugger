<p align="center">
  debug a nodejs process without inspect flags.
</p>

# thebugger &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/fabiomcosta/thebugger/blob/master/LICENSE) [![npm version](https://badge.fury.io/js/thebugger.svg)](https://badge.fury.io/js/thebugger)

**Note:** works only on node version 8 or bigger

## The problem

Debugging currently requires proving the main `node` process flags like `--inspect`
and/or `--inspect-brk`.

It works great, but most of the times I don't have full control over the process
flags because I'm executing the process through a wrapper, generally `jest`,
`mocha` or `gulp` and so many others.

This module opens the `inspector` and stops the process when `thebugger()` is called,
allowing folks to debug any nodejs process without having to pass any flags.

## Usage

Install `thebugger` as a dev dependency:

```
npm i --save-dev thebugger
# or
yarn add --dev thebugger
```

Add `thebugger()` to the line of code you want to start debugging, which is
where you'd add a `debugger;` statement.

```js
require('thebugger')();
```

Wait untill your nodejs process prints:

```
Debugger listening on ws://127.0.0.1:9222/038a3e89-b497-4558-9709-6a3da5ec3803
For help see https://nodejs.org/en/docs/inspector
```

Now you can open any Chrome DevTools and click on the ![green nodejs icon](./assets/devtools_nodejs_icon.png).
Further instructions at: https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27

You also can use any DevTools frontend of your preference.
