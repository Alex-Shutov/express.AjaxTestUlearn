const express = require('express')
const app = express()
const dotenv = require("dotenv");
const port = process.env.PORT || 3000
dotenv.config();

app.use(express.static("public"))

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on ${process.env.HOSTNAME}:${port}`)
})

module.exports = app;
