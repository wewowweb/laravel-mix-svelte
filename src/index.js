let mix = require('laravel-mix');
let sass = require('node-sass');

class Svelte {

  register( config = {withSass: false} ) {
    this.config = config;    
  }  

  dependencies() {
      this.requiresReload = true;
      return ['svelte', 'svelte-loader'];
  }
  
  webpackRules () {
      return {
          test: /\.(html|svelte)$/,
          use: {
              loader: 'svelte-loader',
              options: {
                  preprocess: {
                      style: ({ content, attributes }) => {
                          // if withSass is not enabled, do nothing.
                          if (!this.config.withSass) return;
                          // if style tag dosent have attirbute type="text/scss", do nothing.
                          if (attributes.type !== 'text/scss') return;

                          return new Promise((fulfil, reject) => {
                              // options for node-sass
                              let renderArgs = {
                                  data: content,
                                  includePaths: ['src'],
                                  sourceMap: true,
                                  outFile: 'x' // this is necessary, but is ignored
                              };
                              // callback triggered after node-sass render process
                              let renderCallback = (err, result) => {
                                  if (err) return reject(err);
                                  fulfil({
                                      code: result.css.toString(),
                                      map: result.map.toString()
                                  });
                              }
                              // invoke node-sass
                              sass.render(renderArgs, renderCallback);
                          });
                      }
                  }
              }
          }
      }
  }
  
  boot() {
      let svelte = require('svelte');
      let loader = require('svelte-loader');
  }
}

mix.extend('svelte', new Svelte());