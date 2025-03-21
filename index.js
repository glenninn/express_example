const express = require("express");
const app=express();

// these use operations configure Express's web server to
// be able to process JSON and url encoded payloads in the
// http body
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

// this operation defines where Express serves  static files
// for example:
// http://localhost:4000
//   will cause Express to serve the file in ./html/index.html
app.use(express.static("html"));

// The TCP port that we'll have our Web Server listening on
const ourPort = 4000;

// this is one of Glenn's pet utility functions.  It is a
// pretty-formatter for a JSON data-object
const jss = (...o)=>JSON.stringify(o[0],null,o[1] ? 2 : 0);


// now we will define our first API endpoint handler.
// it will respond to an http GET to the url: http://localhost:4000/hello
app.get("/hello",  // <-- the URL Express listens for
    (req,res)=>{    // <-- inline handler function where req is the request object
                    // <-- and res is the response object
        console.log(`/hello API received`);

        // Now we'll respond back to the caller with an http 200 status
        // and a JSON data object with a greeting message
        res.status(200).json(
            {
                toTheWorld: "hello world"
            }
        );
});


// Example of a handler for an HTTP post call.
app.post("/sending", (req,res)=>{
    const payload = req.body;
    console.log(`/sending called with: ${jss(payload,1)}`);

    const responseData = {
        backToYou: "I got it...",
        received: payload
    }
    res.status(200).json(responseData);
});


// Now let's setup the web server
app.listen( ourPort, ()=>{
    console.log(`The Express Web Server is Running.  It listens on Port: ${ourPort}`)
});
