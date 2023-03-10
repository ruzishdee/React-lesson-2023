console.log('day-55');

const { request, response } = require('express');
const express = require('express')

const app = express()

app.use(express.json())

app.use(express.static('public'))

const PORT = 8080;
const returnHTML = `
<html>
    <head>
    <title>Hello ExpressJS</title>
    <link href="/style.css" rel="stylesheet"/>
    </head>
    <body>
    <h1>Hellow Express</h1>
    <button onclick="alertMe()">Click me </button>
    </body>
    <script src="/script.js"></script>
</html>
`
app.get('/', (request, response) => {
    response.send(returnHTML)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})