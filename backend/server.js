const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const allowedOrigins = [
  'http://localhost:3000',
  'https://vsppromoter-1794.web.app',
  'https://vsp-promoters.web.app',
  'https://vsppromoters.com',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());



// Route to send email (implement in step 3)
app.post('/send-email', require('./emailHandler'));

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
