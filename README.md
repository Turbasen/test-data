# @turbasen/test-data

[![Build status](https://app.wercker.com/status/9a6200203fe9b7adc707758bf6b83adc/s "wercker status")](https://app.wercker.com/project/bykey/9a6200203fe9b7adc707758bf6b83adc)
[![Codacy grade](https://img.shields.io/codacy/grade/5a6982cb37fe4f669a94786d8418854d.svg "Codacy grade")](https://www.codacy.com/app/Turbasen/test-data)
[![Codacy coverage](https://img.shields.io/codacy/coverage/5a6982cb37fe4f669a94786d8418854d.svg "Codacy coverage")](https://www.codacy.com/app/Turbasen/test-data)
[![NPM downloads](https://img.shields.io/npm/dm/@turbasen/test-data.svg "NPM downloads")](https://www.npmjs.com/package/@turbasen/test-data)
[![NPM version](https://img.shields.io/npm/v/@turbasen/test-data.svg "NPM version")](https://www.npmjs.com/package/@turbasen/test-data)
[![Node version](https://img.shields.io/node/v/@turbasen/test-data.svg "Node version")](https://www.npmjs.com/package/@turbasen/test-data)
[![Dependency status](https://img.shields.io/david/Turbasen/test-data.svg "Dependency status")](https://david-dm.org/Turbasen/test-data)

Test data for internal Nasjonal Turbase API development.

## Getting started

Download [Docker for Mac or Windows](https://www.docker.com/products/docker).

Run in this directory:

```
$ docker-compose up
```

## Usage

### api.users

```js
const users = require('@turbasen/test-data').api.users;
```

Docker is now watching for changes and will run the test suite automatically.

## [MIT lisenced](https://github.com/Turbasen/test-data/blob/master/LICENSE)
