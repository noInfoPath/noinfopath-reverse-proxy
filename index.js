var platform = process.env.NOINFOPATHDEBUG || "prod",
	config = require("./config")[platform],
	proxy = require('redbird')(config.redbird.init);

console.log("Start NoInfoPath Reverse Proxy in ", platform);

//Create proxy for each item in the config.json file.
config.redbird.proxies.forEach(function (prx) {
	proxy.register(prx.source, prx.dest, prx.options);
});
