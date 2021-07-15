
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ariel:ariel123@cluster0.punfp.mongodb.net/ariel2?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


MongoClient.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true } ,function(err, db) {
  if (err) throw err;
  var dbo = db.db("ariel2");
  
  dbo.collection("test2").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});