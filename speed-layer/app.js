const bodyParser = require('body-parser')
const { json } = require('express')
const consumer = require('./consumer')

consumer.on("data", function (msg) {
  console.log(msg.value.toString())
	// insert doc to DB
  // make prediction
});

// const app = express()
// app.use(bodyParser.json())
// app.use(routes)

// init().then(() => {
//   console.log('starting server on port 3000')
//   app.listen(3000)



