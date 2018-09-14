var hello = "Hello World";
var helloNode = `${hello} from Node JS`; 

// This will work
console.log(helloNode);

// This will return undefined
console.log(global.helloNode);