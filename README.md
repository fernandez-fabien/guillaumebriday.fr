# guillaumebriday.fr

Source code of [guillaumebriday.fr](https://guillaumebriday.fr) built with [Jekyll](http://jekyllrb.com/).

## Installation

```
$ bundle install
$ npm install
$ gulp
```
Copy fonts and css libs :
```
$ gulp copy
```

Compile the assets :
```
$ gulp scripts
```

## Development

The current folder will be generated into ./_site :
```
$ jekyll build --draft
```

Build the site on the preview server :
```
$ jekyll serve --draft --config _config.yml,_config.dev.yml
$ open http://127.0.0.1:4000/
```

## Production

```
$ JEKYLL_ENV=production jekyll build
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
