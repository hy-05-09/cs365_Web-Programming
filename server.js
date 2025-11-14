var bodyParser = require("body-parser");

var app = express(); //gets an instance of express.

app.use(bodyParser.urlencoded({extended: true})); //for POST requests.
app.use(express.static("pub")); //serve up static files publicly (.html, .jpg, .css, etc.)

let listOfThings = [];

//This is to respond to GET requests at the URL "/exampleGet"
app.get("/exampleGet", function(req, res){
    res.header("Content-Type", "text/html");
    res.write("GET request"); //responses written back to the client.
    for (a in req.query){ //'a' gets to be every property name in that object (req.query)
        res.write("\n" + a + "was <b>equal</b> to " + req.query[a]);
    }
    res.write("<html><body><table>");
    listOfThings.map((v)=>{"<tr><td>"+v+"</td></tr>"}).forEach((a) => {res.write(a)});
    for (a in listOfThings){ //'a' gets to be every property name in that object (req.query)
        res.write("<tr><td>"+a+"</td></tr>");
    }
    res.write("count is now" + count);
    res.end(); //end writing back the response
});

let count = 0;

//This is to respond to POST requests at the URL "/examplePost"
app.post(".examplePost", function(req, res){
    res.header("Content-Type", "text/plain");
    count++;
    listOfThings.push(req.body.thing);
    res.write("POST request"); //response written back to the client.
    for (a in req.query){ //NOTE: we use req.body instead of req.query when doing POST
        res.write("\n" + a + "was <b>equal</b> to " + req.body[a]);
    }
    console.log(count);
    res.end(); //end writing back the response
})

app.listen(80, function{
    console.log();
});