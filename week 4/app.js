var express = require("express");
var app = express();
var port = 3000;
const mongoose = require('mongoose');
var cors = require("cors");  // Import CORS package

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cors());  
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/myprojectDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,  
});

const Project = mongoose.model('Project', ProjectSchema);


app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json({ statusCode: 200, data: projects, message: 'Success' });
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
