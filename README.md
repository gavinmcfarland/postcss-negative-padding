# PostCSS Negative Padding [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Linux Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

A [PostCSS] plugin which lets you use negative values with `padding` to increase the hit area without effecting the layout. It uses negative margin to compensate for the padding to prevent movement in the layout.

## Usage

Example:

```css
div {
    padding: -20px;
}
```

Outputs:

```css
div {
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    margin-top: -20px;
    margin-right: -20px;
    margin-bottom: -20px;
    margin-left: -20px;
}
```

## Setup

```bash
npm install postcss-negative-padding --save-dev
```


[npm-url]: https://www.npmjs.com/package/postcss-negative-padding
[npm-img]: https://img.shields.io/npm/v/postcss-negative-padding.svg
[cli-url]: https://travis-ci.org/limitlessloop/postcss-negative-padding
[cli-img]: https://img.shields.io/travis/limitlessloop/postcss-negative-padding.svg
[win-url]: https://ci.appveyor.com/project/limitlessloop/postcss-negative-padding
[win-img]: https://img.shields.io/appveyor/ci/limitlessloop/postcss-negative-padding.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[PostCSS]: https://github.com/postcss/postcss
