let mix = require("laravel-mix");

class Svelte {
	constructor() {
		this.options = {};
	}

	dependencies() {
		this.requiresReload = true;
		return ["svelte", "svelte-loader"];
	}

	register(options) {
		this.options = { ...this.options, ...options };
	}

	webpackRules() {
		return {
			test: /\.(html|svelte)$/,
			use: {
				loader: "svelte-loader",
				options: this.options
			}
		};
	}

    webpackConfig(webpackConfig) {
        webpackConfig.resolve.mainFields = [
            'svelte',
            'browser',
            'module',
            'main',
        ];
        webpackConfig.resolve.extensions = ['.mjs', '.js', '.svelte'];
        webpackConfig.resolve.alias.svelte = path.resolve(
            'node_modules',
            'svelte'
        );
    }

	boot() {
		let svelte = require("svelte");
		let loader = require("svelte-loader");
	}
}

mix.extend("svelte", new Svelte());
