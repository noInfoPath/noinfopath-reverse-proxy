var platform = process.env.NOINFOPATHDEBUG || "prod",
	config = require("./config")[platform],
	proxy = require('redbird')({port: config.inboundPort});


// Route to any local ip, for example from docker containers.
config.proxies.forEach(function(prx){
	proxy.register(prx.source, prx.dest);
});
