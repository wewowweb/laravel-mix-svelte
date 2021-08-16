let mix = require("laravel-mix");
let path = require("path");

class Svelte {
	constructor() {
		this.options = {};
		this.extensions = [];
		this.ruleExtensions = "";
	}

	dependencies() {
		this.requiresReload = true;
		return ["svelte", "svelte-loader"];
	}

	register(options, extensions = []) {
		this.options = { ...this.options, ...options };
		this.extensions = [ '.mjs', '.js', '.svelte', ...extensions];
		let extensionRules = extensions.map(function(item) {
			return item.startsWith('.') ? item.substring(1) : item;
		});
		this.ruleExtensions = [ "html|svelte", ...extensionRules ].join('|');
	}

    webpackRules() {
        return [
            {
                test: new RegExp('\.('+ this.ruleExtensions + ')$'),
                use: [
                    { loader: 'babel-loader', options: Config.babel() },
                    { loader: 'svelte-loader', options: this.options }
                ]
            },
            {
                test: /\.(mjs)$/,
                use: { loader: 'babel-loader', options: Config.babel() }
            }
        ];
    }

    webpackConfig(webpackConfig) {
        webpackConfig.resolve.mainFields = [
            'svelte',
            'browser',
            'module',
            'main',
        ];
        webpackConfig.resolve.extensions = this.extensions;

        webpackConfig.resolve.alias = webpackConfig.resolve.alias || {};
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
