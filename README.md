# postcss-negative-padding [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Linux Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

A PostCSS plugin which lets you use negative values within the `padding` property and creates appropriate negative margins to match

```css
.example {
    padding: -20px;
}

/* becomes */

.example {
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
[cli-url]: https://travis-ci.org/mindthetic/postcss-negative-padding
[cli-img]: https://img.shields.io/travis/mindthetic/postcss-negative-padding.svg
[win-url]: https://ci.appveyor.com/project/mindthetic/postcss-negative-padding
[win-img]: https://img.shields.io/appveyor/ci/mindthetic/postcss-negative-padding.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[postcss-negative-padding]: https://github.com/mindthetic/postcss-negative-padding
[PostCSS]: https://github.com/postcss/postcss
