## dotenv-autoload [![npm version](http://img.shields.io/npm/v/dotenv-autoload.svg?style=flat-square)](https://npmjs.org/package/dotenv-autoload?style=flat-square) [![Build Status](https://img.shields.io/travis/srph/dotenv-autoload.svg?style=flat-square)](https://travis-ci.org/srph/dotenv-autoload?branch=master)
Autoload dotenv through recursive finding.

## Why?
- Because I use `dotenv` a lot;
- And because I have 2 configs --
- Which leads to a line similar to this:
```js
require('dotenv').load({ path: __dirname + '/../../.env' });
```
Nothing is bad about it. It just looks dull.

## Getting Started
```
npm i dotenv dotenv-autoload --save-dev
```
**Note**: `dotenv` **is** a **required** dependency.

## Usage
```
require('dotenv-autoload');
```
That's all you need to get it running.