require('dotenv').config();
const express = require('express');
const sequelize = require('./database');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('/static', express.static('static'));
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start();
