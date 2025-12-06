const OSC = require('osc-js')
const config = { udpClient: { port: 5198, host: '10.0.0.33' } }
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })
osc.open() // start a WebSocket server on port 8080
