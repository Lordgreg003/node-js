// npm - Global command, comes with node
// npm --version

// local dependency - use it only in this paticular project
// npm i <packageName>

// global dependency - use it in any project
// npm install  -g <packageName>

// package.json - manifest file (stores important info about project/packages)'
// manual approach (create package.json in the root, creat properties etc)
// npm init (step by step ,press enter to skip)
// npm init -y (everthing default )

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
