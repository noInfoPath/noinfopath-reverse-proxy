# NoInfoPath Proxy Server

A simple reverse proxy server built on Redbird.

## Configuration sample

In this example we added the source host names to the /etc/hosts file. Also,
set an environment variable called NOINFOPATHDEBUG = "debug" to use the
debug configuration. Otherwise "prod" is used by default.

```json
{
	"debug": {
		"inboundPort": 8080,
		"proxies": [{
				"source": "rest.foobar.com",
				"dest": "http://localhost:4000"
			},
			{
				"source": "app.foobar.com",
				"dest": "http://localhost:3000"
			},
			{
				"source": "service.foobar.com",
				"dest": "http://localhost:3001"
			}
		]
	},
	"prod": {
		"inboundPort": 80,
		"proxies": [{
				"source": "restapi.myco.com",
				"dest": "http://localhost:4000"
			},
			{
				"source": "app.myco.com",
				"dest": "http://localhost:3000"
			},
			{
				"source": "service.myco.com",
				"dest": "http://localhost:3001"
			}
		]
	}
}
```

## Roadmap

- Add full SSL support.
- Better documentation.
- NodeJitsu support.
- Docker Image.


