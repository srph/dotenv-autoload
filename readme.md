## dotenv-autoload
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