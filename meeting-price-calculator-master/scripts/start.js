'use strict'
const spawn = require('cross-spawn');
const path = require('path');

const env = Object.create( process.env );
env.NODE_ENV = 'development';

const webpack = path.resolve(__dirname, '..', 'node_modules', '.bin', 'webpack-dev-server');

spawn.sync(webpack, ['--config', path.join(__dirname, 'configs', 'webpack.config.js')], { env: env, stdio: 'inherit' });
