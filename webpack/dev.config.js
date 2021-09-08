var baseWebpackConfig = require('./webpack.config')
var merge = require('webpack-merge')

process.env.NODE_ENV = 'development'
module.exports = merge(baseWebpackConfig, {
})