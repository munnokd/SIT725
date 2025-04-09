const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

const projectRoutes = require('./routes/projectRoutes');

app.use(express.static(__dirname + '/views'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});


app.use('/api', projectRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
