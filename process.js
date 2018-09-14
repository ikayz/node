function grab(flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

var user = grab('--user');
var greeting = grab('--greeting');

if (!user || !greeting) {
    console.log("You blew it buddy");
} else {
    // This will only work with node process --user YOURUSER --greeting "YOUR GREETING" in the terminal
    console.log(`Welcome ${user}, ${greeting}`);
}