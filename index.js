const Path = require("./Path");

let demo = new Path("/var/lib");

demo.cd("path");

console.log("Path should be /var/lib/path, it's " + demo.getCurrentPath());
