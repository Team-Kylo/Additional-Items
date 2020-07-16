# Crafty
Full-stack application composed of several microservices that were brought together as a product page.

## Additional Items
Microservice that shows additional products from the current seller. Allows the user to endlessly scroll in either direction.

## Technology Used
* Node.js w/ Express
* MongoDB w/ Mongoose
* React
* Styled Components
* Webpack
* Jest

## How to Use
Command | Result
----------|---------
`npm run seed` | Seeds MongoDB with 10 sellers with 10 items each
`npm run dev:build` | Builds webpack bundle, watching, in developement mode
`npm run dev:start` | Starts the server with nodemon
`npm run build` | Build bundle in production mode
`npm run start` | Starts the server with node
`npm test` | Runs Jest test suite
