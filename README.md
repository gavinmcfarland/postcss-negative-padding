# postcss-negative-padding [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Linux Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

[postcss-negative-padding] lets you do this in CSS.

```css
.example {}

/* becomes */

.example {}
```

## Usage

Add [postcss-negative-padding] to your build tool:

```bash
npm install postcss-negative-padding --save-dev
```

#### Node

Use [postcss-negative-padding] to process your CSS:

```js
require('postcss-negative-padding').process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Use [postcss-negative-padding] as a plugin:

```js
postcss([
  require('postcss-negative-padding')()
]).process(YOUR_CSS);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Use [postcss-negative-padding] in your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
  return gulp.src('./src/*.css').pipe(
    postcss([
      require('postcss-negative-padding')()
    ])
  ).pipe(
    gulp.dest('.')
  );
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Use [postcss-negative-padding] in your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
        require('postcss-negative-padding')()
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
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
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
