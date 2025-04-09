const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json({ statusCode: 200, data: projects, message: 'Success' });
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
};
