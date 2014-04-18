# String-pipeline



## Install

```bash
$ npm install string-pipeline
```

```bash
$ component install alexeyraspopov/string-pipeline
```

```bash
$ bower install string-pipeline
```

## API

TBD

## Usage

	formatters.slice = function(string, args){ return string.slice(args[0], args[1]); };

	format(['trim', 'upper', 'slice 2'], '   hello world   '); // 'LLO WORLD'


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) Alexey Raspopov
