# Flowtype: Let's Build a Great Typing Experience with 3rd Party Modules

**Abstract:**

Flowtype is a great tool to statically type your JavaScript code... but a type system is only useful as soon as all external dependencies are typed as well.

There are two ways to vendor flow typings for your third party modules. In this talk, I want to explain how you can consume and deliver flow typings without any troubles and reap the benefits of a nicely typed codebase.

---

* This presentation is built with [Deckset](http://www.decksetapp.com/)
* You can find the compiled presentation [here](dist/flow-libdef-talk.pdf)

**You can also find the example code:**

* `flow-typed/*.js` -> Example libdef files used in the presentation examples 
* `flow-typed/npm/*.js` -> libdefs installed via `flow-typed` 
* `./main.js` -> Example test file to show-case `libdef` consumption

**To run the examples:**

```
npm install
./node_modules/.bin/flow check
```

**Presented on...**

* ReactJS-Berlin (12th December 2016)
