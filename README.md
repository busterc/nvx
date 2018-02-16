# nvx [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Run commands on multiple node versions as specified from .travis.yml, circle.yml or arguments; uses npx and is ideal for testing.

## Prerequisites

* Only requires `npx` so, >= `npm@5.2.0`
* Includes both `nvx` and `nvx-test` CLI commands

## Installation

```sh
$ npm install nvx --global
```

## CLI Usage

```sh
$ nvx --help

Usage

  $ nvx [version ...] -- <command>

Examples

  # Use versions found in .travis.yml or circle.yml
  $ nvx -- npm test

  # Specifically use versions: 0.12 and 8
  $ nvx 0.12 8 -- npm test

  # Not limited to just npm test
  $ nvx 0.12 8 -- node ./oicu812.js


  ## shorthand command for npm test ##
  ##           nvx-test             ##


  # Run "npm test" using versions found
  # in .travis.yml or circle.yml
  $ nvx-test

  # Specifically use versions: 0.12 and 8
  $ nvx-test 0.12 8
```

## License

ISC © [Buster Collings](https://about.me/buster)

[npm-image]: https://badge.fury.io/js/nvx.svg
[npm-url]: https://npmjs.org/package/nvx
[travis-image]: https://travis-ci.org/busterc/nvx.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/nvx
[daviddm-image]: https://david-dm.org/busterc/nvx.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/busterc/nvx
[coveralls-image]: https://coveralls.io/repos/busterc/nvx/badge.svg
[coveralls-url]: https://coveralls.io/r/busterc/nvx
