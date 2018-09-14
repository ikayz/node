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

// Accepting input
var questions = [
    "What is your name?",
    "Where do you live?",
    "What is your favourite programming language?"
]

var res = [];

function ask(i) {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(" > ");
}

// process.stdin and process.stdout are ways of communicating with the process
process.stdin.on('data', function(data) {
    res.push(data.toString().trim());

    if(res.length < questions.length) {
        ask(res.length);
    } else {
        process.exit();
    }
});

process.on('exit', function(){
    process.stdout.write('\n\n\n');
    process.stdout.write(`You are ${res[0]}, you love ${res[2]} and live in ${res[1]}`);
    process.stdout.write('\n\n\n');
});

ask(0);