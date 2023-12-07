// CommonJS, every file is a module (by default)
//  modules Encapsulated Code (only share minimum)

const { john, peter } = require("./4-names.js");
const { SayHelo } = require("./5-utils.js");
const data = require("./6-alternative.js");
require("./7-mind-granade.js");
SayHelo("greg");
SayHelo(john);
SayHelo(peter);
