# projector-yarn

> Run [Yarn](https://yarnpkg.com/) with ease

## Installation

```sh
yarn add --dev projector-yarn
```

## Usage

```js
import * as yarn from 'projector-yarn';

export async function build() {
  await yarn.install({ flags: ['--production'] });
  await yarn.run({ name: 'script-name', flags: ['--dev'] });
}
```
