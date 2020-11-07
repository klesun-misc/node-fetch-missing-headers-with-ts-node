
const tsNode = require('ts-node');

tsNode.register({transpileOnly: true});

require('./test_with_ts_node_impl');