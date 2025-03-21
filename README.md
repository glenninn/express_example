# Very Simple Web Server in Javascript

This github project provides a very basic design of a web server:
- Written in Javascript
- Utilizing the open source module, **Express**

## Getting Started
1. Install Node. If you need to download, it is [available here](https://nodejs.org/en/download)
2. Clone this repository
3. Install this project's environment using this command: `npm install`

## Launching the Web Server
1. You can launch the web server using either of the following
2. - `npm start`
   - `node index.js`
3. You should see this response when the app starts:
```
$ node .\index.js
The Express Web Server is Running.  It listens on Port: 4000
```

## The basic "hello world"
The app contains a "hellow world" handler.  To invoke, send this CURL (or use a browser):
`$ curl --location 'http://localhost:4000/hello'`

## An example of a http POST handler
The app also includes a sample handler for an http POST message.  You can invoke using this CURL:
```
$ curl -X POST http://localhost:4000/sending -H "Content-Type: application/json" -d "{\"pkg\":\"for Loc\", \"items\":1}"

```

## Serving static HTML files, etc
Express also allows you to serve static files (html, css, js, etc). As defined in this application, there is a folder/directory in the project called `/html`.  This is where the static files are pulled.  So If you open a browser and goto: 

`http://localhost:4000`

The application will send the index.html file and you will see a simple page in the browser

