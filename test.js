// @flow
'use strict';

const yarn = require('./');

test('.run()', () => {
  return yarn.run({
    name: 'fixture',
    flags: ['--flag']
  }).then(result => {
    expect(result).toMatchSnapshot();
  });
});
