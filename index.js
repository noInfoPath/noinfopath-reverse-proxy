var platform = process.env.NOINFOPATHDEBUG || "prod",
	config = require("./config")[platform],
	proxy = require('redbird')({
		port: config.inboundPort,
		ssl: config.ssl
	});

//Create proxy for each item in the config.json file.
config.proxies.forEach(function (prx) {
	proxy.register(prx.source, prx.dest, {ssl: true});
});



// LetsEncrypt requires a minimal web server for handling the challenges, this is by default on port 3000
// it can be configured when initiating the proxy. This web server is only used by Redbird internally so most of the time
// you  do not need to do anything special other than avoid having other web services in the same host running
// on the same port.

//
// HTTP2 Support using LetsEncrypt for the certificates
//
// var proxy = require('redbird')({
// 	letsencrypt: {
// 		path: __dirname + '/certs',
// 		port: 9999
// 	},
// 	ssl: {
// 		http2: true,
// 	}
// });
