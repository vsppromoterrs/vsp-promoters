const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to send email (implement in step 3)
app.post('/send-email', require('./emailHandler'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
