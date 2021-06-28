const express = require('express')
const process = require('process')
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000; //eslint-disable-line no-undef
console.log(PORT) //eslint-disable-line no-console

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log("server started on port 5000"); //eslint-disable-line no-console
});
