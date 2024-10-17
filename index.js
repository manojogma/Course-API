const express = require("express");
const app = express();
const Joi = require("joi");
const courses = require('./routes/courses');
const home = require('./routes/home');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/courses', courses);
app.use('/', home);
app.use(logger);

const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Listening on port ${port}...`));
