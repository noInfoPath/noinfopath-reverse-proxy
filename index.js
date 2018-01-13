var request = require("request-promise"),
	fs = require("fs-extra"),
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
		if(fs.existsSync(path)) {
			var config = fs.readJsonSync(path);
			return Promise.resolve(config);
		} else {
			return Promise.reject(new Error("Configuration not found"));
		}
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
