# Kata

```
npm i -g ambethia/kata
```

```
Usage
  $ kata COMMAND [OPTIONS]
Commands
  setup [LANGUAGE]
    Downloads docker images and prompts you for your Codewars access token.
  train [URL] | [KATA_ID LANGUAGE]
    Downloads the starter solution and example test files and places
    them into a directory like 'LANGUAGE/name-of-kata' in your current path.
    Automatically begins watch.
  watch PATH [LANGUAGE]
    Watch for file changes at PATH and run verify continiously when they change.
    The language is optional if your path is something like: 'LANGUAGE/name-of-kata'.
  verify PATH [LANGUAGE]
    Runs your code against the test file using the official Code Wars Docker images.
    The language is optional if your path is something like: 'LANGUAGE/name-of-kata'.
Examples
  $ kata train 50654ddff44f800200000004 javascript
  $ kata train https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
  $ kata train https://www.codewars.com/kata/multiply
  $ kata watch ./javascript/name-of-kata
  $ kata watch . javascript

You will need Docker to verify katas.
```

## Languages

I've [successfully tested](https://github.com/ambethia/katas) these languages:

* [ ] BF
* [x] C
* [x] Clojure
* [ ] CoffeeScript
* [ ] C++
* [ ] Crystal
* [ ] C#
* [ ] Dart
* [ ] Elixir
* [ ] Erlang
* [ ] F#
* [ ] Go
* [ ] Groovy
* [ ] Haskell
* [x] Java
* [x] JavaScript
* [ ] Kotlin
* [x] Lua
* [x] Nim
* [ ] Objective-C
* [ ] OCaml
* [ ] PHP
* [ ] Python
* [ ] R
* [x] Ruby
* [ ] Rust
* [x] Scala
* [ ] Shell
* [ ] Solidity
* [x] SQL
* [x] Swift
* [x] TypeScript

## TODO

* [x] Format test output.
* [ ] Submit solutions
* [ ] Atom integration
* [ ] Don't swallow output from docker pull on new language. Workaround: run
      `kata setup language` before starting a kata.
