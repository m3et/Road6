const bodyParser = require('body-parser')
const { json } = require('express')
const { initDB, insertItem, printCollection } = require('./db')
const consumer = require('./kafkaConsume')


initDB().then(() => {
  console.log('Mongo is connected')
  printCollection()
  
})

consumer.on("data", function (msg) {
  console.log(msg.value.toString());
  insertItem((JSON.parse(msg.value.toString())))


	// insert doc to DB
  // make prediction
});

// const app = express()
// app.use(bodyParser.json())
// app.use(routes)

// init().then(() => {
//   console.log('starting server on port 3000')
//   app.listen(3000)



