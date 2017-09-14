var request = require("request-promise"),
	fs = require("fs"),
	args = require('minimist')(process.argv.slice(2)),
	proxy
	;

//console.log("Start NoInfoPath Reverse Proxy in ", platform);

function resloveConfig(path) {
	if(path.indexOf("http") === 0) {
		return request(path)
			.then(function(results){
				return JSON.parse(results);
			})
			.catch(function(err){
				throw err;
			});
	} else {
		console.log("TODO: Handle local file system.");
		return Promise.resolve({redbird: {proxies: []}})
	}
}

resloveConfig(args.config)
	.then(function(config){
		proxy = require('redbird')(config.redbird.init);

		config.redbird.proxies.forEach(function (prx) {
			proxy.register(prx.source, prx.dest, prx.options);
		});
	})
	.catch(function(err){
		console.error(err);
	});


//Create proxy for each item in the config.json file.
