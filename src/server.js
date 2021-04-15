const express = require('express');

const routes = require('./routes/routes');
const db = require('./database/db');

const app = express();

db.connect();

// habilitando servidor para receber dados json
app.use(express.json());

app.use('/api', routes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});