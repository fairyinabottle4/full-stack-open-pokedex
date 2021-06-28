const express = require('express')
const process = require('process')
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000; //eslint-disable-line no-undef
console.log(PORT) //eslint-disable-line no-console

app.use(express.static("dist"));

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log("server started on port 5000"); //eslint-disable-line no-console
});
