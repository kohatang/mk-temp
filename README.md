# mk-temp [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Make a temp directory or file

## Installation

```sh
$ npm install -g mk-temp
```

## Usage

Make a file

```sh
mk-temp
```

Make a directory

```
mk-temp -d
```

Make a file with path

```
mk-temp ~/
```

Set string length(default:5)

```
mk-temp -l 8
```

## License

MIT


[npm-image]: https://badge.fury.io/js/mk-temp.svg
[npm-url]: https://npmjs.org/package/mk-temp
[travis-image]: https://travis-ci.org/koihatano/mk-temp.svg?branch=master
[travis-url]: https://travis-ci.org/koihatano/mk-temp
[daviddm-image]: https://david-dm.org/koihatano/mk-temp.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/koihatano/mk-temp
[coveralls-image]: https://coveralls.io/repos/koihatano/mk-temp/badge.svg
[coveralls-url]: https://coveralls.io/r/koihatano/mk-temp
