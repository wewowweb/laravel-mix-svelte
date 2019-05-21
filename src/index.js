let mix = require('laravel-mix');

class Svelte {
  dependencies() {
      this.requiresReload = true;
      return ['svelte', 'svelte-loader'];
  }
  
  webpackRules () {
      return {
          test: /\.(html|svelte)$/,
          exclude: /node_modules/,
          use: 'svelte-loader',
      }
  }
  
  boot() {
      let svelte = require('svelte');
      let loader = require('svelte-loader');
  }
}

mix.extend('svelte', new Svelte());