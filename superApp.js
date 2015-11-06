console.log("Welcome To the Epic quest of adventure!");

process.stdin.resume();
process.stdin.setEncoding('utf8');
 
process.stdin.on('data', function (chunk) {
 process.stdout.write('data: ' + chunk);
});

function ask(question, format, callback) {
 var stdin = process.stdin, stdout = process.stdout;
 
 stdin.resume();
 stdout.write(question + ": ");
 
 stdin.once('data', function(data) {
   data = data.toString().trim();
 
   if (format.test(data)) {
     callback(data);
   } else {
     stdout.write("It should match: "+ format +"\n");
     ask(question, format, callback);
   }
 });
}

ask("You arrive in a small town with two roads, north and south, wich way do you want to go?", /.+/, function(road1) {
    console.log("You went",road1 ,"you followed the path and saw a big dark cave");
 
    process.exit();
  });
