## dotenv-autoload [![npm version](http://img.shields.io/npm/v/dotenv-autoload.svg?style=flat-square)](https://npmjs.org/package/dotenv-autoload?style=flat-square) [![Build Status](https://img.shields.io/travis/srph/dotenv-autoload.svg?style=flat-square)](https://travis-ci.org/srph/dotenv-autoload?branch=master)
Autoload [`dotenv`](https://github.com/motdotla/dotenv/) through recursive finding.

## Why?
With and without dotenv-autoload:
```diff
- require('dotenv').load({ path: __dirname + '/../../.env' });
+ require('dotenv-autoload');
```
Nothing is bad about it. It just looks dull.

This is only useful when running modules not located in the same directory as the `.env` file.

## Getting Started
```
npm i dotenv dotenv-autoload --save-dev
```
**Note**: `dotenv` **is** a **required** dependency.

## Usage
```js
require('dotenv-autoload');
```
That's all you need to get it running.
