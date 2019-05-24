# Laravel Mix Svelte

A Laravel Mix extension for Svelte support.

## Why?

Svelte is an interesting new approach in the JavaScript space, created by [@Rich_Harris](https://twitter.com/Rich_Harris). While traditional frontend frameworks do the bulk of their work in the browser, Svelte does this in compilation step. They provide a fluid syntax for writing expressive code, but compile it down to small, framework-less vanilla JavaScript.

If you don't know what Svelte is, we highly recommend starting with Rich Harris' talk [Rethinking Reactivity](https://youtu.be/AdNJ3fydeao) from YGLF Code Camp 2019, his [introductory blog post](https://svelte.dev/blog/svelte-3-rethinking-reactivity) or - if you're more of a hands-on type - Svelte's [interactive tutorial](https://svelte.dev/tutorial/).

_This package is still in active development, so you might want to [watch](https://github.com/wewowweb/laravel-mix-svelte/subscription) the repository to be notified of future changes._

## Installation

You can install the package via npm or yarn:

```bash
npm install wewowweb/laravel-mix-svelte
```

## Usage

After installing it, just require it in your `webpack.mix.js` file like so:

```js
const mix = require("laravel-mix");

require("laravel-mix-svelte");

mix
  .js("resources/js/app.js", "public/js")
  .sass("resources/sass/app.scss", "public/css")
  .svelte();
```

### Future planned improvements

- [ ] Add hotReload functionality
- [ ] Add noPreserveState functionality
- [ ] Add ExtractCss functionality for CSS
- [ ] Add ExtractCss functionality for SASS
- [ ] Add ExtractCss functionality for LESS
- [ ] Add ExtractCss functionality for Stylus
- [ ] Add tests.

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please email **gal@wewowweb.com** instead of using the issue tracker.

## Credits

- [We Wow Web](https://github.com/wewowweb)
- [Gal Jakic](https://github.com/morpheus7CS)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
