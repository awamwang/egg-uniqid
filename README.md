# egg-uniqid

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-uniqid.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-uniqid
[travis-image]: https://img.shields.io/travis/eggjs/egg-uniqid.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-uniqid
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-uniqid.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-uniqid?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-uniqid.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-uniqid
[snyk-image]: https://snyk.io/test/npm/egg-uniqid/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-uniqid
[download-image]: https://img.shields.io/npm/dm/egg-uniqid.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-uniqid

<!--
Description here.
-->

## Install

```bash
$ npm i egg-uniqid --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.uniqid = {
  enable: true,
  package: 'egg-uniqid',
};
```

see [uniqid](https://www.npmjs.com/package/uniqid) for more detail.

## Configuration

```js
// {app_root}/config/config.default.js
exports.uniqid = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
