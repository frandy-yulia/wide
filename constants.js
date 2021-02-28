const argv = require('yargs').argv;

const server = {
    host: argv.host || '127.0.0.1',
    port: argv.port || '3000',
    path: __dirname
}

const ssl = {
    keys: argv.ssl
}

module.exports = {
    project: argv._[0] || '.',
    server,
    ssl
};