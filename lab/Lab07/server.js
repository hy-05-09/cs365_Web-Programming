var path = require("path");
var express = require("express");
var server = express();
const PASSWORD = 1234;

bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({extended: true}));

let voteTotals = {}; //empty object

server.post("/vote", function(req, res) {
	//Establish the variable for this candidate, if needed, then increment their total.
	if (!voteTotals[req.body.candidate]) voteTotals[req.body.candidate] = 0;
	voteTotals[req.body.candidate]++;
	
	res.write("You voted for " + req.body.candidate +"\n");

	//Print out all the candidates' totals.
	for(person in voteTotals) {
		res.write(person + " has " + voteTotals[person]+"\n");
	}
	res.end();
});

server.get("/numberOfCandidates", function(req, res) {
	res.set("Content-Type", "text/plain"); //Tells the browser what kind of content this will be
	// res.set("Content-Type", "text/html");
	res.set("Cache-Control", "no-cache");  //Tells the browser: "don't use a cached response; ask the server every time".
	// res.set("Cache-Control", "max-age=10");
	// res.write("My estimate is " + 100*Math.random() ); //sends this text as a response to the client
	// res.write("<h1>My estimate is " + 100*Math.random() + "</h1>");
	res.write("Number of candidates: " + Object.keys(voteTotals).length );
	res.end(); //done with the response to the client
});

server.get("/totalVotes", function(req, res) {
	let total = 0;
    for (let person in voteTotals) {
        total += voteTotals[person];
    }
	res.set("Content-Type", "text/plain"); 
	res.set("Cache-Control", "no-cache");  
	res.write("Number of total votes: " + total);
	res.end(); 
});

server.get("/reset", function(req, res) {
	const userPassword = req.query.password;

	if (userPassword == PASSWORD) {
		voteTotals = {};
		res.write("Vote is reset.");
	} else {
		res.write("Incorrect Password");
	}
	res.end();
});

server.get("/candidateVotes", function(req, res) {
    
	res.set("Content-Type", "text/plain"); 
	res.set("Cache-Control", "no-cache");  
	res.write(req.query.candidate + " get " + voteTotals[req.query.candidate]);
	res.end(); 
});

server.use(express.static(path.join(__dirname, "pub")));

server.listen(80, function() {
	console.log("Server is now running on port 80."); //This callback happens once the server is ready.
});