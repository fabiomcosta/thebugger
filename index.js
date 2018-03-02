const inspector = require('inspector');

function thebugger({port, host} = {}) {
  const {debugOptions} = process.binding('config');
  inspector.open(port || debugOptions.port, host || debugOptions.host, true);
}

module.exports = thebugger;
