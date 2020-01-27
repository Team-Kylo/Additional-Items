const app = require('./app');
require('dotenv').config();

const port = process.env.ADDITIONAL_ITEMS_PORT || 3004;

app.listen(port, console.log(`Listening on port ${port}`));
