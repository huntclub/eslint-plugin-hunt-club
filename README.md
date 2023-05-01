# eslint-plugin-hunt-club

Provides custom linting rules from Hunt Club.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Validate][validate-image]][validate-url]
[![Maintainability][maintainability-image]][maintainability-url]
[![Test Coverage][test-coverage-image]][test-coverage-url]
[![License: MIT][license-image]][license-url]

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Rules](#rules)
  - [`hunt-club/require-icon-postfix`](#hunt-clubrequire-icon-postfix)
    - [Examples](#examples)
    - [When Not To Use It](#when-not-to-use-it)
    - [Version](#version)
    - [Futher Reading](#futher-reading)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```bash
$ yarn add -D eslint-plugin-hunt-club
```

Add it to your `.eslintrc.js`:

```js
module.exports = {
  plugins: ['hunt-club'],
  rules: {
    'hunt-club/require-icon-postfix': 'error',
  },
};
```

## Rules

### `hunt-club/require-icon-postfix`

Require the `Icon` postfix for all Lucide icon components

#### Examples

Examples of incorrect code for this rule:

```ts
import {Settings} from 'lucide-react';
```

Examples of correct code for this rule:

```ts
import {SettingsIcon} from 'lucide-react';
```

#### When Not To Use It

When you do not care which import alias is used for importing icons from
`lucide-react`.

#### Version

This rule was introduced in package version [v0.1.0](./CHANGELOG.md#v0.1.0)

#### Futher Reading

<a href="https://lucide.dev/" target="_blank">Lucide Dev</a>

## License

MIT

[npm-image]:
  https://img.shields.io/npm/v/eslint-plugin-hunt-club.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-plugin-hunt-club
[downloads-image]:
  https://img.shields.io/npm/dm/eslint-plugin-hunt-club.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/eslint-plugin-hunt-club
[validate-image]:
  https://github.com/huntclub/eslint-plugin-hunt-club/actions/workflows/validate.yml/badge.svg
[validate-url]:
  https://github.com/huntclub/eslint-plugin-hunt-club/actions/workflows/validate.yml
[maintainability-image]:
  https://api.codeclimate.com/v1/badges/18dba42406bddd047f9b/maintainability
[maintainability-url]:
  https://codeclimate.com/repos/644edbcd01e3f255f9af1cf9/maintainability
[test-coverage-image]:
  https://api.codeclimate.com/v1/badges/18dba42406bddd047f9b/test_coverage
[test-coverage-url]:
  https://codeclimate.com/repos/644edbcd01e3f255f9af1cf9/test_coverage
[license-image]:
  https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
