'use strict';

const execa = require('execa');
const nodeVersions = require('travis-or-circle');
const map = require('p-map-series');

module.exports = function(versions, command) {
  versions =
    Array.isArray(versions) && versions.length > 0
      ? versions
      : nodeVersions(process.cwd()) || [];
  command = Array.isArray(command) && command.length > 0 ? command : [];
  return Promise.resolve(true).then(() => {
    if (versions.length === 0) {
      throw Error(
        'No versions of Node were provided or found in a .travis.yml or circle.yml file'
      );
    }
    if (command.length === 0) {
      throw Error('Must provide <command>');
    }
    return map(versions, version => {
      let vCommand = versionedCommand(version, command);
      return execa(`npx`, vCommand, {
        stdio: 'inherit'
      });
    });
  });
};

function versionedCommand(version, command) {
  let vc = [`-p`, `node@${version}`];
  command.forEach(c => {
    vc.push(c);
  });
  return vc;
}
