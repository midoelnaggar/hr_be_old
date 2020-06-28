const employeeListController = require('../controllers/employeeController');

module.exports =  employeeRoute = (app) =>{
    app.route('/employees')
    .get(employeeListController);
}
