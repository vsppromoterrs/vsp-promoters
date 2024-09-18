const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const allowedOrigins = [
  'http://localhost:3000',
  'https://vsppromoter-1794.web.app',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  }
}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Route to send email (implement in step 3)
app.post('/send-email', require('./emailHandler'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
