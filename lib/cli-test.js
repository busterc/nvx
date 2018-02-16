#!/usr/bin/env node
'use strict';
const meow = require('meow');
const nvx = require('./');
const knownErrors = require('./errors.json');

const cli = meow(
  `
Usage

  $ nvx-test [version ...]

Examples

  # Run "npm test" using versions found
  # in .travis.yml or circle.yml
  $ nvx-test

  # Specifically use versions: 0.12 and 8
  $ nvx-test 0.12 8
  `,
  {
    '--': true,
    alias: {
      h: 'help',
      v: 'version'
    }
  }
);

cli.flags[''] = ['npm', 'test'];

nvx(cli.input, cli.flags['']).catch(error => {
  return showError(error);
});

function showError(error) {
  console.error(`\n  ${error}`);
  if (knownErrors.indexOf(error) > -1) {
    cli.showHelp();
  }
}
