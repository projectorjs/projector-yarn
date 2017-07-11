// @flow
'use strict';

const yarn = require('./');

function clean(str) {
  return str.replace(
    /Done in .*s\.\n$/,
    'Done in x.xxs.\n'
  );
}

test('.run()', () => {
  return yarn.run({
    name: 'fixture',
    flags: ['--flag']
  }).then(result => {
    expect(clean(result)).toMatchSnapshot();
  });
});
