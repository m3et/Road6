const { initDB, insertDoc, closeDB } = require('./db')
const consumer = require('./consumer')

async function run() {
  await initDB().then(console.log)
    .catch(console.error)


}


run()

consumer.on("data", function (msg) {
  // console.log(msg.value.toString());
  insertDoc((JSON.parse(msg.value.toString())))  
});



// const app = express()
// app.use(bodyParser.json())
// app.use(routes)

// init().then(() => {
//   console.log('starting server on port 3000')
//   app.listen(3000)



