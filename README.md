# **ROAD 6**

Project represent a road divided with segments and cars entering and exiting at different rates and places.

We used Lambda architecture consists of three main service component running separately to allow near real time data processing as well as batch processing and ML predictions using BigML.

## Tools and Frameworks used:

- Node.js
- Express.js
- Docker
- Kafka
- Socket.<area>IO
- MongoDB
- Redis
- BigML

## Batch layer

Batch layer provides the functionality of append-only set of raw data and computed batch views.

The batch layer insert the data to MongoDB and each time a new cars enter the road makes a prediction on where the car will exit.

It serves as correction of the speed layer because it can aggregate large volumes of historical data.

## Speed layer

Speed layer processes data consumed from Kafka in real time and compute and update the dashboard.

It is responsible for filling real time update to Redis and dashboard monitoring of the car status on the road using Socket.io

By caching data on redis it can provide fast, real time views of real time data.

## Data Simulator

Data Simulator produce data to Kafka which is the consumed by the other layer.

The data is of the form of "events" simulating real car entry and exiting from the road or road segment.

---

## Install

    $ git clone https://github.com/m3et/Road6
    $ cd Road6
    if wish to run locally:
    $ npm install

## Running the project

    docker-compose up

## Accessing Dashboard

    localhost:4000

## Accessing Confusion-Matrix

    localhost:3000

---

## Running Requirements

You will only need Docker installed in your environnement, or Node.js then npm install locally.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
