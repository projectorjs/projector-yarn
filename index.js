// @flow
'use strict';

const {spawn} = require('projector');

/*::
type RunOptions = {
  name: string,
  flags?: Array<string>,
};
*/

exports.run = (opts /*: RunOptions */) => {
  let args = ['run', opts.name, '--'];
  if (opts.flags) args = args.concat(opts.flags);
  return spawn('yarn', args);
};
