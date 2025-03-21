# Very Simple Web Server in Javascript

This github project provides a very basic design of a web server:
- Written in Javascript
- Utilizing the open source module, **Express**

## Getting Started
1. Install Node. If you need to download, it is [available here](https://nodejs.org/en/download)
2. Clone this repository
3. Initialize the project environment using this command: `npm init`

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

