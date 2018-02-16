// Const path = require('path');
const assert = require('assert');
// Const execa = require('execa');
const nvx = require('../index.js');
// Const nvxCli = path.resolve(__dirname, '../cli.js');

describe('nvx', () => {
  process.chdir('./lib/__tests__');
  require('assert-dotenv')();
  jest.setTimeout(process.env.TEST_TIMEOUT);

  it('uses multiple versons as specified by arguments', () => {
    return nvx([7, 4], ['node', '-v']).then(results => {
      assert(results[0].cmd === 'npx -p node@7 node -v');
      assert(results[1].cmd === 'npx -p node@4 node -v');
    });
  });

  it('uses multiple versons as found in .travis.yml or circle.yml', () => {
    return nvx([], ['node', '-v']).then(results => {
      assert(results[0].cmd === 'npx -p node@6 node -v');
      assert(results[1].cmd === 'npx -p node@4 node -v');
    });
  });

  it('fails when no command is provided', () => {
    return nvx([])
      .then(() => {
        assert(false);
      })
      .catch(error => {
        assert(error);
      });
  });

  it('fails when no versions are provided or found', () => {
    process.chdir('./more');
    return nvx()
      .then(() => {
        assert(false);
      })
      .catch(error => {
        assert(error);
      });
  });
});
