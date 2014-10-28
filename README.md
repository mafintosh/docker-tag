# docker-tag

Tag docker iamges

```
npm install docker-tag
```

## Usage

``` js
var tag = require('docker-tag')

tag('mafintosh/dev', 'my-registry.com/mafintosh/dev', function(err) {
  console.log('was tagged?', !err)
})
```

## Command line tool

```
npm install -g docker-tag
docker-tag --help
```

## License

MIT
