#!/usr/bin/env node
'use strict';
const meow = require('meow');
const nvx = require('./');
const knownErrors = require('./errors.json');

const cli = meow(
  `
Usage

  $ nvx [version ...] -- <command>

Examples

  # Use versions found in .travis.yml or circle.yml
  $ nvx -- npm test

  # Specifically use versions: 0.12 and 8
  $ nvx 0.12 8 -- npm test

  # Not limited to just npm test
  $ nvx 0.12 8 -- node oicu812.js


  ## shorthand command for npm test ##
  ##           nvx-test             ##


  # Run "npm test" using versions found
  # in .travis.yml or circle.yml
  $ nvx-test

  # Specifically use versions: 0.12 and 8
  $ nvx-test 0.12 8
  `,
  {
    '--': true,
    flags: {
      help: {
        alias: 'h'
      },
      version: {
        alias: 'v'
      }
    }
  }
);

(() => {
  if (!cli.flags[''] || cli.flags[''].length === 0) {
    return showError('Error: must provide " -- <command>"');
  }

  nvx(cli.input, cli.flags['']).catch(error => {
    return showError(error);
  });
})(cli);

function showError(error) {
  console.error(`\n  ${error}`);
  if (knownErrors.indexOf(error) > -1) {
    cli.showHelp();
  }
}
