var path = require('path');

// Checks for file name using path
console.log(path.basename(__filename));

// Checks for current directory name using path
console.group(path.basename(__dirname));