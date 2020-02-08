# nvx [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

> Run commands on any specified Node version, or as defined in .travis.yml or circle.yml

## Prerequisites

- Only requires `npx` so, >= `npm@5.2.0`
- Includes `nvx` and `nvx-test` CLI commands (also `nvxt` alias for `nvx-test`)

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
  $ nvx 8.1.2 -- node ./oicu812.js


  ## shorthand commands for npm test ##
  ##           nvx-test              ##
  ##           nvxt                  ##


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
[greenkeeper-image]: https://badges.greenkeeper.io/busterc/nvx.svg
[greenkeeper-url]: https://greenkeeper.io/
