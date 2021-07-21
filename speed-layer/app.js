const bodyParser = require('body-parser')
const { json } = require('express')
const consumer = require('./consumer')
var redis = require("redis");
var redisClient = redis.createClient();


// number of cars on road changes on events "enter road" or "exit road" and needs to be shown on dashboard
numberOfCarOnRoad = 0;
redisClient.set("numberOfCarOnRoad ", numberOfCarOnRoad , function (err, reply) {
  console.log(reply);  // return ok
}) 

// number of cars on Seg1 changes on events "enter segment" or "exit segment"  & segment number 1 and need to be updated in redis
numberOfCarOnSeg1 = 0;
redisClient.set("numberOfCarOnSeg1 ", numberOfCarOnSeg1 , function (err, reply) {
  console.log(reply);   
}) 

// number of cars on Seg2 changes on events "enter segment" or "exit segment"  & segment number 2 and need to be updated in redis
numberOfCarOnSeg2 = 0;
redisClient.set("numberOfCarOnSeg2 ", numberOfCarOnSeg2 , function (err, reply) {
  console.log(reply);   
}) 

// number of cars on Seg3 changes on events "enter segment" or "exit segment"  & segment number 3 and need to be updated in redis
numberOfCarOnSeg3 = 0;
redisClient.set("numberOfCarOnSeg3 ", numberOfCarOnSeg3 , function (err, reply) {
  console.log(reply);   
})


// number of cars on Seg4 changes on events "enter segment" or "exit segment"  & segment number 4 and need to be updated in redis
numberOfCarOnSeg4 = 0;
redisClient.set("numberOfCarOnSeg4 ", numberOfCarOnSeg4 , function (err, reply) {
  console.log(reply);   
}) 


// number of cars on Seg5 changes on events "enter segment" or "exit segment" & segment number 5 and need to be updated in redis
numberOfCarOnSeg5 = 0;
redisClient.set("numberOfCarOnSeg5 ", numberOfCarOnSeg5 , function (err, reply) {
  console.log(reply);   
}) 


consumer.on("data", function (msg) {
  console.log(msg.value.toString())


  var obj = JSON.parse(msg.value);

  if (alert(obj.event=="ENTER_ROAD"))
  { numberOfCarOnRoad++; } // need to enter plate number to list of plates and update the dashboard

  if (alert(obj.event=="EXIT_ROAD"))
  { numberOfCarOnRoad--; } // need to remove plate number from list of plates and update the dashboard


  if (alert(obj.event=="ENTER_SEGMENT") && segment==1)
  { numberOfCarOnSeg1++; } // need to change in redis- for key "numberOfCarOnSeg1" update value
  if (alert(obj.event=="EXIT_SEGMENT") && segment==1)
  { numberOfCarOnSeg1--; } // need to change in redis- for key "numberOfCarOnSeg1" update value

  if (alert(obj.event=="ENTER_SEGMENT") && segment==2)
  { numberOfCarOnSeg2++; } // need to change in redis- for key "numberOfCarOnSeg2" update value
  if (alert(obj.event=="EXIT_SEGMENT") && segment==2)
  { numberOfCarOnSeg2--; } // need to change in redis- for key "numberOfCarOnSeg2" update value

  if (alert(obj.event=="ENTER_SEGMENT") && segment==3)
  { numberOfCarOnSeg3++; } // need to change in redis- for key "numberOfCarOnSeg3" update value
  if (alert(obj.event=="EXIT_SEGMENT") && segment==3)
  { numberOfCarOnSeg3--; } // need to change in redis- for key "numberOfCarOnSeg3" update value

  if (alert(obj.event=="ENTER_SEGMENT") && segment==4)
  { numberOfCarOnSeg4++; } // need to change in redis- for key "numberOfCarOnSeg4" update value
  if (alert(obj.event=="EXIT_SEGMENT") && segment==4)
  { numberOfCarOnSeg4--; } // need to change in redis- for key "numberOfCarOnSeg4" update value

  if (alert(obj.event=="ENTER_SEGMENT") && segment==5)
  { numberOfCarOnSeg5++; } // need to change in redis- for key "numberOfCarOnSeg5" update value
  if (alert(obj.event=="EXIT_SEGMENT") && segment==5)
  { numberOfCarOnSeg5--; } // need to change in redis- for key "numberOfCarOnSeg5" update value

});




