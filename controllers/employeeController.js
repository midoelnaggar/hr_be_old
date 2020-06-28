const employeeModel = require('../models/employeeModel');

module.exports = employeeListController = (req,res) => {
    employeeModel.find()
    .then((employees => res.json(employees)))
    .catch(err => res.status(400).json('Error: ' + err));
}
