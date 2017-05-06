# NoInfoPath Reverse Proxy

## Overview

The NoInfoPath Reverse Proxy is an implementation of RedBird. See [RedBird Project README](https://github.com/OptimalBits/redbird/blob/master/README.md)
for configuration details.

NoInfoPath adds a simple configuration file to make setting project quick and easy.

## Configuration

### Development Computers

#### OSX and Linux Configuration
* [Configure OSX for Development SSL](https://gist.github.com/jed/6147872)

#### Windows

> NOTE: For Windows you will need to either create entries for each host in your
\\windows\\system32\\drivers\\etc\\hosts file. Alternately you could try what is
suggested in this Stack Overflow article. [How to resolve all .dev domains to localhost on Windows](https://serverfault.com/questions/539591/how-to-resolve-all-dev-domains-to-localhost-on-windows)

* [Howto: Make Your Own Cert With OpenSSL on Windows](https://blog.didierstevens.com/2015/03/30/howto-make-your-own-cert-with-openssl-on-windows/)

### Create/Edit config.json for a project.

```json
{
	"debug": {
		"inboundPort": 8080,
		"ssl": {
			"port": 8443,
			"key": ".certs/foo.test.key",
			"cert": ".certs/foo.test.crt"
		},
		"proxies": [{
				"source": "restapi.foo.test",
				"dest": "http://localhost:3002"
			},
			{
				"source": "www.foo.test",
				"dest": "http://localhost:3000"
			}
		]
	}
}

```

### Product Servers

> TODO: Write production configuration instructions.
