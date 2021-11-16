# mkcert example

This example shows how to configure https with nodejs.

[mkcert](https://github.com/FiloSottile/mkcert) is a command utility for creating locally trusted certificates.

```
mkcert -install
mkcert 127.0.0.1
```

Once the locally trusted certificates are generated, you start the local server.

```
npm start
```
