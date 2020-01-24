const db = require('../database');
const Picsum = require('picsum-photos');
const faker = require('faker');
require('dotenv').config();


const databaseSeeder = () => {
  let i = 0;

  db.verifyConnection().
    then(() => {
      // create a while loop
      while ( i < 10 ) {
        console.log(i);
        // get fake data
          // some for seller

          // some for product

        // get fake picture url
          // one for seller
          // one for product

        // create an object

        // send the object to the database
          // have a catch block for errors

        // increment i by one
        i++;
      }

    })

};

databaseSeeder();