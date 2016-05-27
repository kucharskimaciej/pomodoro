const dotenv = require('dotenv');
const webpack = require('webpack');

const {join, resolve} = require('path');
const getConfig = require('hjs-webpack');

const NODE_ENV = process.env.NODE_ENV;
const isDev  = NODE_ENV === 'development';

const root    = resolve(__dirname);
const src     = join(root, 'source');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');

var config = getConfig({
    isDev: isDev,
    in: join(src, 'app.js'),
    out: dest,
    html: (context) => ({
        'index.html': context.defaultTemplate({
            title: 'Pomodoro!',
            publicPath: isDev ? 'http://localhost:3000/' : ''
        })
    })
});

// ENV variables
const dotEnvVars = dotenv.config();
const environmentEnv = dotenv.config({
    path: join(root, 'config', `${NODE_ENV}.config.js`),
    silent: true
});
const envVariables = Object.assign({}, dotEnvVars, environmentEnv);

const defines = Object.keys(envVariables)
        .reduce((memo, key) => {
            memo[`__${key.toUpperCase()}__`] = JSON.stringify(envVariables[key]);
            return memo;
        }, {
            __NODE_ENV__: JSON.stringify(NODE_ENV)
        });

config.plugins = [
    new webpack.DefinePlugin(defines)
].concat(config.plugins);
// END ENV variables

// CSS modules
const cssModulesNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;

const matchCssLoaders = /(^|!)(css-loader)($|!)/;

// existing css loader
const cssLoader = config.module.loaders.filter(l => l && l.loader && l.loader.match(matchCssLoaders))[0] || null;

const newCssLoader = Object.assign({}, cssLoader, {
    test: /\.module\.css$/,
    include: [src],
    loader: cssLoader.loader.replace(matchCssLoaders, `$1$2?modules&localIdentName=${cssModulesNames}$3`)
});

config.module.loaders.push(newCssLoader);
cssLoader.test = new RegExp(`[^module]${cssLoader.test.source}`);
cssLoader.loader = newCssLoader.loader;

config.module.loaders.push({
    test: /\.css$/,
    include: [modules],
    loader: 'style!css'
});
// CSS modules

// postcss
config.postcss = [].concat([
    require('precss')({}),
    require('autoprefixer')({}),
    require('cssnano')({})
]);
// END postcss

// Roots
config.resolve.root = [src, modules];
config.resolve.alias = {
    'containers': join(src, 'containers'),
    'components': join(src, 'components'),
    'utils': join(src, 'utils'),
    'css': join(src, 'styles'),
    'styles': join(src, 'styles')
};
// end Roots

module.exports = config;