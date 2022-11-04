require("dotenv").config()

const httpProxy = require("http-proxy")
//
// Create your proxy server and set the target in the options.
//
console.log(`process.env.TARGET_PORT`, process.env.TARGET_PORT)
console.log(`Proxy listens on port`, process.env.PROXY_PORT)
// httpProxy.createProxyServer({target:`http://172.30.138.30:${process.env.TARGET_PORT}`}).listen(process.env.PROXY_PORT || 9001); // See (†)
httpProxy
  .createProxyServer({ target: `http://localhost:${process.env.TARGET_PORT}` })
  .listen(process.env.PROXY_PORT || 9001) // See (†)
