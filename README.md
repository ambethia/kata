# Kata

```
npm i -g ambethia/kata
```

```
Usage
  $ kata COMMAND [OPTIONS]

Commands
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

You will need Docker (and docker-compose) to verify katas.
```

## TODO

- [ ] Format test output.
- [ ] Submit solutions
- [ ] Atom integration
