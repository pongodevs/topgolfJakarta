const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);


config.resolver.assetExts.push('json');
config.resolver.assetExts.push('txt');


module.exports = config;