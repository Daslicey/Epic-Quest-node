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
ask("You awaken in a town, there are 2 roads, north and south. wich way do you want to go?", /.+/, function(road1) {
    console.log("You went",road1, "and continued the road untill you reached a well");

    process.exit();
  });
  console.log("You look down the well and see a bucket, there is a sword in it!")

  
console.log("sequel is available as DLC for just $50 each episode");