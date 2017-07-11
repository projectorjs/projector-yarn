// @flow
'use strict';

const bufferedSpawn = require('buffered-spawn');

/*::
type RunOptions = {
  name: string,
  flags?: Array<string>,
};
*/

exports.run = (opts /*: RunOptions */) => {
  let args = ['run', opts.name, '-s', '--'];
  if (opts.flags) args = args.concat(opts.flags);
  return bufferedSpawn('yarn', args);
};
