// @flow
'use strict';

const spawn = require('projector-spawn');

/*::
type RunOptions = {
  name: string,
  flags?: Array<string>,
  cwd?: string,
};
*/

exports.run = (opts /*: RunOptions */) => {
  let args = ['run', opts.name, '-s', '--'];

  if (opts.flags) {
    args = args.concat(opts.flags);
  }

  return spawn('yarn', args, {
    cwd: opts.cwd,
  });
};
